album ||= @album

json.extract! album, :id, :name, :user_id, :description
json.extract! album.user, :username

json.photos album.photos.each do |photo|
  if photo.image.attached?
    json.imageUrl url_for(photo.image)
  else
    json.imageUrl ""
  end
end