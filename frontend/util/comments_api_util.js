export const fetchComments = () => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/comments`
    })
  );
};

export const createComment = comment => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/comments`,
      data: { comment }
    })
  );
};

export const deleteComment = id => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/comments/${id}`
    })
  );
};

window.fetchComments = fetchComments;
window.createComment = createComment;
window.deleteComment = deleteComment;
