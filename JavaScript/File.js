$(document).ready(function () {

    $.getJSON("../JSON/Data.json",
        function (data) {
            var emp = "";

            $.each(data, function (key, value) {


                emp += "<tr>";
                emp += "<td>" +
                    value.firstName + "</td>";
                emp += '<td>' +
                    value.lastName + '</td>';
                emp += '<td>' +
                    value.eMail + '</td>';
                emp += '<td>' +
                    value.mobile + '</td>';
                emp += '<td>' +
                    value.companyName + '</td>';

                emp += '<td><img src="../Images/edit-list-svgrepo-com.svg"></td>';
                emp += '<td><img src="../Images/delete-contact-svgrepo-com.svg"></td>';

                "</tr>";
            });

            $('#table').append(emp);
        });
}); 
