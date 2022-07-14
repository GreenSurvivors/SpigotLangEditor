import "./js-yaml.min.js";
import "./codemirror/codemirror.js";
import "./codemirror/mode/yaml/yaml.js"
import "./codemirror/addon/search/search.js"
import "./codemirror/addon/search/searchcursor.js"
import "./codemirror/addon/search/jump-to-line.js"
import "./codemirror/addon/search/matchesonscrollbar.js"
import "./codemirror/addon/dialog/dialog.js"
import "./codemirror/addon/scroll/annotatescrollbar.js"


const editor = createCodemirrorEditor();
editor.setSize('100%', '100%');

editor.on("change", function (cm, changeObj) {
    refreshPreview();
});

const showKeys = document.querySelector('#showKeys')
showKeys.onclick = function() {
    refreshPreview();
};

/**
 * Creates the Editor
 * @returns Codemirror-Object
 */
function createCodemirrorEditor() {
    return CodeMirror.fromTextArea(document.querySelector('#config-field'), {
        lineNumbers: true,
        mode: 'text/x-yaml',
        matchBrackets: true,
        indentUnit: 2,
        tabSize: 2,
        indentWithTabs: false,
        theme: 'cobalt',
        extraKeys: {"Alt-F": "findPersistent"}

    });
}

/**
 * Refreshes the preview
 */
function refreshPreview() {
    let preview = document.querySelector('#preview');
    let showKeysCheckbox = document.querySelector('#showKeys');

    let config = jsyaml.load(editor.getValue());

    let map = flattenObjectToMap(config);

    const showKeys = showKeysCheckbox.checked;

    let output = "";

    for (var key in map) {
        if (showKeys === true) {
            output += `<h5>${key}</h5>`;
        }
        let value = colorizeMinecraft(map[key]);
        output += `<p class="minecraft-font">${value}</p>`
    }
    preview.innerHTML = output;   
}

/**
 * Replaces Bukkit color codes with corresponding HTML elements
 * @param {*} string 
 * @returns 
 */
function colorizeMinecraft(string) {
    let count = 0
    string = string.replace(/&([0-9a-f])/ig, function(match, p1) {
        count++;
        return `<span class=\"minecraft-color mc-code-${p1}\">`;
    });

    for (let index = 0; index < count; index++) {
        string += "</span>";
    }

    string = string.replace(/&([l-or])/ig, function(match, p1) {
        count++;
        return `<span class=\"mc-code-${p1}\">`;
    });

    for (let index = 0; index < count; index++) {
        string += "</span>";
    }
    

    return string;
};

/**
 * Takes an object and creates a map with keys equally to the objects structure, seperated with dots.
 * @param {*} obj 
 * @param {*} stack 
 * @returns 
 */
function flattenObjectToMap(obj, stack = "") {
    let flattened = [];
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                let flattenedChildren = flattenObjectToMap(obj[property], stack + (stack.length > 0 ? '.' : '') + property);
                flattened = {...flattened, ...flattenedChildren};
            } else {
                let key = stack + (stack.length > 0 ? '.' : '') + property;
                let value = obj[property]
                flattened[key] = value;
            }
        }
    }
    return flattened
}






