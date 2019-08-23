// console.log("This works!");
// const toDos = ["put stuff on the page", "take stuff off the page"]
// for(let i = 0; i < toDos.length; i ++){
//     const toDo = toDos[i];
//     $('body').append(`<p>${todo}</p>`)
// }

//add an event listener for when the user changes the form input(we need to figure out how to grab the input information in index.html and show it on the page, so give an id of "nameInput" to make it easy to grab---how can we do this using jquery?)
// $('#nameInput').change(function(){
//     console.log("Ch-ch-changes")
// });
// function respondToChange(){
//   //.val will GET the value of the input
//   const input =   $('#nameInput').val();
//   //as they type, store the value of the text in the input in 
//   //console.log that variable's value
//   console.log(input)
// }
// $('#nameInput').on('change', respondToChange)
//as they type, store the value of the text in the input in a variable
//console.log that variable's value

//use that variable when they submit to put the input on the page 
//grab what we are trying to use, and what we are trying to use is a form
//adding event to prevent default behavior of form updating for a split second
//event is a parameter that automatically gets passed in to any function with a listener and in this case we want to prevent the default behavior
$('.nameForm').submit(function(event){
    event.preventDefault();
    console.log("Form Submitted")
    //Add a message saying "Hello XXXXX"
    //grab the input from the input field and put it in a variable
    const input = $('#nameInput').val();
    //the value of the name in nameInput
    console.log(input)
    //we want to see that name on the console
    //place a p tag on the page that contains the variable so we can see the name on the page after it's submitted
    // $('body').append(`<p>Hello, ${input}</p>`)
    // $('.todolist').append(`<li>${input}</li>`)
    // $('.nameForm').trigger('reset') or
    //or if we want to target a specific part of the form, like name=username we'd use:
    // $('input[name=username]').val('')
    // $('#nameInput').val('');

    //2nd solution: create a variable and use jquery to create out element
    const newListItem = $(`<li>${input}</li>`).click(function(e){
        //remove items from the list
        $(e.target).remove();

 //Now, how do I move what's in the Things To Do List to the Done List?

        //grab the text from the element that was clicked
        // $(this).text() ----this can be used as well, but you'll see e.target more often
        const todoText= $(e.target).text()
        //create a new list item with that text in it 
        const doneListItem = $(`<li>${todoText}</li>`)
        //append that list item to the doneList
        $('.donelist').append(doneListItem);    
    })
    //then append the newListItem:
    $('.todolist').append(newListItem)

    $('input[name=username]').val('')
})

//lets comment out the code we dont need anymore, which is the respondToChange function above the nameForm code

//add a click event for each of the list items

$('.todolist li').click(function(){
    console.log("CLICK")
})
//doesn't work...why?
//right now its looking for all the list items as the page loads and therefore todolistli isn't found because it isn't there yet. This is called the dynamic content problem. There are two solutions--
//1st solution: target the list itself because it does already exist
//then we create a new usgage of our .on function. Attaches an event listener to the whole list
// $('.todolist').on('click', 'li', function(){
//     console.log("CLICK WORKING NOW?")
// })

//How do I move what's in the Things To Do List to the Done List?