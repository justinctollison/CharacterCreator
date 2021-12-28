class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.belongs_to :user
      t.string :name
      t.string :race
      t.string :image_url
      t.string :universe_genre_game
      t.string :description
      t.string :history
      t.string :character_class
      t.integer :likes, default: 0

      t.timestamps
    end
  end
end
