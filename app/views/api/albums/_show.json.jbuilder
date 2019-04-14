album ||= @album

json.extract! album, :id, :name, :user_id, :description
json.extract! album.user, :username