class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :race, :character_class, :image_url, :description, :history, :universe_genre_game, :likes
  has_one :user
end
