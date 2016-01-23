class User < ActiveRecord::Base
  before_save {self.email = email.downcase}

  validates :name, presence: true, length: {maximum: 50}

  VALID_EMAIL_REGEX = /[a-z][\w\.-]+@[a-z]+[a-z0-9\-]+([\.][a-z]+)+/i
  validates :email, presence: true, length: {maximum: 255},
            format: {with: VALID_EMAIL_REGEX},
            uniqueness: {case_sensitive: false}

  has_secure_password
  validates :password, presence: true, length: { minimum: 8 }
end
