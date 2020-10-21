let buttonOne = document.getElementById("xmlhttprequest");

buttonOne.addEventListener("click", () => {
    console.clear();

    let key = document.getElementById("input").value;
    let url = `http://api-pacientes.herokuapp.com/${key}`;

    let xhr = new XMLHttpRequest();
    
    xhr.open(method, url);
    xhr.addEventListener("load", () => {
        console.log(xhr);
        if (xhr.status >= 200 && xhr.status < 400){
            responseDiv.innerHTML = createUl(xhr.status, xhr.responseText);
        } else {
            responseDiv.innerHTML = "Sorry, there was a problem.";
        }
    })
    xhr.send();
})
