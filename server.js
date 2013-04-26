var express = require("express"),
	app = express(),
	database = require("./database");

app.set('view engine', 'ejs');

var userGet = function(request,response) {
	console.log(request.route.params.id);
	var user = database.query("users",request.route.params.id);
	console.log("found user",user,"now serving via ejs");
	response.render("userView",{user:user});
};

var userList = function(request,response) {
	console.log("serving all users to client via ejs");
	response.render("userList",{users:database.tables.users});
};

app.get("/user/",userList);
app.get("/user/:id?",userGet);

app.listen(8080,function(){
	console.log("app is running on http://localhost:8080");
});