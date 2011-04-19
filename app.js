/* 
This file just illustrates the usage of node module called 'pool'.
More about pool at https://github.com/samyakbhuta/pool.js
*/


/* 
var pool = require("pool");
Will work if you have already install using 'npm install pool'
*/
var pool = require("./pool"); 


/*
function : addedKeyValue
A callback function which is passed to addKeyValue function. 
Basically, this function is called at the end of execution 
of the function where it is passed as callback. In this case
to function addKeyValue.
Just prints the "Added" to the console.
*/
var addedKeyValue = function (){
	console.log("Added");	
}

/*
function : showValue
A callback function which is passed to fetchValue function. 
Basically, this function is called at the end of execution 
of the function where it is passed as callback. In this case
to function fetchValue.
It once called prints the value supplied to it on console.
*/
var showValue = function (value){
	console.log(value);
}

/*
Shows the total count of the pool at the time of call.
*/
var showSize = function (size){
	console.log(size);
}

/*
Adding some key/values
*/
pool.addKeyValue("A","Apple",addedKeyValue);
pool.addKeyValue("B","Banana",addedKeyValue);
pool.addKeyValue("O","Orange",addedKeyValue);
pool.addKeyValue("K","Kiwi",addedKeyValue);
/*
Checking out the total count of key/value pair present in the pool.
*/
pool.size(showSize);
/*
Fetching the value based on key. The callback function actually carries the return value and prints it on console.
*/
pool.fetchValue("K",showValue)
/*
Listing down all the key/value pairs in pool.
*/
pool.enumerate();
/*
Get the pool for direct access to it./* 
var pool = require("pool");
Will work if you have already install using 'npm install pool'
*/
*/
myData = pool.getPool();

