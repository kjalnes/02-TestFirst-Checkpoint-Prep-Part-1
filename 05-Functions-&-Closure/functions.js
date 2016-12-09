function concatString() {
	var res = "";
	for(var i=0;i<arguments.length; i++) {
		res+= arguments[i];
	}
	return res;
}

function yourFunctionRunner(fn){
	var res = "";
	for(var i=0;i<arguments.length; i++) {
		res+= arguments[i]();
	}
	return res;
}

function makeAdder(A){
	// takes argument A
	// returns a fn that 
	return function(B) {
		return A + B;
	}
}

function once(fn) {
	var hasNotRun = true;
	
	return function() {
		if(hasNotRun) {
			hasNotRun = false;
			fn();
		}
	}
}


function createObjectWithClosures(){
	// create an objext that has two functions 
	// that share a piece of info
	var obj = {};
	var value = 0;
	obj.oneIncrementer = function(){
		value+=1;
	};
	obj.tensIncrementer = function(){
		value+=10;
	};
	obj.getValue = function(){
		return value;
	};
	obj.setValue = function(val){
		if(val !== undefined) {
			value = val;
		} 
	};
	return obj;
}



function guestListFns(arrayOfGuests, code) {
	var arrOfFunctions = [];

	var guestFunction = function(name) {
		return function(decryptionCode){
			if(decryptionCode === code) {
				return name;
			} else {
				return 'Secret-Code: Invalid';
			}
		}
	}

	for(var i=0; i<arrayOfGuests.length; i++){
		var nameOfGuest = arrayOfGuests[i];
		arrOfFunctions.push(guestFunction(nameOfGuest));
	}

	return arrOfFunctions;
}

function generateGuestList(encryptedList, code){ 
	var decryptedGuestList = [];
	for(var i=0;i<encryptedList.length;i++) {
		decryptedGuestList.push(encryptedList[i](code));
	}
	return decryptedGuestList;
}



































