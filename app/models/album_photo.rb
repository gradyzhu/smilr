class AlbumPhoto < ApplicationRecord
  validates :album_id, presence: true
  validates :photo_id, presence: true
  belongs_to :album
  belongs_to :photo
end
