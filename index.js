
const express = require('express')
const app = express()

// Root page call from here 

var users = require('./data/user.json');
var userlist =['Dille', 'Manish', 'Keyur', 'Gulshan'];

app.get('/', function(req, res){
        var userdata = userlist;
        var list;
        userdata.forEach(function(user){
            list += user;

        })
        res.send(`
        <h1>THIS IS PAGE HEADER</h1>
        ${list}
        `);
    })

app.get('/users/:userid', function(req, res){
        var detailUser = users[req.params.userid];
        console.log(detailUser);
        res.send(`
            <h1>${detailUser.name}</h1>
            <p>${detailUser.website}</p>
            
        `)
    })

// All users display page from here  
app.get('/users', function(req, res){
    var datainfo = '';
    var i = 0;
    users.forEach(function(item, i) {
        datainfo +=`
         <li>
            <a href="users/${i}">
                <strong>${item.name}</strong>
                <p>${item.username}</p>
            </a>
         </li>
        `;
        i++;
    });
    res.send(`
    <h1>THIS IS PAGE HEADER</h1>
    <ul>${datainfo}</ul>

    `);
})
// GET method route


app.listen(3000, () => console.log('Example app listening on port 3000!'))