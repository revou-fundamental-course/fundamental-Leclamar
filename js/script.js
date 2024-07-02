function submit (event) {
    event.preventDefault(); 
    }


let person = prompt("Please enter your name", "Furina de Fontaine");
document.getElementById("username").innerHTML = person;
    



/* function username () {
    var visiter = prompt("Hey, welcome! Please type your name ^^","");
    document.getElementById("user").innerHTML = visiter;
} */

/* if (visiter==""){
    username();
} */


function validate() {
    const name = document.forms["form-message-us"]["nama-lengkap"].value
    const birth = document.forms["form-message-us"]["birth"].value
    const gender = document.forms["form-message-us"]["gender"].value
    const pesan = document.forms["form-message-us"]["pesan"].value

    if (name == "" || birth == "" || gender == "" || pesan == "") {
        alert("Hey, tolong diisi ya!");
        document.getElementById('form-message-us').addEventListener('submit',submit);
        return false;
    }

    document.getElementById('form-message-us').addEventListener('submit',submit);
    document.getElementById("date-now").innerHTML = Date();

    result(name, birth, gender, pesan);

    return false;
}

function result(name, birth, gender, pesan){
    document.getElementById("Nama").innerHTML = "Nama";
    document.getElementById("Birth").innerHTML = "Tanggal Lahir";
    document.getElementById("Gender").innerHTML = "Jenis Kelamin";
    document.getElementById("Pesan").innerHTML = "Pesan";

    document.getElementById("eq1").innerHTML = ":";
    document.getElementById("eq2").innerHTML = ":";
    document.getElementById("eq3").innerHTML = ":";
    document.getElementById("eq4").innerHTML = ":";

    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth").innerHTML = birth;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = pesan;
}

