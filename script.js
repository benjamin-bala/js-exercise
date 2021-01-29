const database = {
    users: [
        {
            username: "Jude",
            password: "2019"
        },
        {
            username: "Ben",
            password: "w9912"
        },
        {
            username: "Judith",
            password: "Sage"
        },
        {
            username: "Caleb",
            password: "2020"
        },
    ],
    timeline: [
        {
            username: "Jade",
            post: "Lorem ipsum dolor hulu blah blah Lorem ipsum dolor hulu blah blah"
        },
        {
            username: "saint",
            post: "Lorem ipsum dolor hulu blah blah Lorem ipsum dolor hulu blah blah"
        },
        {
            username: "James",
            post: "Lorem ipsum dolor hulu blah blah Lorem ipsum dolor hulu blah blah"
        },
        {
            username: "Jane",
            post: "Lorem ipsum dolor hulu blah blah Lorem ipsum dolor hulu blah blah"
        },
        {
            username: "fleet",
            post: "Lorem ipsum dolor hulu blah blah Lorem ipsum dolor hulu blah blah"
        },
    ]
}

function isUserValid(username,password){
    for(let i = 0; i < database.users.length; i++){
        if(username === database.users[i].username && password === database.users[i].password){
            return true
        }
    }
}


function checkUser(username, password){
    if(isUserValid(username, password)){
        alert("Welcome " + username)
        console.log(database.timeline);
    }
    else{
        alert("Invalid username or password")
    }
}

let userName = prompt("Input your username")
let userPass = prompt("Input your Password")

checkUser(userName,userPass)




const database = {
    user: [
        {},{},{},{}
    ]
}