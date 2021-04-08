class CreateFavoriteCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :favorite_characters do |t|
      t.string :character_id
      t.references :users, null: false, foreign_key: true

      t.timestamps
    end
  end
end
