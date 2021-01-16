$(document).ready(function () {

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

          rowdata += '<td><button class="button1"><img src="../Images/edit-message-svgrepo-com.svg"></button></td>';
          rowdata += '<td><button class="button1"><img src="../Images/delete-contact-svgrepo-com.svg"></button></td>';             
          
          "</tr>";
                                            
        });
        $('#table').append(rowdata);
      },
        error: function () {
          alert('Error In Loading Data...!!!')
        }
  });
});