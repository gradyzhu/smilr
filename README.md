# Smilr

## [Live Site](https://smilr.herokuapp.com)

## Overview

Smilr is clone of the photo-sharing platform Flickr.

User are able to sign-up, browse photos, view users, upload photos, and create albums.  The web application was built with a React and Redux in front end and Ruby on Rails and PostgreSQL in the backend.

## Technologies

* Javascript ES6
* React (Hooks)
* Redux
* HTML5 / CSS
* Ruby on Rails
* PostgreSQL
* AWS S3
* Active Storage
* Heroku

## Features

### Photo Upload
### Albums
### Comments
### User Authentication

## Special Features 

### Infinite Scroll

I implemented infinite scroll using a combination of the Intersection Observer API and React's `useEffect()` hook.

After the first render of my PhotosIndex component, I make a call to the back end to fetch an initial batch of 20 photos. Upon reaching the observed element in the DOM, a handler function is called to make subsequent calls for additional photos.

### Modals

For the applications Albums page, I implemented a modal to handle the creation of new albums.  This acts as a great alternative to creating an additional front end route.  The implementation of this feature required a stateful component with logic to save the photoIds of each selected photo.

## Future Features

* Tags
* User Search
* Photo Search
* Grid using React Gallery 
* Optimized images using AWS Lambda

