class AddImgToFavoriteCharacters < ActiveRecord::Migration[6.0]
  def change

    add_column :favorite_characters, :image_url, :string
    add_column :favorite_characters, :image_type, :string

  end
end
