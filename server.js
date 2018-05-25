// require express
var express = require("express");
var session=require('express-session');
const jwt=require('jsonwebtoken');
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();

app.use(session({secret: 'finalproject'}));

const bcrypt = require('bcrypt');

var mysql = require('mysql');

var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'REDACTED',
     database: 'mydb'
});
connection.connect();

var bodyParser = require('body-parser');
// use it!
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({secret: 'counterproject'}));
// static content
app.use(express.static( __dirname + '/angularApp/dist/angularApp' ));
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view

function verifyToken(req,res,next){

    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized Request');
    }
    let token=req.headers.authorization.split(' ')[1]

    if(token ==='null'){
        return res.status(401).send('Unauthorized Request');
    }

    let payload=jwt.verify(token,'secretKey')

    if(!payload){
        return res.status(401).send('Unauthorized Request');
    }

    req.userId=payload.subject;
    next();

}



app.get('/', function(req, res) {
   if(typeof req.session.counter=='undefined')
        req.session.counter=1;
    
    else req.session.counter+=1;

    count={
        'val':req.session.counter,
    }
    console.log(req.session.counter);
 res.render("index",{count:count});
})

app.get('/users', function(req, res) {
 
    var query=connection.query('Select * from user',function(err,result){

        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log("Got all users");
            res.send(result);
        }
    })
})

app.get('/user/:id', function(req, res) {
 
    console.log("Getting a user",req.session.id);
    var query=connection.query("Select * from user where id='"+req.params.id+"';",function(err,result){

        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log("Got a user",result);
            res.send(result);
        }
    })
})

app.post('/addadress',function(req,res){

    console.log(req.body);
    var query=connection.query("Insert into address (latitude,longitude,users_id) values ('"+req.body.latitude+"','"+req.body.longitude+"','"+req.body.user_id+"');",function(err,add){
        if(err){
        console.log(err)
        return res.send({err:"Something went wrong"});
        }
        else{
            res.send(add);
        }
    })
})

app.post('/update/:id',function(req,res){
    console.log(req.body);
    var query=connection.query("UPDATE user Set Name='"+req.body.Name+"', Age='"+req.body.Age+"', Average_Speed='"+req.body.Average_Speed+"', Average_distance='"+req.body.Average_distance+"' Where id="+req.params.id+";",function(err,result){
        if(err){
            console.log(err);
            res.send({err:"err"});
        }
        else{
            console.log("Success");
            res.send(result);
        }
    })
})

app.post('/login/user', function(req, res){
    console.log(req.body);
    if(!req.body.lemail || !req.body.lpassword)
    {
            console.log("empty");
            return res.send({err:"All fiels are required"});

    }
    else
    {
    var query=connection.query("Select * from user where email='"+req.body.lemail+"';",function(err,user){
        console.log("I was here",user);
        if(err){
            console.log("Something went wrong");
            return res.send({err:"Passwords don't match"});
        } else{
            console.log('comparing passwords',req.body.lpassword,user[0].password);
            bcrypt.compare(req.body.lpassword.toString(), user[0].password, function(err, result) {
                console.log(result);
                if(result){
                  
                    console.log("Logged in successfully");
                    if(typeof req.session.userid=='undefined')
                        req.session.userid=user[0].id;
                    
                        console.log("id is",req.session.userid,"vhgcjh",user[0].id);

                        let payload={subject:user[0].id};
                        let token =jwt.sign(payload,'secretKey');
                        res.send({token,user});
                     
                }
                else{
                    res.send({err:'Some thing went wrong'});
                }
            });
        }
    });
}
});


app.post('/registration/user', function(req, res) {
    //Basic Validations
    if(!req.body.name || !req.body.email || !req.body.password || !req.body.cpassword)
      {
        console.log("All fields are required");
        return res.send({err:"All fiels are required"});

      }
    else if(req.body.password != req.body.cpassword){
        console.log("Passwords Dont match");
        return res.send({err:"Passwords don't match"});
    }
    else if(!validateEmail(req.body.email)){
        console.log('Email not valid');
        return res.send({err:'Email not valid'});
    }
    else{
        bcrypt.hash(req.body.password, 10, function(err, hash) {
        if (err) {
        console.log("Could not hash the password")
        }else{
        hashed = hash;
        console.log("pwd is",hashed)
        var query=connection.query("INSERT INTO user (Name,email,password,latitude,longitude) VALUES ('"+req.body.name+"','"+req.body.email+"','"+hashed+"','"+req.body.lat+"','"+req.body.long+"');",function(err,user){
        if(err){
            console.log("Something is wrong",err);
            res.send(err);
         } 
        else{
            console.log("successfully registered a user",user);
            if(typeof req.session.id=='undefined')
                req.session.userid=user.insertId;
          

            let payload={subject:user.insertId};
            let token =jwt.sign(payload,'secretKey');
            res.send({token,user});
        }   
    })
    }
    });
    } 
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./angularApp/dist/angularApp/index.html"))
  });



// tell the express app to listen on port 8000copy
app.listen(8000, function() {
 console.log("listening on port 8000");
});