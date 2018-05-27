function booking(guests) {
    // To make a booking I need 
    // name, number of guests, date, email, phoneNumber
    // Table ID, Hours

    // var settings = {
    //     "async": true,
    //     "url": "http://localhost:8080/postBooking",
    //     "method": "POST",
    //     "processData": false,
    //     "data": "{\n\t\"bookingWrapper\" : {\n\t\t\"booking\" : {\n\t\t\t\"name\" : \""+ guests.name +"\",\n\t\t\t\"numOfGuests\" : "+ guests.numOfGuests + ",\n\t\t\t\"date\" : \"" + guests.date + "\",\n\t\t\t\"phoneNumber\" : \" " + guests.phoneNumber + "\" \n\t\t},\n\t\t\"bookingInfo\" : {\n\t\t\t\"tableID\" : " + guests.tableID + ",\n\t\t\t\"bookingID\" : \"\",\n\t\t\t\"hours\" : \"" + guests.hours + "\",\n\t\t\t\"date\" : \"" + guests.date + "\"\n\t\t}\n\t}\n}"
    //   }
      
    //   $.ajax(settings).done(function (response) {
    //     console.log(response);
    //   });

    var data = JSON.stringify({
        "bookingWrapper": {
          "booking": {
            "name": guests.name,
            "numOfGuests": guests.numOfGuests,
            "date": guests.date,
            "phoneNumber": guests.phoneNumber,
            "email": guests.email
          },
          "bookingInfo": {
            "tableID": guests.tableID,
            "hours": guests.hours,
            "date": guests.date
          }
        }
      });
      
      var xhr = new XMLHttpRequest();
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
          $('#table-listing').empty();
          $('#table-listing').append("<h3>" + this.responseText +"</h3>");
        }
      });
      
      xhr.open("POST", "http://localhost:8080/postBooking");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with");
      xhr.setRequestHeader("Access-Control-Allow-Headers", "x-requested-by");
      
      xhr.send(data);
}