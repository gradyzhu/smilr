export const fetchAlbums = user_id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user_id}/albums`,
  })
);

export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`,
  })
);

export const createAlbum = album => (
  $.ajax({
    method: 'POST',
    url: `api/users/${album.user_id}/albums`,
    data: { album }
  })
);

export const updateAlbum = album => (
  $.ajax({
    method: 'PATCH',
    url: `api/albums/${album.id}`,
    data: { album } 
  })
);

export const deleteAlbum = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${id}`
  })
);

// window.fetchAlbums = fetchAlbums;
// window.fetchAlbum = fetchAlbum;
// window.createAlbum = createAlbum;
// window.updateAlbum = updateAlbum;
// window.deleteAlbum = deleteAlbum;
