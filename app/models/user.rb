class User < ApplicationRecord
    #uses ActiveModel::SecurePassword in order to add methods to set and authenticate an hashes password. Requires password_digest, automatically adds
    #validations for presence of password and confirmation of password
    has_secure_password

    #validations for creating a new User, cannot create empty string users.
    validates :username, presence: true
    validates :username, uniqueness: true

    #association with character, each user has many characters. Each character belongs to a user. Can access user_id within character through nested routes.
    has_many :characters
end
