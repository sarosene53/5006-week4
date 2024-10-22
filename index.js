//Exercise1 that imports express module
var express = require("express")
var fs = require("fs")
var app = express()

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

    //for the homepage implementation with a sentence output
app.get('/', function(req,res){
    res.send("Hello! This is my first express application")
})
    //ensuring that it runs on terminal
app.listen(3000,function(){
    console.log("Running server on port 3000")
})

    //for the execution of about page
app.get('/about', function(req, res){
    res.send("This is the basic application")
})
    //for the book index implementation
app.get("/users/:userId/books/:bookId", function(req, res){
    res.send(req.params)
})

//Exercise3 that gets the data from student.json on root and executing GET
app.get("/GetStudentid/:id",(req,res)=>{
    studentdata = {}
    fs.readFile(__dirname + "/" + "/student.json", 'utf8', function (err, data) { 
            var students= JSON.parse(data)
            var student= students["Student"+req.params.id]
            console.log("student",student)
            if (student)
                res.json(student)
            else
                res.json({
                    'status':true,
                    'Status_Code':200,
                    'requested at': req.localtime,
                    'requrl':req.url,
                    'request Method':req.method,
                    'studentdata':JSON.parse(data)});
            });
})

//Exercise4 to execute the studentinfo.html on root and executing POST
app.get('/studentinfo',function(req, res){
    res.sendFile('StudentInfo.html', { root:   __dirname });
}) 

app.post('/submit-data', function (req, res){
    var name = req.body.firstName + ' ' + req.body.lastName+ ' ';
    var Age= req.body.myAge+ ' Gender: ' + req.body.gender+' '
    Qual= ' Qualification'+ req.body.Qual
    console.log(req.body.Qual)
    res.send({
        status: true,
        message: 'form Details',
        data: { name: name, age:Age, Qualification:Qual }
    });
}); 