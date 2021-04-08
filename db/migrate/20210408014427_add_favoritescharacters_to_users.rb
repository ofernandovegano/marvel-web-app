class AddFavoritescharactersToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :favorite_characters, :string, array:true, default:[]
  end
end
