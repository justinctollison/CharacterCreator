class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :race, :character_class, :image_url, :description, :history
  has_one :user
end
