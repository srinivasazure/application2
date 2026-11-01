document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;

    if (name === "" || email === "" || phone === "" || course === "") {

        document.getElementById("result").innerHTML =
            "Please fill all the fields!";

    } else {

        document.getElementById("result").innerHTML =
            "Registration successful! Welcome " + name;

    }

});