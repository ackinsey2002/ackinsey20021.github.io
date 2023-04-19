
function showQuiz(){
	let sectionResult = document.getElementById("results");
	let questionOne = document.getElementById("q1").value;
	let questionTwo = document.getElementById("q2").value;
	let questionThree= document.getElementById("q3").value;
	let questionFour = document.getElementById("q4").value;
	
	if(questionOne == "to structure and format web content"){
		sectionResult.innerHTML = "Question 1 - Correct";
	}
	else if(questionOne == "to style webpages"){
		sectionResult.innerHTML = "Question 1 - incorrect";
	}
	 else if(questionOne == "to create dynamic webpages"){
		sectionResult.innerHTML = "Question 1 - incorrect";
	}
	else if(questionOne == "none of the above"){
		sectionResult.innerHTML = "Question 1 - incorrect";
	}
	
	if(questionTwo == "a"){
		sectionResult.innerHTML += "<br>Question 2 - Correct</br>";
	}
	else if(questionTwo == "link"){
		sectionResult.innerHTML += "<br>Question 2 - incorrect</br>";
	}
	 else if(questionTwo == "href"){
		sectionResult.innerHTML += "<br>Question 2 - incorrect</br>";
	}
	else if(questionTwo == "none of the above"){
		sectionResult.innerHTML += "<br>Question 2 - incorrect</br>";
	}
	if(questionThree == "a programming language used for creating websites"){
		sectionResult.innerHTML += "<br>Question 3 - Correct</br>";
	}
	else if(questionThree == "a database management system"){
		sectionResult.innerHTML += "<br>Question 3 - incorrect</br>";
	}
	 else if(questionThree == "a markup language used for creating web pages"){
		sectionResult.innerHTML += "<br>Question 3 - incorrect</br>";
	}
	else if(questionThree == "none of the above"){
		sectionResult.innerHTML += "<br>Question 3 - incorrect</br>";
	}
	if(questionFour == "function"){
		sectionResult.innerHTML += "<br>Question 4 - Correct</br>";
	}
	else if(questionFour == "func"){
		sectionResult.innerHTML += "<br>Question 4 - incorrect</br>";
	}
	 else if(questionFour == "def"){
		sectionResult.innerHTML += "<br>Question 4 - incorrect</br>";
	}
	else if(questionFour == "none of the above"){
		sectionResult.innerHTML += "<br>Question 4 - incorrect</br>";
	}

}


setInterval(changeSlide, 10000);

function changeSlide(){
let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");
let image4 = document.getElementById("img4");

if(image1){
	image2.classList.remove("hidden2");
	image1.classList.add("hidden2");
}
else if(image2){
	image2.classList.add("hidden2");
	image3.classList.remove("hidden2");
}
else if(image3){
	image4.classList.remove("hidden2");
	image3.classList.add("hidden2");
}
else if(image4){
	image1.classList.remove("hidden2");
	image4.classList.add("hidden2");
}
}


function showText(){
	let myMessage = document.getElementById("text");
	let showText = document.getElementById("hide");
	let buttonText = document.getElementById("button");

	if(myMessage){
	showText.classList.remove("hidden");
		buttonText.innerHTML = "show less";
	}
	else if (buttonText.innerHTML = "show less"){
	showText.classList.add("hidden");
	}
	
}
	
	function showWord(){
	let myMessage1 = document.getElementById("text1");
	let showText1 = document.getElementById("hide1");
	let buttonText1 = document.getElementById("button1");

	if(myMessage1){
	showText1.classList.remove("hidden1");
		buttonText1.innerHTML = "show less";
	
	}
	else if (buttonText1.innerHTML = "show less"){
	showText1.classList.add("hidden1");
	}
}
	
	
		
