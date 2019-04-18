album ||= @album

json.extract! album, :id, :name, :user_id, :description
json.extract! album.user, :username

# json.photos album.photos.each do |photo|
#   if photo.image.attached?
#     json.imageUrl url_for(photo.image)
#   else
#     json.imageUrl ""
#   end
# end

json.photos album.photos, partial: 'api/photos/show', as: :photo


# json.photos album.photos.each do |photo|
#   json.partial! "api/photos/show", photo: photo
# end
