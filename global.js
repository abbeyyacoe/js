var module = {};

(function(exports){
	exports.notGlobalFunction = function() {
		console.log("I am not global");
	};
}(module));

function notGlobalFunction() {
	console.log("I am global");
}

notGlobalFunction();
module.notGlobalFunction();