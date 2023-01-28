function makeARow (newObject){
    let newRow = document.createElement ('tr')
    let newName = document.createElement ('td')
    let newSurname = document.createElement ('td')
    let newStudentID = document.createElement ('td')

    document.getElementById ('studentTable').appendChild(newRow)
    newRow.appendChild(newName)
    newRow.appendChild(newSurname)
    newRow.appendChild(newStudentID)

    newName.innerText = newObject.name
    newSurname.innerText = newObject.surname
    newStudentID.innerText = newObject.studentId
}

let students = [
    { name: 'Tobye', surname: 'Arabi', studentId: 675806 },
    { name: 'Philipa', surname: 'Arabi', studentId: 965805 },
    { name: 'Ellis', surname: 'Arabi', studentId: 1483719 },
    { name: 'Brod', surname: 'Arabi', studentId: 1328683 },
    { name: 'Frederik', surname: 'Arabi', studentId: 1957928 },
    { name: 'Madonna', surname: 'Arabi', studentId: 1452872 },
    { name: 'Kaylee', surname: 'Arabi', studentId: 1239936 },
    { name: 'Isa', surname: 'Arabi', studentId: 1864924 },
    { name: 'Ebenezer', surname: 'Arabi', studentId: 566258 },
    { name: 'Stearne', surname: 'Arabi', studentId: 1868364 },
    { name: 'Keen', surname: 'Arabi', studentId: 1790493 },
    { name: 'Kalil', surname: 'Arabi', studentId: 282740 },
    { name: 'Sonnie', surname: 'Arabi', studentId: 249480 },
    { name: 'Audie', surname: 'Arabi', studentId: 255825 },
    { name: 'Miles', surname: 'Arabi', studentId: 1050838 },
    { name: 'Lane', surname: 'Arabi', studentId: 893410 },
    { name: 'Townsend', surname: 'Arabi', studentId: 1600269 },
    { name: 'Marty', surname: 'Arabi', studentId: 1974435 },
    { name: 'Stephi', surname: 'Arabi', studentId: 837243 },
    { name: 'Stuart', surname: 'Arabi', studentId: 1659992 },
    { name: 'Antons', surname: 'Arabi', studentId: 224681 },
    { name: 'Sybille', surname: 'Arabi', studentId: 54335 },
    { name: 'Charla', surname: 'Arabi', studentId: 1682544 },
    { name: 'Galvin', surname: 'Arabi', studentId: 1739978 },
    { name: 'Niki', surname: 'Arabi', studentId: 1148262 }
  ]

  students.forEach(makeARow)