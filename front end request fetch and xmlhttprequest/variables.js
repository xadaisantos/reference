let createUl = (status, text) => {
    return `
    <ul>
        <li>Status: ${status}</li>
        <li>ResponseText: ${text}</li>
    </ul>`
};

let responseDiv = document.getElementById("response");

let method = "GET";

// let url = "http://api-pacientes.herokuapp.com/pacientes"
