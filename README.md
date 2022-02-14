# Breaking Bad Quotes
<!-- This app uses https://breakingbadapi.com/ to let fans of the show explore character info, episodes by season, death info, and quotes from the show. Users can also favorite certain quotes and have them appear on their page of favorites.  -->

Inspired by a similar quotes website for Downton Abbey quotes, I decided to build Breaking Bad quotes using https://breakingbadapi.com/. 

### View Show Info

Users are greeted with a carousel of quotes and images of the characters who said them. There is also a navigation bar to let the users explore more show information. 

<img src='https://i.imgur.com/mI5gQTo.png' alt='Home page' />

###### Characters
                                                
The character page lets user view information associated with individual characters. The information card includes the character's name, nickname, if they have one, date of birth, status, living or deceased, occupation, the seasons they appear in, the actor playing them, and their quotes.

<img src='https://i.imgur.com/0xtdyA2.png' alt='character page' />

###### Episodes

Users can see a list of seasons and, once a season is clicked on, the list will expand to show the episodes in that season. The user can then click on an episode and then see the characters featured in that episode. 

<img src='https://i.imgur.com/gmyTnyv.png' alt='Episode Card' />

###### Deaths 

The api had an endpoint to view information associated with the death of characters so I thought "Why not!" and made a page to view that information, complete with content warning
Similar to the character page, users see a list of names and can click on a name to see how the character met their end, in what season and episode, their last words, and the person responsible.

<img src='https://i.imgur.com/9eTeaty.png' alt='Death Page' />

### Favorite Quotes

The site uses JSON server to save favorite quotes selected by the user. This happens between the "Quotes" page and the "Favorites" page. 

<img src='https://i.imgur.com/7htTqvv.png' alt='Quotes page' />

Users can browse all quotes or select a character from the dropdown list and filter quotes by who said them. There is also a button to add quotes to the "Favorites" page. Once the button is clicked, a notification will appear informing the user the quote has been added and providinga link to the quotes page. 

<img src='https://i.imgur.com/aqnAx2H.png' alt='Favorites page' />

All quotes that appear in the "Favorites" page will now have a "Remove" button. Once the user clicks one of these buttons the quote will disappear from the page. 

The app is hosted on Heroku at https://diaz-breaking-bad.herokuapp.com/

### Upcoming Features

- Replace JSON server will Rails backend
