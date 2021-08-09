const express = require('express');
const app = express();
const mongoose = require('mongoose');


const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});


mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://yarrutdb:Sinterklaas1!@cluster0.yhqgt.mongodb.net/meanEx", (err)=> {
    if (err) {
        console.log('Could NOT connect to database:', err)
    } else {
        console.log('connected to db')
    }

})

const friendsSchema = {fname: String, lname: String, email: String, phone: String, language: String, chicken: String, biography: String, age: Number, picture: String}

const Friends = mongoose.model("Friends", friendsSchema);


app.get('/',(req, res)=> {
    res.send('Hello from server');
})


app.post('/addFriend',(req, res)=> {
  let newFriend = new Friends({
      fname:req.body.fname,
      lname:req.body.lname,
      email:req.body.email,
      phone:req.body.phone,
      language:req.body.language,
      chicken:req.body.chicken,
      biography:req.body.biography,
      age:req.body.age,
      picture:req.body.picture,
  })

    newFriend.save().then(r => console.log(r));
})

app.get('/allFriends',(req, res)=> {
    Friends.find((e, friends) => {
        res.send(friends);
    });
})


app.listen(PORT,()=> {

})

