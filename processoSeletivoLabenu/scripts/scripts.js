function emailSend() {
    var done = document.getElementById("email").value
    alert('"O e-mail ' + done + ' foi enviado"')
}

function emailValidate(field) {
    let user = field.value.substring(0, field.value.indexOf("@"))
    let domain = field.value.substring(field.value.indexOf("@")+ 1, field.value.length)
    
    if ((user.length >=1) &&
        (domain.length >=3) &&
        (user.search("@")==-1) &&
        (domain.search("@")==-1) &&
        (user.search(" ")==-1) &&
        (domain.search(" ")==-1) &&
        (domain.search(".")!=-1) &&
        (domain.indexOf(".") >=1)&&
        (domain.lastIndexOf(".") < domain.length - 1)) {
    document.getElementById("email")
        alert("O email é válido!")
    }
    else{
        document.getElementById("email")
        alert("O email é inválido")
    }
}