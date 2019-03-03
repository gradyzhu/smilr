class Photo < ApplicationRecord
  validates :user_id, presence: true
  
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  # belongs_to :albums,
  #   class_name: :Album,
  #   foreign_key: :album_id
  
  has_one_attached :image

end