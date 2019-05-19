
@comments.each do |comment|
  json.set! comment.id do
    json.partial! "api/comments/show", comment: comment
  end
end

