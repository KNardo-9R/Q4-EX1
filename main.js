
function power(){
	var vari1 = document.getElementById('a').value;
	window.alert('The inputed value raised to the power of 2 is ' + Math.pow(vari1,2) + '.');
}

function squareroot(){
	var vari1= document.getElementById('a').value;
	window.alert('The inputed values square root is ' + Math.sqrt(vari1).toFixed(2) + '.');
}

function round(){
	var vari1= document.getElementById('a').value;
	window.alert('When rounded off the inputed value is ' + Math.round(vari1) + '.');
}

function random(){
	var vari1= document.getElementById('a').value;
	window.alert('A value from zero to the inputed value is ' + Math.random()*(vari1)) + '.';
} 