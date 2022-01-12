class CharacterSerializer < ActiveModel::Serializer
  #Allows the front-end to grab and JSON the back-end data to display it to the user. All data attributes on characters can be displayed.
  #Also association of has_one user and displays the user as a nested route
  attributes :id, :name, :race, :character_class, :image_url, :description, :history, :universe_genre_game, :likes
  has_one :user
end
