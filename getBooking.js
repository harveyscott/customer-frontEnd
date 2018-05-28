function getBooking(email, id, booking) {
    var settings = {
        "async": true,
        "url": "http://localhost:8080/getBooking?email=" + email +"&id=" + id +"",
        "method": "GET",
      }
      
      $.ajax(settings).done(function (response) {
        booking = response;

        // Form a presentation for the user

        var card = document.createElement("div");
        card.setAttribute("class", "card");
        var card_header = document.createElement("div");
        card_header.setAttribute("class", "card-header");
        var title = document.createElement("h4");
        title.innerHTML = "Booking Date " + booking.date;
        card_header.appendChild(title);
        var description = document.createElement("p");
        description.innerHTML = "Table number " + booking.tableID + " @ " + booking.hours + "pm";
        card_header.appendChild(description);
        card.appendChild(card_header);

        var changeDateButton = document.createElement("button");
        var cancelButton = document.createElement("button");

        changeDateButton.setAttribute("class", "btn btn-primary modifyButton");
        cancelButton.setAttribute("class", "btn btn-danger modifyButton");

        changeDateButton.setAttribute("id", "changeDateButton");
        cancelButton.setAttribute("id", "cancelButton");

        changeDateButton.innerHTML = "Change Date/Time";
        cancelButton.innerHTML = "Cancel Booking";

        var card_body = document.createElement("div");
        card_body.setAttribute('class', 'card-body');
        card_body.appendChild(changeDateButton);
        card_body.appendChild(cancelButton);


        card.appendChild(card_body);
        listing_area = document.getElementById("bookingListing");
        listing_area.appendChild(card);

        $('#cancelButton').click(function (e) { 
            e.preventDefault();
            $("#myModal").modal()
        });

        $('#changeDateButton').click(function (e) { 
            e.preventDefault();
            $('#tableListing').show();
        });


      });
}