/*
A simple key/value pair storage known as "pool", with expected methods. It is nothing more than a way to explore node.js. 
If you follow this you will learn
* How to include  foo.js file (possibly a library) into bar.js (possibly an application file)
* How to expose some parts of foo.js (data variables as well as functions ) into bar.js
* Creating a module
* Creating an NPM package for foo.js
* How callbacks are accomplished in node.js and javascript ( for those who are new)
* Power of javascript objects as associative array.
* JSONing
* Exception mechanism
* Unit testing code for pool.js
*/

//TODO : Create NPM package for foo.js
//TODO : Unit testing with shoulda.js

data = {};

exports.addKeyValue = function (key,value,callback){	
	//TODO: Should throw error if the key with same name already exist ?
	data[key]=value;
	callback();
}

exports.fetchValue = function (key,callback){
	//TODO: Should throw error if the key is not present ?
	callback(data[key]);
}

exports.size = function (callback){
	var count = 0;
	for ( key in data ){ 
		count++;
	}
	callback(count);
}

exports.createJSONFile = function (filename,callback){
	// TODO shoulda create a file with JSON'fied  'data'.
}

exports.getPool = function (filename,callback) {
	return data;
}

exports.enumerate = function(){
	for ( key in data ){ 

		console.log("{"+key + ":" +data[key]+"}" );
	}
}
