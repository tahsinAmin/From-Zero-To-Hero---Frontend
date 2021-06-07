const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';
//
// function update(bgColor, textColor) {
//     html.style.backgroundColor = bgColor;
//     html.style.color = textColor;
// }
//
// select.onchange = function() {
//     ( select.value === 'black') ? update('black', 'white') : update('white','black');
// }

select.onchange = function() {
    const choice = select.value;

    // ADD SWITCH STATEMENT
    switch(choice) {
        case 'black':
        update('black','white');
        break;
        case 'white':
        update('white','black');
        break;
        case 'purple':
        update('purple','white');
        break;
        case 'yellow':
        update('yellow','darkgray');
        break;
        case 'psychedelic':
        update('lime','purple');
        break;
    }
}

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}
