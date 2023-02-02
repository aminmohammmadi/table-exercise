let getButton = document.getElementById('getButton')
getButton.onclick = ()=>{
    console.log("data got")
    fetch("http://localhost:3000/students")
    .then(response => response.json())
    .then(data => console.log(data))
}

let putButton = document.getElementById('putButton')
putButton.onclick = ()=>{
    console.log("data put")
}