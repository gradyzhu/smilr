class PhotoTag < ApplicationRecord
  validates :photo_id, presence: true
  validates :tag_id, presence: true
  validates :photo_id, uniqueness: { scope: :tag_id }

  belongs_to :photo
  belongs_to :tag
end