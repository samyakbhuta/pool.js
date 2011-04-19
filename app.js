var pool = require("./pool");

var addedKeyValue = function (){
	console.log("Added");	
}

var showValue = function (value){
	console.log(value);
}

var showSize = function (size){
	console.log(size);
}

pool.addKeyValue("A","Apple",addedKeyValue);
pool.addKeyValue("B","Banana",addedKeyValue);
pool.addKeyValue("O","Orange",addedKeyValue);
pool.addKeyValue("K","Kiwi",addedKeyValue);
pool.size(showSize);
pool.fetchValue("K",showValue)
pool.enumerate();

myData = pool.getPool();

