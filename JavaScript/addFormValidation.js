function check() {

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let eMail = document.getElementById('eMail').value;
    let mobile = document.getElementById('mobile').value;
    
    let firstNamePattern = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
        if (firstNamePattern.test(firstName) == false){
            document.getElementById('firstName_err').innerHTML = "*Enter First Name Properly";
        return false;
        }
    let lastNamePattern = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
        if (lastNamePattern.test(lastName) == false){
            document.getElementById('lastName_err').innerHTML = "*Enter Last Name Properly";
            return false;
        }
    let eMailPattern = RegExp(`^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$`);
        if (eMailPattern.test(eMail) == false){
            document.getElementById('eMail_err').innerHTML = "*Enter E-Mail Properly";
            return false;
        }
    let mobilePattern = RegExp(`^([+][1-9]{1,3}[- ]?)?[1-9]{10}$`);
        if (mobilePattern.test(mobile) == false){
            document.getElementById('mobile_err').innerHTML = "*Enter Mobile-Number Properly";
            return false;
        }
    return true;
}