class User < ActiveRecord::Base

  def self.koala(auth)
    access_token = auth['token']
    facebook = Koala::Facebook::API.new(access_token)
  end

  before_save {self.email = email.downcase}
  validates :name, presence: true, length: {minimum: 3, maximum: 50}

  VALID_EMAIL_REGEX = /[a-z][\w\.-]+@[a-z]+[a-z0-9\-]+([\.][a-z]+)+/i
  validates :email, presence: true, length: {maximum: 255},
            format: {with: VALID_EMAIL_REGEX},
            uniqueness: {case_sensitive: false}

  validates :facebook_id, presence: true, uniqueness: true
end
