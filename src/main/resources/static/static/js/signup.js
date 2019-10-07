// TODO
// iconUsername is not working when I tried to change the icon inside the event listener

let buttonSubmit = document.querySelector("button[type='submit']");
// let iconUsername = document.querySelector(".fas#username");
let fieldUsername = document.querySelector(".input#username");
let captionUsername = document.querySelector(".help#username");

buttonSubmit.disabled = true;

fieldUsername.addEventListener("change", () => {
    let isValidUsername = (/^[a-z0-9]{5,12}$/).test(fieldUsername.value);
    let validFieldColor = (isValidUsername)?"is-success":"is-danger";
    let validMessage = (isValidUsername)?"Username is available":"Invalid username";

    fieldUsername.classList.remove(!validFieldColor);
    fieldUsername.classList.add(validFieldColor);

    captionUsername.classList.remove(!validFieldColor);
    captionUsername.classList.add(validFieldColor);
    captionUsername.innerText = validMessage;

    buttonSubmit.disabled = !isValidUsername;
    
    // iconUsername.classList.remove("fa-exclamation-triangle");
    // iconUsername.classList.add("fa-check");
});

// TODO
// Implement AJAX signup

buttonSubmit.addEventListener("click", () => {

});