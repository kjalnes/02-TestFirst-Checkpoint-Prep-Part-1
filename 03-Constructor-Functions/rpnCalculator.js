function RPNCalculator() {
	this.numStack = [];
}

RPNCalculator.prototype.push = function(val) {
	this.numStack.push(val);
}

RPNCalculator.prototype.popCompute = function(fn){
	if(this.numStack.length < 1) {
		throw "rpnCalculator is empty";
	}

	var num1 = this.numStack.pop();
	var num2 = this.numStack.pop();
	this.push(fn(num1, num2));
}

RPNCalculator.prototype.plus = function() {
	this.popCompute(function(val1,val2){
		 return val1 + val2;
	});
}

RPNCalculator.prototype.value = function() {
	return this.numStack[this.numStack.length-1];
}

RPNCalculator.prototype.minus = function() {
	this.popCompute(function(val1,val2) {
		return val2 - val1;
	}) 
}

RPNCalculator.prototype.divide = function() {
	this.popCompute(function(val1,val2){
		return val2/val1;
	})
}

RPNCalculator.prototype.times = function() {
	this.popCompute(function(val1, val2){
		return val1 * val2;
	})
}