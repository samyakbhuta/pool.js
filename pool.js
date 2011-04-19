data = [];

exports.addKeyValue = function (key,value){	
	data[key]=value;
}

exports.fetchValue = function (key){
	return data[key];
}
