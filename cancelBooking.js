function cancelBooking(id) {
    var settings = {
        "async": true,
        "url": "http://localhost:8080/cancelBooking?id=" + id,
        "method": "GET",
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}