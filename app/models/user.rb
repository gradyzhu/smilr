class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token 

  attr_reader :password

  def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
      self.session_token = SecureRandom.urlsafe_base64
      self.save!
      self.session_token
  end

  def self.find_by_credentials(username, password)
      @user = User.find_by(username: username)
      if @user && @user.is_password?(password)
        @user
      else
        return nil
      end
  end

  # associations uncomment later
  has_many :albums
  has_many :photos


  # has_many :comments,
  # through: :photos,
  # source: :comments
end