
json.photos do
  @photos.each do |photo|
    json.partial! "api/photos/photo", photo: photo
  end
end