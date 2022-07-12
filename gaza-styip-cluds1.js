var click2 = function () {

    var input = document.getElementById("input").value;
    var input1 = document.getElementById("input1").value;

    if (input === "20210175" && input1 === "17435") {

        window.open("http://127.0.0.1:5500/sign%20in.html");
    } else
    
        document.write("look to number and password");
}

document.getElementById("submit3").onclick = click2;