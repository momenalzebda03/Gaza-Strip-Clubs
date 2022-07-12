var click4 = function () {

    var input = document.getElementById("email").value;
    var input1 = document.getElementById("password").value;

    if (input === "20210171" && input1 === "17431") {

        window.open("http://127.0.0.1:5500/the%20coach.html");
    }else if (input === "20210173" && input1 == "17433") {
        
        window.open("http://127.0.0.1:5500/my%20sport%20page.html");
    }else
        document.write("look to number and password");
}

document.getElementById("submit6").onclick = click4;