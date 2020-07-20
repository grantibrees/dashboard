
## REQUIRED:
 ### Visualization
- The data from the services are each rendered:
  - [ ] Quote (quote and author)
  - [x] Image (only the image is required, however feel free to include other data)
  - [ ] Weather (The temp is displayed, feel free to add other pieces)
  - [x] Todo (the new todo form exists, and any todos are rendered GET)
- [x] The image should be on large display with at least one other element positioned over the top of the image

   
 ### Functionality
 - [x] Todo's can be added to a list (POST)
 - [x] Todo's can be removed (DELETE)
 - [x] Todo's can be marked complete (PUT)
 - [x] The todolist shows the total count of tasks currently being tracked
 - [x] The todolist takes advantage of the TodoService to provide persistent data
 - [x] Completed Todo's checkbox remains checked on reload


## EXTENSION IDEAS 
- [x] Todo's that were completed from yesterday are removed
- [x] Clock api http://worldclockapi.com/
- [x] A clock shows the accurate time in the middle of the screen and updates appropriately
- [x] Connect my own random images using api/user/heroes
- [ ] Random spell by level (this would replace quotes) https://www.dnd5eapi.co/docs/#resource-lists
- [ ] Hidden button to display:
    - [ ] D20 Roller http://roll.diceapi.com/
    - [ ] Display Djinn animation (local storage).
    - [ ] Display form to add/remove images from api/user/heroes

- [x] Sweet alert on page load if there are unfinished todos on the following day.

- [ ] On hover the quote should show the author of the quote and disappear when not hovered over
    (I'll change this to clicking open the random spell name to show the spell description)
- [x] Change the message from Good Morning to Good Afternoon, Evening as appropriate.
- [ ] Include an Icon to show what the weather is sunny/cloudy/rainy
- [ ] Add a button to cycle spells/djinn
- [ ] Add functionality so when you click on the temp, it changes from C to F.

## BONUS DIFFICULTY
- [x] The todo list doesn't have to redraw every item just because one of them changed. 
- [x] Every time you update a todo you shouldn't have to re-`get` the entire list you already know what changed about the one todo.
