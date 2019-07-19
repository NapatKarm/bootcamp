//Problem 1:
document.getElementById("container").style.color = "blue";

//Problem 2:
document.querySelector("#container").style.color = "orange";

//Problem 3:
var problemThree = document.getElementsByClassName("second");

for(var step =0; step < problemThree.length; step++)
{
	problemThree[step].style.color = "green";
}

//Problem 4:
var problemFour = document.getElementsByTagName("OL")[0];
problemFour.getElementsByClassName("third")[0].style.color = "red";

//Problem 5:
var newtext = document.createElement("P");
newtext.innerText = "Sometimes I dream about Corgis";
document.querySelector("#container").appendChild(newtext);

//Problem 6:
var classAdd = document.getElementById("footer");
classAdd.classList.add("main");

//Problem 7:
var classRev = document.getElementById("footer");
element.classList.remove("main");

//Problem 8:
var liElement = document.createElement("LI");

//Problem 9:
liElement.innerText = "four";

//Problem 10:
document.querySelector("UL").appendChild(liElement);

//Problem 12:
var olTags = document.getElementsByTagName("OL")
{
	for(var step = 0; step < olTags.length; step++)
	{
		if(olTags.hasClass("LI")) olTags.object.style.backgroundColor("green");
	}
}

//Problem 13:
$("div.footer").remove();


