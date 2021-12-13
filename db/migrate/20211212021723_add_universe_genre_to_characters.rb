class AddUniverseGenreToCharacters < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :universe_genre_game, :string
  end
end
