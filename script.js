"use strict";

const div = document.getElementById("content");

fetch('https://apis.is/sports/handball')  
.then( (response) => {
    if (response.status !== 200) { // response handling
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
    }

    response.json().then( (data) => {
    console.log(data);  // logs all the data into the console
    
    let the_div, the_img, textbox, teams, time, tournament, venue;

    // for loop that goes through all the api results
    for (var i = 0; i < data.results.length; i++) {
        event = data.results[i];

        // creates all the elements for the html
        the_div = document.createElement('div'); 
        the_img = document.createElement('img');
        textbox = document.createElement('span');

        // fills in all the elements created before
        teams = document.createElement('h2');
        teams.innerHTML = event.Teams;
        tournament = document.createElement('h2');
        tournament.innerHTML = event.Tournament;
        time = document.createElement('h3');
        time.innerHTML = event.Date + " " + event.Time;
        time.style = "margin-bottom: 8px;"
        venue = document.createElement('p');
        venue.innerHTML = event.Venue;
        venue.style = "margin: 0;"
        the_div.classList = "item"; // class 
        the_img.src = 'assets/asset' + Math.ceil(Math.random() * 20) + '.jpg' // image source

        // puts them all together
        textbox.appendChild(teams);
        textbox.appendChild(document.createElement('hr'));
        textbox.appendChild(tournament);
        textbox.appendChild(document.createElement('br'));
        textbox.appendChild(time);
        textbox.appendChild(venue);

        // injects it all into the html
        the_div.appendChild(the_img);
        the_div.appendChild(textbox);
        div.appendChild(the_div);
    }
    
    });
}
)
.catch( (err) => { // error handling
    console.log('Fetch Error :-S', err);
})
