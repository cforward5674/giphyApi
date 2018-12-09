// $(document).ready(function(){


// giphyCreation)


// function giphyCreation (){
    $("data-search").on("click", function() {
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
            var imgState = $(this).data("state");
            var animatedUrl = $(this).data("animated"); 
            var stillUrl = $(this).data("still");
            
        if (imgState === "still") {
                $(this).attr("data-state", "animated");
                $(this).attr("src", animatedUrl);
        } else if (imgState === "animated") {
            $(this).attr("data-state", "still");
                $(this).attr("src", stillUrl); }
            })
        })})
    
    





            

    //  $("#thinkers").prepend("<p>Rating: " + response.data[i].rating + "</p>");
    //  $("#thinkers").prepend("<img src=" + response.data[i].images.downsized.url + ">");

    





