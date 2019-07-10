class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :photo_tags
  has_many :photos, through: :photo_tags
end