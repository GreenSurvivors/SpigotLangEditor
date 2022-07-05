configField = document.querySelector('#config-field');
previewBtn = document.querySelector('#preview-btn');
preview = document.querySelector('#preview');
previewBtn.onclick = function() {
    text = colorizeMinecraft(configField.value);
    preview.innerHTML = text;
} 

function colorizeMinecraft(string) {

    // $string = preg_replace('/&([0-9a-f])/i', '<span class="mc-color mc-$1">', $string, -1, $count) . str_repeat("</span>", $count);
    // $string = utf8_encode(preg_replace('/&([k-or])/i', '<span class="mc-$1">', $string, -1, $count) . str_repeat("</span>", $count));
    // let isOpenSpan = false;

    // string = string.replace(/&([0-9a-f])/ig, function(match, p1) {
    //     if (isOpenSpan === true) {
    //         return `</span><span class=\"minecraft mc-code-${p1}\">`;
    //     }
    //     isOpenSpan = true;
    //     return `<span class=\"minecraft mc-code-${p1}\">`;
    // });

    // if (isOpenSpan === true) {
    //     string += '</span>';
    // }

    // // for (let index = 0; index < count; index++) {
    // //     string += "</span>";
    // // }

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
}


