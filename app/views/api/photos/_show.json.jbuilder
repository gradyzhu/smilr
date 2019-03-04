photo ||= @photo

json.set! photo.id do
  json.extract! photo, :id, :title, :user_id, :album_id, :title, :description, :date_taken

  if photo.image.attached?
    json.imageUrl url_for(photo.image)
  else
    json.imageUrl ""
  end
end
