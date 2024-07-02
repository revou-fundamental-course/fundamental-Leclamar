function validateForm () {
    const name = document.forms["form-message-us"]["nama-lengkap"].value
    const birth = document.forms["form-message-us"]["birth"].value
    const gender = document.forms["form-message-us"]["gender"].value
    const pesan = document.forms["form-message-us"]["pesan"].value

    if (name == "" || birth == "" || gender == "" || pesan == "") {
        alert("Tolong isi ya ges");
        return false;
    }

    setSender(name, birth, gender, pesan);

    /* if setSender  */

    return false;
}

function setSender(name, birth, gender, pesan){
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth").innerHTML = birth;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = pesan;
}