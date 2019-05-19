class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :photo
  belongs_to :user
end
