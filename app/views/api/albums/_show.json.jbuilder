album ||= @album

json.extract! album, :id, :name, :user_id, :description
json.extract! album.user, :username
json.photos album.photos, partial: 'api/photos/show', as: :photo
