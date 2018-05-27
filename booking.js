function booking(guests) {
    // To make a booking I need 
    // name, number of guests, date, email, phoneNumber
    // Table ID, Hours

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/postBooking",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache",
        },
        "processData": false,
        "data": "{\n\t\"bookingWrapper\" : {\n\t\t\"booking\" : {\n\t\t\t\"name\" : \""+ guests.name +"\",\n\t\t\t\"numOfGuests\" : "+ guests.numOfGuests + ",\n\t\t\t\"date\" : \"" + guests.date + "\",\n\t\t\t\"phoneNumber\" : \" " + guests.phoneNumber + "\" \n\t\t},\n\t\t\"bookingInfo\" : {\n\t\t\t\"tableID\" : " + guests.tableID + ",\n\t\t\t\"bookingID\" : \"\",\n\t\t\t\"hours\" : \"" + guests.hours + "\",\n\t\t\t\"date\" : \"" + guests.date + "\"\n\t\t}\n\t}\n}"
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}