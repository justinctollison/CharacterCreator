class RemoveUserIdFromCharacters < ActiveRecord::Migration[6.1]
  def change
    remove_column :characters, :user_id, :integer
  end
end
