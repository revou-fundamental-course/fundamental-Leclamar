function anti (event) {
    event.preventDefault(); 
    }

let person = prompt("Please enter your name", "Furina de Fontaine");
document.getElementById("username").innerHTML = person;

let slideIndex = 0;
tapSlide();

function tapSlide(){
    let images = document.getElementsByClassName("img");
    
    for(let i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }
    
    if (slideIndex > (images.length -1)) {
        slideIndex = 0;
    }
    images[slideIndex].style.display = "block";
    slideIndex ++;

    setTimeout(tapSlide, 5000);

}

function validate() {
    const name = document.forms["form-message-us"]["nama-lengkap"].value
    const birth = document.forms["form-message-us"]["birth"].value
    const gender = document.forms["form-message-us"]["gender"].value
    const pesan = document.forms["form-message-us"]["pesan"].value

    if (name == "" || birth == "" || gender == "" || pesan == "") {
        alert("Hey, tolong diisi ya!");
        document.getElementById('form-message-us').addEventListener('submit',anti);
        return false;
    }

    document.getElementById('form-message-us').addEventListener('submit',anti);
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