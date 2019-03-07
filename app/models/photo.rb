class Photo < ApplicationRecord
  validates :user_id, presence: true

  # validates :ensure_image
  
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_one_attached :image

  # def ensure_image
  #   unless self.image.attached?
  #     errors[:image] << "Must be attached"
  #   end
  # end

end