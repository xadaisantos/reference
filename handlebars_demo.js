const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout:"main" }));
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
	res.render('home');
})

// Create a folder called views ( second argument of the first app.set() )
// inside it a folder called layouts
// inside it a file called main.handlebars ( second argument of app.engine() )


const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server connected on port ${port}`);
})