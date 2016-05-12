 function validateName()
    {
        var name = document.myForm.Name.value;
        if (name.length > 30 || name.length < 3) {
            alert("The name must be at least 3 chars and less than 30 chars!");
            return false;
        }
        return true;
    }

    function validateEmail()
    {
        var email = document.myForm.Email.value.toString();
        if (!email.endsWith(".hu") || !email.endsWith(".com"))
        {
            alert("The email address is not valid!")
            return false;
        }
        return true;
    }
