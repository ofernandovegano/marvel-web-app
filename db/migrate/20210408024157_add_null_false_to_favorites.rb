class AddNullFalseToFavorites < ActiveRecord::Migration[6.0]
  def change
    change_column_null :favorite_comics, :comic_id, false
    change_column_null :favorite_characters, :character_id, false
  end
end
