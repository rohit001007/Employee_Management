$(document).ready(function () {
  getData();
})

function getData() {
  $.ajax({
      type: 'GET',
      url: "http://localhost:9000/api/employee/read",
      dataType:"json",
      success: function (data) {

        console.log(data.data)
        
        let rowdata = ""

        $.each(data.data, function (key, value) {

          rowdata += "<tr>";

          rowdata += "<td>" +value.firstName + "</td>";
          rowdata += '<td>' +value.lastName + '</td>';
          rowdata += '<td>' +value.eMail + '</td>';
          rowdata += '<td>' +value.mobile + '</td>';
          rowdata += '<td>' +value.companyName + '</td>';

          rowdata += `<td><button class="button1" onclick="submitId('${value._id}')"><img src="../Images/edit-message-svgrepo-com.svg"></button></td>`;
          rowdata += `<td><button class="button1" onclick="deleteData('${value._id}')"><img src="../Images/delete-contact-svgrepo-com.svg"></button></td>`;             
          
          "</tr>";
                                            
        });
        $('#table').append(rowdata);
      },
        error: function () {
          alert('Error In Loading Data...!!!')
        }
  });
}

const submitId = (id) => {
  console.log(id)
  localStorage.setItem('employeeId',id)
  window.location.href ="../Html/editForm.html";
}

$(document).ready(function () {

  firstName = $('#firstName');
  lastName =  $('#lastName');
  eMail = $('#eMail');
  mobile = $('#mobile');
  companyName = $('#companyName');
  })


function updateData ()  {

  var data = {
    "firstName" : firstName.val(),
    "lastName" : lastName.val(),
    "eMail" : eMail.val(),
    "mobile" : mobile.val(),
    "companyName" : companyName.val()
  };
  console.log(data)



  var id = localStorage.getItem('employeeId')
    $.ajax({
      type:"PUT",
      url: `http://localhost:9000/api/employee/update/${id}`,
      data:data,
      success: function(data){
        console.log(data)
        alert(data.message)

      }
  })
}

deleteData = (id) => {
  $.ajax({
    type: 'DELETE',
    url: `http://localhost:9000/api/employee/delete/${id}`,
    
    success:function(data){
      alert(data.message)
    }
  })
  window.open("../HTML/Main.html", "_self")
}