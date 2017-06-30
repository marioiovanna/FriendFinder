
$(document).ready( function () {

    console.log('Works');

    $('#save').on('click', function (e) {
        e.preventDefault();

        var name = $('#user').val().trim();
        var picture = $('#basic-url').val().trim();

        console.log(name);
        console.log(picture);

        var newdogs = {
            name: name,
            picture: picture,
            scores: {}
        };

        console.log(newdogs);

        $.post('/api/friends', newdogs, function (data) {
            if (data) {
                alert('done')
            }
            else {
                alert('no esta')
            }
        });
    });

    $("#submit").click(function submitBtn() {
        event.preventDefault();

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

        $.post("/api/friends", newdogs)
            .done(function(data) {
                console.log(newdogs);
            });
    });
});

