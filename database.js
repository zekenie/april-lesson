var  _ = require("underscore");
exports.tables = {
	users:[
		{
			id:1,
			name:"Fred",
			email:"fred@trext.me",
			cats:2
		},
		{
			id:2,
			name:"Alice",
			email:"alice@trext.me",
			cats:0
		},
		{
			id:3,
			name:"Hannah",
			email:"hannah@trext.me",
			cats:6
		}
	]
};

exports.query = function(table,id){
	return _.findWhere(exports.tables[table],{id:id});
}