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

    for (var i = 0; i < data.results.length; i++) {
        event = data.results[i]

        the_div = document.createElement('div'),
        the_img = document.createElement('img'),
        textbox = document.createElement('span');

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

        textbox.appendChild(teams);
        textbox.appendChild(document.createElement('hr'));
        textbox.appendChild(tournament);
        textbox.appendChild(document.createElement('br'));
        textbox.appendChild(time);
        textbox.appendChild(venue);

        the_div.classList = "item"; // class 
        the_img.src = 'assets/asset' + Math.ceil(Math.random() * 20) + '.jpg' // image source

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
    