export const fetchPhotos = (count, userId, tagId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/photos`,
      data: { 
        count: count,
        user_id: userId,
        tag_id: tagId
      }
    })
  );
};

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`,
  })
);

export const createPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: `api/photos`,
    data: photo,
    contentType: false,
    processData: false
  })
);

export const updatePhoto = photo => (
  $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: { photo } 
  })
);

export const deletePhoto = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  })
);
