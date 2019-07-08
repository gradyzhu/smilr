class Tag < ApplicationRecord
  validates :name, presence: true

  has_many :photos, through: :photo_tags
end