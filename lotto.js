function gradeResult() {
var myEnglishResult = parseInt(document.getElementById("value1").value);
var myMathsResult = parseInt(document.getElementById("value2").value);
var myIrishResult = parseInt(document.getElementById("value3").value);

var englishGrade, irishGrade, mathsGrade 
if (!myEnglishResult) {
	alert("Please enter a result");
}
else {
	if(myEnglishResult>90) {
		englishGrade = 'A';
	} else if (myEnglishResult>80) {
		englishGrade = 'B';
	} else {
		englishGrade ='F';
	}
var message1 = 'Your result of ' + englishGrade + 'in English';
	console.log (message1);
	document.getElementById("resultsentence").innerHTML = message1;
}

	if(myMathsResult>90) {
		mathsGrade = 'A';
	} else if (myMathsResult>80) {
		mathsGrade = 'B';
	} else {
		mathsGrade ='F';

	var message2 = 'Your result of ' + mathsGrade + 'In Maths';
	console.log (message2);
	document.getElementById("resultsentence").innerHTML = message2;
	}

	if(myIrishResult>90) {
		irishGrade = 'A';
	} else if (myIrishResult>80) {
		irishGrade = 'B';
	} else {
		irishGrade ='F';
	
	var message3 = 'Your result of ' + irishGrade +'in Irish' ;
	console.log (message3);
	document.getElementById("resultsentence").innerHTML = message3;
	}
}