class Photo < ApplicationRecord

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

  # belongs_to :albums,
  #   class_name: :Album,
  #   foreign_key: :album_id

end