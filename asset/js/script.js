console.log("Script loaded")
//to show or hide add interview form
$('#signup').click(() => {
    $('#login-form').toggle('slow', () => {
        if ($('#signup-form').css('display') == "none")
            $('#signup-form').css('display', 'inline');
        else
            $('#signup-form').css('display', 'none');
    });
})

$('#login').click(() => {
    $('#signup-form').toggle('slow', () => {
        if ($('#login-form').css('display') == "none")
            $('#login-form').css('display', 'inline');
        else
            $('#login-form').css('display', 'none');
    });
})


// //on click of edit button inside employee feedback form show the form and hide the table
// $('#editButton').click(() => {
//     $('#empForm').toggle('fast', () => {
//         $('#empTable').toggle();
//     })
// });

// $('.submitRating-edit').click((e)=>{
//     $('.editRatingform').toggle('fast')
// })