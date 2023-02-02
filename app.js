const getButton = document.getElementById('getButton')
getButton.onclick = ()=>{
    console.log("data got")
    fetch("http://localhost:3000/students")
    .then(response => response.json())
    .then(data => console.log(data))
}

// const postButton = document.getElementById('postButton')
// postButton.onclick = ()=>{
//     console.log('data posted')
//     fetch("http://localhost:3000/students", {
//         method: "POST", 
//         headers: {
//             "Content-Type": "application/json" 
//         },
//         body: JSON.stringify ({
//             "name": "Abolfazl"
//         })
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

const postButton = document.getElementById('postButton')
postButton.onclick =()=>{
    console.log('data successfully sent')
    fetch ('http://localhost:3000/students', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify ({
            "name": "mirzaee"
        })
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
}

const deleteButton = document.getElementById('deleteButton')
deleteButton.onclick = ()=>{
    console.log('the data is deleted')
    fetch("http://localhost:3000/students/1724346")
}