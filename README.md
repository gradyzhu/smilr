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

To extract the dimensions of files, I initiated a new Image object and create a slice of state to store the values.

```javascript
  const handleFile = event => {
    const file = event.currentTarget.files[0];
    const fileReader = new FileReader();

    if (file) fileReader.readAsDataURL(file);

    fileReader.onloadend = () => {
      let image = new Image();
      image.src = fileReader.result;
      image.onload = () => {
        setPhotoFile(file);
        setPhotoUrl(fileReader.result);
        setIsUploaded(true);
        setPhotoWidth(image.width);
        setPhotoHeight(image.height);
      };
    };
  };
```

Upon submit, key value pairs are appended to a FormData object.  The FormData is passed into a createPhoto function that carries out the eventual creation of the Photo.

``` javascript
  const handleInput = field => event => {
    if (field === "description") setDescription(event.currentTarget.value);
    if (field === "title") setTitle(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setIsUploading(true);
    const formData = new FormData();
    formData.append('photo[title]', title);
    formData.append('photo[description]', description);
    formData.append('photo[width]', photoWidth);
    formData.append('photo[height]', photoHeight);
    formData.append('photo[image]', photoFile);

    createPhoto(formData).then(res => {
      history.push(`/photos/${res.photo.id}`);
    });
  };
```


### Albums
### Comments
### User Authentication

## Special Features 

### Justfied Grid Gallery

I utilized a popular [React library](https://benhowell.github.io/react-grid-gallery/) to square up any photos index displayed on the application. With several tweaks to the source code, I altered the on-click functionality of each displayed image to match Flickr's functionality.

### Infinite Scroll

I implemented infinite scroll using a combination of the Intersection Observer API and React's `useEffect()` hook.

A side effect to fetch an initial batch of 20 photos is triggered upon first render of the PhotosIndex component. Upon reaching the observed element in the DOM, a handler function is invoked to fetch additional photos.

### Modals

For the applications Albums page, I implemented a modal to handle the creation of new albums.  This acts as a great alternative to creating an additional front end route.  The implementation of this feature required a stateful component with logic to save the photoIds of each selected photo.

## Future Features

* Tags
* User Search
* Photo Search
* User Follows
* Optimized images using AWS Lambda

