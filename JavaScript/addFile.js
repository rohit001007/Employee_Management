let firstName
let lastName
let eMail
let mobile
let companyName

$(document).ready(function () {

firstName = $('#firstName');
lastName =  $('#lastName');
eMail = $('#eMail');
mobile = $('#mobile');
companyName = $('#companyName');
})

    function addData(){
    
        var data = {
            "firstName" : firstName.val(),
            "lastName" : lastName.val(),
            "eMail" : eMail.val(),
            "mobile" : mobile.val(),
            "companyName" : companyName.val()
        };

        $.ajax({
            type : 'POST',
            url : 'http://localhost:9000/api/employee/create',
            dataType: "json",
            contentType : "application/json",
            data : JSON.stringify(data),
            success : function(newData) {
                alert(newData.message)
            },
            error: function () {
                alert('* Error In Adding Data...!!!')
            }
        })
    }
