function validateNameLength()
{
    var name = document.myForm.Name.value;
    if (name.length > 30 || name.length < 3) {
        alert("The name must be at least 3 chars and less than 30 chars!");
        return false;
    }
    return true;
}

function validateNameWhiteSpace() {
    var name = document.myForm.Name.value;
    var counter = 0;
    for (var i = 0; i < name.length; i++)
    {
        if (name[i] == " ")
        {
            counter ++;
        }
    }
    if(counter == 0 )
    {
        alert("The name should contain at least one whitespace bewteen first and lastname.")
        document.getElementById("name").style.borderColor = "red";
        return false;
    }
    return true;
}

function validateEmail()
{
    var email = document.myForm.Email.value.toString();
    if (email.search(".*\.(hu|com)$"))
    {
        alert("The email address is not valid!");
        document.getElementById("email").style.borderColor = "red";
        return false;
    }
    return true;
}

function validateMessage()
{
    var message = document.myForm.textarea.value;
    if(message.length < 20 || message.length > 500)
    {
        alert("The message is valid in case of more than 20 and less than ");
        document.getElementById("messagebox").style.borderColor = "red";
        return false;
    }
    return true;
}

function validateForm()
{
    var validation = true;
    validation &= validateNameLength();
    validation &= validateNameWhiteSpace();
    validation &= validateEmail();
    validation &= validateMessage();
  
    return validation;
}

