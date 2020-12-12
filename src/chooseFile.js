// choose the file and extract the content of the file and then display it to the left textarea



// select choose file input element
const choosefileInput = document.querySelector("#choose-file");

// select left text area where the content of file is being displayed
const codeTextArea = document.querySelector("#code-output");

// select the right text area where the tokens will be displayed
const tokenOutputArea = document.querySelector("#tokens-output");

// Choose file button code 
choosefileInput.addEventListener("change", () => {
    const file = choosefileInput.files[0]; // Get file

    const checkExt = file.name.indexOf("fab"); // Check Extension
    
    const fileRead = new FileReader(); // Object of file reader

    if (checkExt > 0) { // if there is .fab extension then displayed the content
        fileRead.onload = (e) => {
            const file = e.target.result;
            codeTextArea.value = file;
        }

        fileRead.readAsText(file);
    }
    else { // else displayed an error
        alert("please upload .fab file");
    }
})


// Remove the content of text area when click on choose code button

document.querySelector("#custom-choose-file").addEventListener("click", () => {
    // empty the text areas when the user chooses new files.
    codeTextArea.value = "";
    tokenOutputArea.value = "";
})