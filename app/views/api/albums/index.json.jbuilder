
@albums.each do |album|
  json.set! album.id do
    json.partial! "api/albums/show", album: album
  end
end