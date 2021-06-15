const url = require('url');

// after the html, "id=100 & status=active" are parameters
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
// console.log(myUrl.href);
// console.log(myUrl.toString());

// Host (root domain); includes the port
// console.log(myUrl.host);

// Hostname; no port
// console.log(myUrl.hostname);

// Pathname
// console.log(myUrl.pathname);

// Serialized query
// console.log(myUrl.search);

// Params object
// console.log(myUrl.searchParams);

// Add param
// console.log(myUrl.searchParams.append('abc', '123'));
// console.log(myUrl.searchParams);

// Loop through params
// myUrl.searchParams.forEach((value, name) => {
//     console.log(`${name} : ${value}`);
// });

//
// console.log(myUrl);
