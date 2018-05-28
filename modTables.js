function getTables(guests) {
    var settings = {
        "async": true,
        "url": "http://localhost:8080/getTableLayout",
        "method": "GET"
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        var inputArray = response;
        var arrayPoint = 0;
        var table = document.createElement("table");

        // create rows and cells
        for (let i = 0; i < 5; i++) {
            var row = table.insertRow(i);
            for (let j = 0; j < 4; j++) {
                var cell = row.insertCell(j);
                cell.innerHTML = inputArray[arrayPoint];
                arrayPoint++;

                // Set Backgroud Color
                selectedColor = "white";
                switch (cell.innerHTML) {
                    case "1":
                        selectedColor = "blue";
                        break;
                        case "2":
                        selectedColor = "red"
                        break;
                        case "3":
                        selectedColor = "green"
                        break;
                        case "4":
                        selectedColor = "orange"
                        break;
                        case "5":
                        selectedColor = "brown"
                        break;
                        case "6":
                        selectedColor = "black"
                        break;
                        case "7":
                        selectedColor = "purple"
                        break;
                
                    default:
                    selectedColor = "white"
                        break;
                }


                cell.setAttribute("style", "background-color: " + selectedColor)
            }
            
        }
        inputArea = document.getElementById("currentLayout");
        inputArea.appendChild(table);
      });




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
                        decorator = "0"
                        button.innerHTML = arrayItem.concat(decorator);;
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