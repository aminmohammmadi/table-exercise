// Fetching data, is asynchronous. It means these steps:
// 1. you ASK for the data. You get a PROMISE.
// 2. you turn the PROMISE into DATA.

// REQUEST -> PROMISE -> DATA

// When fetching data, you do each of these steps once:


fetch('https://example.com/names') //REQUEST
.then(promise => promise.json()) // PROMISE
.then(data => console.log(data)) // DATA

// an example can be:
fetch('https://noviceguru.github.io/doveConvieneJson/data/names.json')
.then(response => response.json()) // Here it waits for the PROMISE to become DATA
.then(data=> console.log(data)) // Here hands you the data.

// Possible questions:
// 1. Why do I need to work with the promise? I just need the data!
// Answer: A promise is not always going to become data. Sometimes it contains rejection ( you have sent something wrong to the server),
// sometimes it's failure (the server is down), plus, you need to the loading phase to your user. You show the <=== ...LOADING ===> bar
// when the promise tells you everything is ok, and you have to wait for your response.

// 2. Can I check the promise? What is normally written in a promise?
// Answer: Yes, you can. It tells you if the operation is going to be done or not, plus a lot of other information.
// We will do it later.