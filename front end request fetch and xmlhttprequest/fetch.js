let buttonTwo = document.getElementById("fetch");

buttonTwo.addEventListener("click", () => {
    console.clear();

    let key = document.getElementById("input").value;
    let url = `http://api-pacientes.herokuapp.com/${key}`;

    fetch(url, {method: method}).then(response => {
        console.log(response);
        if (response.ok){
            return response.text().then(data => {
                responseDiv.innerHTML = createUl(response.status, data);
            });
        } else {
            throw new Error('Something went wrong (by xadai)');
        }
    }).catch(error => {
        console.error(error);
        responseDiv.innerHTML = "Sorry, there was a problem.";
    });
})

// fetch().then(response => response)
// The response has some methods:
// json(), text(), redirect(), check for more at https://developer.mozilla.org/en-US/docs/Web/API/Response
