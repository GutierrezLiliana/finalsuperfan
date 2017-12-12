function resetAll(){
	document.getElementById("one").classList.remove("mediumorchid");
	document.getElementById("two").classList.remove("mediumorchid");
	document.getElementById("three").classList.remove("mediumorchid");
	document.getElementById("four").classList.remove("mediumorchid");
	document.getElementById("one").innerHTML = "";
	document.getElementById("two").innerHTML = "";
	document.getElementById("three").innerHTML = "";
	document.getElementById("four").innerHTML = "";

}

function showText(elem){
	elem.innerHTML = "Sunsets";
}
function s1(elem) {
    document.getElementById("one").classList.toggle("sunset2");
}
function s3(elem) {
    document.getElementById("two").classList.toggle("sunset5");
}
function e2(elem) {
    document.getElementById("three").classList.toggle("eclipse3");
}
function s4(elem) {
    document.getElementById("four").classList.toggle("sunset6");
}