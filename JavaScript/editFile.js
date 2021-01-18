// $(document).ready(function () {
//       getDataById();
//       updateData();
// })

//   localStorage.getItem('employeeId',id)

//   console.log(id)
    
//   function getDataById() {
//     $.ajax({
//         type: 'POST',
//         url: `http://localhost:9000/api/employee/readOne`,
//         dataType:"json",
//         success: function () {
//         }
//       })
//   }

//   function  updateData ()  {
//         $.ajax({
//           method:"PUT",
//           url: `http://localhost:9000/api/employee/update`,
//           data:{
//             firstName : firstName,
//             lastName : lastName,
//             eMail : eMail,
//             mobile : mobile,
//             companyName : companyName
//           },
//           success: function(data){
//             alert(data.message)
//           }
//       })
//     }