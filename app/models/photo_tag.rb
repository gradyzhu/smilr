class PhotoTag < ApplicationRecord
  validates :photo_id, presence: true
  validates :tag_id, presence: true

  belongs_to :photo
  belongs_to :tag
end