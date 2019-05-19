export const fetchComments = id => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/photos/${id}`
    })
  );
};

export const createComment = comment => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/photos/${photo.id}`,
      data: { comment }
    })
  );
};

export const deleteComment = id => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/photos/${id}`
    })
  );
};

window.fetchComments = fetchComments;
window.createComment = createComment;
window.deleteComment = deleteComment;
