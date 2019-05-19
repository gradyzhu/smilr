comment ||= @comment

json.extract! comment, :id, :body, :user_id, :photo_id
json.extract! comment.user, :username