function getTables(guests) {
    // create request
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getTables?guests="+ guests.numOfGuests+"&date=" + guests.date,
        data: "data",
        dataType: "JSON",
        success: function (response) {
            for (let index = 0; index < 8; index++) {
                
                if (response[index] != null) {
                    // create card
                    var card = document.createElement("div");
                    card.setAttribute("class", "card");

                    // create header
                    var card_header = document.createElement("div");
                    card_header.setAttribute("class", "card-header");
                    var title = document.createElement("h4");
                    title.innerHTML = "Table Number " + index;
                    card_header.appendChild(title);
                    var description = document.createElement("p");
                    description.innerHTML = "Seats: " + guests.numOfGuests;
                    card_header.appendChild(description);
                    card.appendChild(card_header);

                    // create body
                    var card_body = document.createElement("div");
                    card_body.setAttribute('class', 'card-body');

                    // Loop through available times
                    response[index].forEach( function( arrayItem) {
                        var button = document.createElement("button");
                        button.setAttribute("class", "btn btn-success timesButton");
                        button.setAttribute("data-TableID", index);
                        button.setAttribute("data-TimeSelected", arrayItem);
                        if (arrayItem.length < 2) {
                            decorator = ".00"
                            button.innerHTML = arrayItem.concat(decorator);;
                        } else {
                            button.innerHTML = arrayItem;
                        }
                        
                        card_body.appendChild(button);
                    })
                        
                    
                    card.appendChild(card_body);
                    var table_listing = document.getElementById("table-listing");
                    table_listing.appendChild(card);    
                }    
            }
            $('.timesButton').click(function (e) { 
                e.preventDefault();
                guests.tableID = $(this).attr("data-TableID");
                guests.hours = $(this).attr("data-TimeSelected");
                console.log(guests);
                $("#myModal").modal() 
            });
        }
    });
}