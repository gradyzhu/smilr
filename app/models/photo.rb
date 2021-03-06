class Photo < ApplicationRecord
  validates :user_id, presence: true

  # validates :ensure_image
  
  belongs_to :user
  has_many :comments
  has_many :album_photos
  has_many :albums, through: :album_photos
  has_many :photo_tags
  has_many :tags, through: :photo_tags
  has_one_attached :image
  # def ensure_image
  #   unless self.image.attached?
  #     errors[:image] << "Must be attached"
  #   end
  # end

end