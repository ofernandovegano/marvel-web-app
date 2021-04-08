class CreateFavoriteComics < ActiveRecord::Migration[6.0]
  def change
    create_table :favorite_comics do |t|
      t.string :comic_id
      t.references :users, null: false, foreign_key: true

      t.timestamps
    end
  end
end
