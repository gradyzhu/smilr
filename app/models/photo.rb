class Photo < ApplicationRecord
  validates :user_id, presence: true

  # validates :ensure_image
  
  belongs_to :user
  has_many :album_photos
  has_many :albums, through: :album_photos
  has_one_attached :image
  
  # def ensure_image
  #   unless self.image.attached?
  #     errors[:image] << "Must be attached"
  #   end
  # end

end