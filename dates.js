function getDates() {
    var dates = [];

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getDates",
        data: "data",
        dataType: "JSON",
        success: function (response) {
            for (let index = 0; index < response.length; index++) {
                dates.push(response[i]);
            }
        }
    });

    $( document ).ajaxComplete(function( event, request, settings ) {
        return dates;
      });
}