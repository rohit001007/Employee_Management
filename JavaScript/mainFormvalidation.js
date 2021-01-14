function check() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var eMail = document.getElementById('eMail').value;
    var mobile = document.getElementById('mobile').value;
    
    var firstNamePattern = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
    var lastNamePattern = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
    var eMailPattern = RegExp(`^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$`);
    var mobilePattern = RegExp(`^([+][1-9]{1,3}[- ]?)?[1-9]{10}$`);

    if (firstNamePattern.test(firstName) == false)
        document.getElementById('firstName_err').innerHTML = "*Enter Last Name Properly";
        
    if (lastNamePattern.test(lastName) == false)
        document.getElementById('lastName_err').innerHTML = "*Enter Last Name Properly";
        
    if (eMailPattern.test(eMail) == false)
        document.getElementById('eMail_err').innerHTML = "*Enter E-Mail Properly";
        
    if (mobilePattern.test(mobile) == false)
        document.getElementById('mobile_err').innerHTML = "*Enter Mobile-Number Properly";
        
    return false;
}