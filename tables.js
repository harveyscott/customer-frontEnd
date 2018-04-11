function getTables(date, guests) {




    
    // create request
    $.ajax({
        type: "GET",
        url: "localhost:8080/getTables?guests="+ guests+"",
        data: "JSON",
        dataType: "dataType",
        success: function (response) {
            for (let index = 0; index < response.length; index++) {
                var card = document.createElement("div");
                card.setAttribute("class", "card");
                var card_body = document.createElement("div");
                card_body.setAttribute("class", "card-body");
                var title = document.createElement("h4");
                title.innerText("Tabel Number" + response[index].tableID);
                card_body.appendChild(title);
                var description = document.createElement("p");
                description.innerText("Seats: " + response[index].seats);
                card_body.appendChild(description);
                card.appendChild(card_body);

                var table_listing = document.getElementById("table-listing");
                table_listing.appendChild(card);
            }


        }
    });
}