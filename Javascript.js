document.addEventListener('DOMContentLoaded', function() {
    const nameButton = document.getElementById('nameButton');
    const output = document.getElementById('output');
    const image = document.getElementById('enlargedImage');

    nameButton.addEventListener('click', function() {
        const name = prompt('Please enter your name:');
        if (name) {
            output.textContent = `Hello, ${name}!`;
        } else {
            output.textContent = 'You did not enter a name.';
        }

        image.addEventListener('click', function() {
            image.classList.toggle('enlarged');
    });
});
});
function mouseOver(element) {
    element.style.backgroundColor = "#333";
    element.style.color = "#fff";
}

function mouseOut(element) {
    element.style.backgroundColor = "";
    element.style.color = "";
}

function mouseOverDropdown(element) {
    element.querySelector(".dropbtn").style.backgroundColor = "#333";
    element.querySelector(".dropbtn").style.color = "#fff";
}

function mouseOutDropdown(element) {
    element.querySelector(".dropbtn").style.backgroundColor = "";
    element.querySelector(".dropbtn").style.color = "";
}
