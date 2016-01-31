class User < ActiveRecord::Base

  def self.koala(auth)
    access_token = auth['token']
    facebook = Koala::Facebook::API.new(access_token)
  end

  validates :name, presence: true, length: {minimum: 3, maximum: 50}

  VALID_EMAIL_REGEX = /[a-z][\w\.-]+@[a-z]+[a-z0-9\-]+([\.][a-z]+)+/i
  validates :email, length: {maximum: 255}

  validates :facebook_id, presence: true, uniqueness: true

end
