export const fetchTag = tag_id => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/tags/${tag_id}`
      })
  );
};

export const fetchTags = photo_id => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/photos/${photo_id}/tags`
      })
  );
};

export const createTag = tag => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/photos/${tag.photo_id}/tags`,
      data: { tag }
    })
  );
};