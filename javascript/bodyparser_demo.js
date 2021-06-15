const express = require("express");
const bodyParser = require("body-parser");

var app = express();

// MIDDLEWARE

app.use(bodyParser.urlencoded({ extended: true }));

// MIDDLEWARE

app.post('/', (req, res) => {
	// After the bodyParser being installed in the npm,
	// And set up in the server, you have access to the
	// req.body object. It uses the name/id attribute of form elements.
	
	// Imagine this html:
	// <form action="/" method="post">
	//   <input type="text" name="title" id="title">
	// </form>

	// Object from the form
	// console.log(req.body)

	// Value of the key 'title'
	// console.log(req.body.title)
})