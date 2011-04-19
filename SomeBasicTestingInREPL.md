
Some basic testing in REPL Enviroment
=====================================

1
-

In your shell command prompt type in 
	$> node

2
-
The REPL enviroment for node will turn up. Type the following command one by one to try and test pool module, interactively.

	var myPool = require("pool");
	var fun = function (){}
	myPool.addKeyValue("a","b",fun);
	myPool.enumerate();
	.exit

