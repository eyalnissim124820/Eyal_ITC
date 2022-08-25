function enableSubmit() {
    let inputs = document.getElementsByClassName('required-cell');
    let submitButton = document.querySelector('input[id="submit-button"]');

    let isValid = true;

    for (let i = 0; i < inputs.length; i++) {

        let changedInput = inputs[i];

        if (changedInput.value.trim() === "" || changedInput.value === null) {
            isValid = false;

            break;
        }
    }

    submitButton.disabled = !isValid;
}