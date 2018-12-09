// $(document).ready(function(){


// giphyCreation)

var thinkPeople= ["Elon Musk", "Albert Einstein"];

// function giphyCreation (){
    $(document).on("click",".search", function() {
    var data = $(this).data("search");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + data +"&api_key=h51l8iqc2KlAyDT9bVZScMvEsFxayZDL&limit=10";
    console.log(queryUrl);
   
    $.ajax({
        url: queryUrl, 
        crossDomain: true,
        method: "GET"})
      
    .then(function(response) {
        console.log(response);
         for(var i = 0; i < response.data.length;i++) {
         var div = $("<div>");
         var img = $("<img>");
         var p = $("<p>");
         p.text("rating: " + response.data[i].rating);
         img.attr("src", response.data[i].images.fixed_height_still.url);
        img.attr("data-state", "still");
        img.attr("data-animated", response.data[i].images.fixed_height.url);
        img.attr("data-still", response.data[i].images.fixed_height_still.url);
         div.append(img);
        div.append(p);
         $("#thinkers").prepend(div);
         }

        $("img").on("click", function( ) {
            var imgState = $(this).attr("data-state");
            var animatedUrl = $(this).attr("data-animated"); 
            var stillUrl = $(this).attr("data-still");
            
        if (imgState === "still") {
                $(this).attr("data-state", "animated");
                $(this).attr("src", animatedUrl);
        } else if (imgState === "animated") {
            $(this).attr("data-state", "still");
                $(this).attr("src", stillUrl); }
            })
        })})
    
    
        function renderButtons() {

            // Deleting the movie buttons prior to adding new movie buttons
            // (this is necessary otherwise we will have repeat buttons)
            $(".myButtons").empty();
    
            // Looping through the array of thinkPeople
            for (var i = 0; i < thinkPeople.length; i++) {
    
              // Then dynamicaly generating buttons for each movie in the array.
              // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
              var a = $("<button>");
              // Adding a class
              a.addClass("search");
              // Adding a data-attribute with a value of the movie at index i
              a.attr("data-search", thinkPeople[i]);
              // Providing the button's text with a value of the movie at index i
              a.text(thinkPeople[i]);
              // Adding the button to the HTML
              $(".myButtons").append(a);
            }
          }
    
          // This function handles events where one button is clicked
          $("#think").on("click", function(event) {
            // event.preventDefault() prevents the form from trying to submit itself.
            // We're using a form so that the user can hit enter instead of clicking the button if they want
            event.preventDefault();
    
            // This line will grab the text from the input box
            var movie = $("#thinkersInput").val().trim();
            // The movie from the textbox is then added to our array
            thinkPeople.push(movie);
    
            // calling renderButtons which handles the processing of our movie array
            renderButtons();
          });
    
          // Calling the renderButtons function at least once to display the initial list of movies
          renderButtons();




            

    //  $("#thinkers").prepend("<p>Rating: " + response.data[i].rating + "</p>");
    //  $("#thinkers").prepend("<img src=" + response.data[i].images.downsized.url + ">");

    





