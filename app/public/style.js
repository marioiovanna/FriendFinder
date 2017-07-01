
$(document).ready( function () {

    $('#myModal').hide();

    console.log('Works');

    // $("#submit").click(function submitBtn() {
    //     event.preventDefault();
    $("form").on('submit', function submitBtn(e) {
            e.preventDefault();

        $('form').hide();
        $('#myModal').show();

        var q1 = $('input[name=optradio1]:checked').val(),
            q2 = $('input[name=optradio2]:checked').val(),
            q3 = $('input[name=optradio3]:checked').val(),
            q4 = $('input[name=optradio4]:checked').val(),
            q5 = $('input[name=optradio5]:checked').val(),
            q6 = $('input[name=optradio6]:checked').val(),
            q7 = $('input[name=optradio7]:checked').val();

        var takename = $("#user").val().trim();
        var pic = $("#basic-url").val();

        var newdogs = {
            name: takename,
            picture: pic,
            scores: [q1, q2, q3, q4, q5, q6, q7]
        };

        $.post("/friends", newdogs)
            .done(function(data) {
                console.log(newdogs);
            }).done(function(results) {

                $('#show').append(results[2].name);
                $('#show').append('<img src="'+ results[2].picture + '" alt="Dog Match" style="width:570px;height:300px;">');
            console.log(results)
        });
        $('#show').empty()
    });
});

