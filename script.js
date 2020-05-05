"use strict";

const div = document.getElementById("content");

fetch('https://apis.is/earthquake/is')  
.then( (response) => {
    if (response.status !== 200) { // response handling
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
    }

    response.json().then( (data) => {
    console.log(data);  // logs all the data into the console
    
    let the_div, the_img, the_text ;

    for (var i = 0; i < data.results.length; i++) {
        the_div  = document.createElement('div'),
        the_img  = document.createElement('img'),
        the_text = document.createElement('h2');


        the_div.classList = "item"; // class 
        the_img.src = "dog.png" // image source
        the_text.innerHTML = data.results[i].humanReadableLocation; // name/text
        the_div.appendChild(the_img);
        the_div.appendChild(the_text);
        div.appendChild(the_div);
    }
    
    });
}
)
.catch( (err) => { // error handling
    console.log('Fetch Error :-S', err);
})
    