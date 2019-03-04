
@photos.each do |photo|
  json.partial! "api/photos/show", photo: photo
end