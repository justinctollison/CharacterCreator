class Character < ApplicationRecord

    validates :name, presence: true
    validates :name, uniqueness: true

    validates :race, presence: true

    belongs_to :user
end
