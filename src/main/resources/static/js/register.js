function registerValidation()
{
    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("password_confirmation").value;
    var ok = true;
    if (pass1 != pass2) {
        document.getElementById("password").style.borderColor = "#E34234";
        document.getElementById("password_confirmation").style.borderColor = "#E34234";
        document.getElementById("password").setCustomValidity("Hasła nie są takie same.");
        ok = false;
    }
    else if(pass1)
    {
            document.getElementById("password").style.borderColor = "#21FF4D";
            document.getElementById("password_confirmation").style.borderColor = "#21FF4D";
            document.getElementById("password").setCustomValidity('');
    }
    return ok;
}