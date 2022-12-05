const express = require("express");

const app = express();
app.use(express.json());

app.listen(3000);

console.log("Server Started");

let users=[
    {
        id : 1,
        name : "Mayank"
    },
    {
        id : 2,
        name : "Anang"
    }
]

const userRouter=express.Router();
const authRouter=express.Router();

app.use('/user',userRouter);
app.use('auth',authRouter);

authRouter
.route('/fdata')
.get(getformdata)
.post(postformdata);

userRouter
.route('/')
.get(getuser)
.post(postuser)
.patch(updateuser)
.delete(deleteuser);

userRouter
.route('/:id')
.get(getuserbyid)

function getuserbyid(req,res){
    let src=req.params.id;
    let obj={};
    for(i=0;i<users.length;i++){
        if(users[i]['id']==src){
            obj=users[i];
            break;
        }
    }
    res.send(obj);
}

function getuser(req,res){
    console.log("Accessing Users Data");
    res.send(users);
}

function postuser(req,res){
    console.log("Modifying Users Data");
    users=req.body;
    let dta=req.body;
    for(obj in dta){
        for(key in obj){
            console.log(obj[key]);
        }
    }
    res.send("Request Accepted");
}

function updateuser(req,res){
    console.log("Updating Users Data");
    let dta=req.body;
    res.send("Request Accepted");
}

function deleteuser(req,res){
    console.log("Deleting Users Data");
    users={};
    res.send("Request Accepted");
}

function getformdata(req, res){
    res.sendFile('/New folder/index.html',{root:__dirname});
}

function postformdata(req,res){
    let dta=req.body;
    res.json({
        message : "Data Recieved",
        obj : dta
    });

}