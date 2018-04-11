function getDates() {
    $.ajax({
        type: "GET",
        url: "http://192.168.1.86:8080/getDates",
        data: "data",
        dataType: "JSON",
        success: function (response) {
            for (let index = 0; index < response.length; index++) {
                $('#dateDropDown').append('<li>' + response[index] + '</li>');
            }
        }
    });
}