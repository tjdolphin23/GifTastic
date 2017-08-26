$(document).ready(function() {

    $('button').on('click', function() {
        var athlete = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athlete + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
          .done(function(response) {
          
          var results = response.data;

          for (var i = 0; i < results.length; i++) {

            var athleteDiv = $('<div/>');
            var p =$('<p/>');
                p.text(results[i].rating);

            var athleteImage = $('<img/>');
            athleteImage.addClass('anImg')
            athleteImage.attr('src', results[i].images.fixed_height.url);
            athleteImage.attr('data-still', results[i].images.fixed_height_still.url)
            athleteImage.attr('data-animate', results[i].images.fixed_height.url)
            .attr('data-state', 'still');

            athleteDiv.append(p);
            athleteDiv.append(athleteImage);
            athleteDiv.prependTo($('#gifs'));
                }

      $('.anImg').on('click', function() {
            
            var state = $(this).attr('data-state'); 

            if (state == 'still') {
                 
              $(this).attr('src', $(this).data('animate'));
              $(this).attr('data-state', 'animate');

            } else {
                            
              $(this).attr('src', $(this).data('still'));
               $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var person = [''];

    
        $('#submitButton').on('click', function() {
              event.preventDefault();

            var personButton = $('#gif-input').val().trim();
            var newButton = $("<button/>").addClass('btn btn-info athlete').attr('data-name',personButton).html(personButton);
            
            $('#athelteButtons').append(newButton);

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + personButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(personButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var athleteDiv = $('<div/>');
                    var p =$('<p/>');
                    p.text(results[i].rating);
                    var athleteImage = $('<img/>');
                    athleteImage.addClass('anImg')
                    athleteImage.attr('src', results[i].images.fixed_height_still.url);
                    athleteImage.attr('data-still', results[i].images.fixed_height_still.url)
                    athleteImage.attr('data-animate', results[i].images.fixed_height.url)
                    .attr('data-state', 'still');

                    athleteDiv.append(p);
                    athleteDiv.append(athleteImage);
                    athleteDiv.prependTo($('#gifs'));
                }

          $('.anImg').on('click', function() {
            
                var state = $(this).attr('data-state'); 

            if (state == 'still') {
                    
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');

            } else {
                            
                $(this).attr('src', $(this).data('still'));   
                $(this).attr('data-state', 'still');
                    }      
                });
            });

            $('#gif-input').val("");
            return false;
        })
  
});