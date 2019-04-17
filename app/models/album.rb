class Album < ApplicationRecord
  validates :name, presence: true

  belongs_to :user
  has_many :album_photos
  has_many :photos, through: :album_photos
end