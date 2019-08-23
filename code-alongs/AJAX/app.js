//AJAX 

//$.ajax function makes a request to an outside server

// $.ajax({
//     url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
//     success: (data)=>{
//         console.log(data);
//     },
//     error: ()=>{
//         console.log('bad request');
//     }
// });

//Another version of what's above: 

    $('#movie-search-form').submit(function(e){
        e.preventDefault();
    console.log("the form is good!");
//     //Get the data from the form
    const movieTitle = $('#movie-title').val();
//     console.log(movieTitle);
//****3 aspects of an AJAX request***
const movieRequest = {
    //1. the url where we make our request
    //this url contains query parameters which allow us to say what we want exactly---common way to include api key is after quetion make, t=title
    url:`http://www.omdbapi.com/?apikey=53aa2cd6&t={movieTitle}`,
    //2. the success function to call when the request comes back
    success: (data)=>{
        // console.log(data);
        //4. Use jquery to have the data show on the page
        //this data is an object, so you can't directly put a whole object on the page, you have to grab their specific properties
        //so you cant do:      $('#title').html(data); ...... that won't work
        $('#title').html(data.Title);
        $('#year').html(data.Year);
        $('#rated').html(data.Rated);

        //we can also use .text instead of .html
    },
    // When the user clicks the submit button you can replace the data in the url with what they are looking for (so change Frozen to whatever they are searching)

    //3. the error function to call if the request doesn't come back
    error: ()=>{
        console.log('bad request');
    }
};

$.ajax(movieRequest)

})

//so far we have an ajax function takes in an object, and that object describes all the details about the request we want to make
//the really important details are: the url, and the callback function that will let us know if the call was a success or not

//Let's get the data to show on the page:

