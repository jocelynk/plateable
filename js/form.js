var postContactToGoogle  = function() {
    var email = $('#Email').val();
    var first = $('#First').val();
    var last = $('#Last').val();
    var company = $('#Company').val();

    $.ajax({
        url: "https://docs.google.com/forms/d/1bs-gXhjOkham619MN4Q37ZOBYZ-rHfhQua5sljtAb7g/formResponse",
        data: { "entry_1096618039": email,
            "entry_1470814625": first, "entry_860140424":
                last, "entry_1321666875": company },
        type: "POST",
        dataType: "xml",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        xhrFields: {
            // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
            // This can be used to set the 'withCredentials' property.
            // Set the value to 'true' if you'd like to pass cookies to the server.
            // If this is enabled, your server must respond with the header
            // 'Access-Control-Allow-Credentials: true'.
            withCredentials: false
        },
        statusCode: {
            0: function () {
                console.log('form failed');
            },
            200: function () {
                console.log('form succeeded');
            }
        }
    });
}

$('#ButtonSubmit').click(function() {
    postContactToGoogle();
    return false;
});

(function() {



   
});