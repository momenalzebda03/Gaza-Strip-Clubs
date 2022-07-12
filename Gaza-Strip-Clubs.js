var click = function () {

    var img2 = document.getElementById("img2");
    var imgcohct = document.getElementById("imgcohct");
    var imgp1 = document.getElementById("imgp1");
    
    imgp1.style.display = "inline-block";    
    imgcohct.style.display = "inline-block";
    img2.style.display = "none";    
}

document.getElementById("leftpng").onclick = click;

var click1 = function () {

    var img2 = document.getElementById("img2");
    var imgcohct = document.getElementById("imgcohct");
    var imgp = document.getElementById("imgp");
   
    imgp.style.display = "none";
    imgcohct.style.display = "none";
    img2.style.display = "inline-block";

}

document.getElementById("rithe").onclick = click1;