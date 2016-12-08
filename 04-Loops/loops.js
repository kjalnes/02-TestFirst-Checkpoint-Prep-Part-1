function repeat(str, n){
	var res = "";
	for(var i=0; i<n;i++){
		res+=str;
	}
	return res;
}

function sum(arr){
	if(arr.length === 0) { return 0 }
	return arr.reduce(function(prev,curr){
		return prev + curr;
	})
}

function gridGenerator(input){
	var res = "";
	if(input === 0) { return res }
	// output should be 
	// # # 
	//  #
	// # # 
	// i know: 
	// we will always begin with '#' 
	// every other line will begin with '#'' or ' ' 
	// this means that all odd numbered lines will begin with '#'
	// and all even numbered lines with ' '
	for(var row=input; row > 0; row--){
		var rowIsEven = row % 2 === 0 ? true : false;
		var startLetter = rowIsEven ? "#" : " ";
		var otherLetter = startLetter === "#" ? " " : "#";
		for(var column = input; column > 0; column--) {
			if(column % 2 === 0) {
				res+= startLetter;
			} else {
				res+=otherLetter;
			}
		}
		res+= "\n"
	}
	return res;
}


function join(arr, delimiter) {
	var res = "";
	if(arr.length === 0) { return res }
	if(delimiter === undefined) { delimiter = "" }
	arr.forEach(function(curr, index){
		res+=curr;
		if(index !== arr.length-1) {
			res+= delimiter;
		}
	})
	return res;
}

function paramify(obj) {
	var res = [];
	if(Object.keys(obj).length === 0) { return res.join('') }
	for(var key in obj) {
		if(obj.hasOwnProperty(key)) {
			res.push(key + "=" + obj[key]);
		}
	}

	res.sort();

	if(res.length > 1) {
		return	res.join('&')
	} else {
		return res.join('')
	}
}

function paramifyObjectKeys(obj){
	var res = ""
	var array = Object.keys(obj).sort();	
	if(array.length === 0) { return "" }

	for(var i=0; i < array.length;i++) {
		
		res+= array[i] + "=" + obj[array[i]];
		if(i !== array.length - 1) {
			res+= '&'
		}
	}
	return res;
}


function renameFiles(arr) {
	// helper function to create new name
	function findNewName(fileName, n) {
		var newName = fileName + '(' + n + ')';
		if(res.indexOf(newName) === -1) {
			return newName;
		} else {
			return findNewName(fileName, n+=1);
		}
	} 

	var res = [];
	for(var i=0; i < arr.length; i++) {
		if(res.indexOf(arr[i]) !== -1) {
			// recursive call to rename file if it already exists
			res.push(findNewName(arr[i], 1));
		} else {
			res.push(arr[i]);
		}
	}
	return res;
}













































