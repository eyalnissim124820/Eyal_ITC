const codingLanguages = ["HTML", "CSS", "JavaScript"];

let text = "";
const arrayLength = codingLanguages.length;

for (let i = 0; i < (arrayLength); i++) {
    if (i < (arrayLength - 2)) {
        text = text.concat(codingLanguages[i], ", ");
    } else if (i == arrayLength - 2) {
        text = text.concat(codingLanguages[i], " and ", codingLanguages[i + 1]);
    }
}

let starter = "This website has been created with: ";
starter = starter.concat(text);


document.querySelector('#footer-languages').innerHTML = starter;

