const express = require('express');
const path = require('path');
const port = 8001;
const app =express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


app.listen(port,function(err){

if(err){
    console.log("error in the running the server",err);
}

console.log("yup !its working",port);
});

app.get('/',function(req,res){
    return res.render('home',{
        title:"Todo app"
    });
});
