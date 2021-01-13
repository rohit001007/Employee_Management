$(document).ready(function () {
$.getJSON("../JSON/Data.json",
    
function (data) {
    var rowData = "";

        $.each(data, function (key, value) {

            rowData += "<tr>";

            rowData += "<td>" + value.firstName + "</td>";
            rowData += '<td>' + value.lastName + '</td>';
            rowData += '<td>' + value.eMail + '</td>';
            rowData += '<td>' + value.mobile + '</td>';
            rowData += '<td>' + value.companyName + '</td>';

            rowData += '<td><img src="../Images/edit-list-svgrepo-com.svg"></td>';
            rowData += '<td><img src="../Images/delete-contact-svgrepo-com.svg"></td>';"</tr>";
        });

        $('#table').append(rowData);
    });
}); 
