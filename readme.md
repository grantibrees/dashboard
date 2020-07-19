
## REQUIRED:
 ### Visualization
- The data from the services are each rendered:
  - [ ] Quote: Quote always displayed and Author reveals on hover
  - [x] Image: The image is required, however the additional data is optional
  - [ ] Weather: The temp is displayed in Fahrenheit/Celsius with a click toggling between
  - [ ] Todo: Todo's are shown on the page including a count of remaining tasks to complete
- [ ] The image should be on large display with at least one other element positioned over the top of the image.
- [ ] When adding a Todo the page does not reload
- [ ] Completed Todo's checkbox remains checked on reload ([hint: checked attribute](https://www.w3schools.com/tags/att_input_checked.asp))
- [ ] A clock shows the accurate time in the middle of the screen and updates appropriately
   
 ### Functionality
 - [ ] Todo's can be added to a list (POST)
 - [ ] Todo's can be removed (DELETE)
 - [ ] Todo's that were completed yesterday are removed
 - [ ] Todo's can be marked complete (PUT)
 - [ ] The data in the Todos persists on reload


## EXTENSION IDEAS 
- [x] Connect my own random images using api/user/heroes
- [ ] Random spell by level (this would replace quotes) https://www.dnd5eapi.co/docs/#resource-lists
- [ ] Hidden button to display:
    - [ ] D20 Roller http://roll.diceapi.com/
    - [ ] Display Djinn animation (local storage).
    - [ ] Display form to add/remove images from api/user/heroes
- [ ] Clock api http://worldclockapi.com/
- [ ] Sweet alert on page load if there are unfinished todos

- On hover the quote should show the author of the quote and disappear when not hovered over
    (I'll change this to clicking open the random spell name to show the spell description)
- Change the message from Good Morning to Good Afternoon, Evening as appropriate.
- Include an Icon to show what the weather is sunny/cloudy/rainy
- [ ] Add a button to cycle spells/djinn

- `BONUS DIFFICULTY` The todo list shouldn't have to redraw every item just because one of them changed. 
    - If you think through some of the actions being performed you might find a way to optimize the list by only updating the one todo that changes at a time
    - Every time you update a todo you shouldn't have to re-`get` the entire list you already know what changed about the one todo
