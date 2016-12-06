function createCalculator() {
	return {
		total: 0,
		value: function(){
			return this.total;
		},
		add: function(val) {
			this.total += val;
		},
		subtract: function(val) {
			this.total -= val;
		},
	}		
}


// var createCalculator = function() {
// 	var obj = {};
// 	obj.total = 0;
	
// 	obj.value = function(){
// 		return obj.total;
// 	}
// 	obj.add = function(val) {
// 		this.total += val;
// 	}
// 	obj.
// 	return obj;

// }