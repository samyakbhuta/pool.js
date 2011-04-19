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

var myArray = ["a","b","c"];
myArray["aaa"] = "aaa";
pool.addKeyValue("Samyak","Bhuta",addedKeyValue);
pool.addKeyValue("Biswa","Mahanto",addedKeyValue);
pool.addKeyValue("Kunal","Jha",addedKeyValue);
pool.addKeyValue("Kiran","Bajaj",addedKeyValue);
pool.size(showSize);
//pool.addKeyValue("Kiran","Bhuta",addedKeyValue);
pool.size(showSize);
pool.fetchValue("Kiran",showValue)
pool.enumerate();

myData = pool.getPool();

