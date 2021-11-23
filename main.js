
let firstLetter = prompt(`Please enter a letter`)

const userName= users.map( function(user){
    return user.name
} )
function letterOfFirstName (){
    return userName.includes(firstLetter)
}

for(const name of userName){
    console.log(`Hello${name}`)
}


let usersID = Number(prompt(`please enter The ID`))
const mappedUserID = todos.map(function(todo){
    return todo.userId === usersID && todo.completed !== true
})
console.log(`Hello there person with ID ${usersID}`)


function userID(){
    return mappedUserID.includes(usersID)
}

letterOfFirstName()
userID()
