Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV['facebook_app_id'], ENV['facebook_secret'],
            scope: 'email,user_birthday,user_about_me,public_profile,
                    user_hometown,user_location'
end
