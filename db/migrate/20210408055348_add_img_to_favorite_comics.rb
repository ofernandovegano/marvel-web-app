class AddImgToFavoriteComics < ActiveRecord::Migration[6.0]
  def change

    add_column :favorite_comics, :image_url, :string
    add_column :favorite_comics, :image_type, :string

  end
end
