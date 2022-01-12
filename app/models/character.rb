class Character < ApplicationRecord

    #validations for creating a character, requires a unique name to be able to push it to the database. TODO: more validations
    validates :name, presence: true
    validates :name, uniqueness: true
    validates :name, length: { maximum: 30 }

    #same but with race
    validates :race, presence: true

    #association relationship with user  character -> user
    belongs_to :user

    def self.alpha
        Character.order(:name)
    end

end
