class RenameUsersIdToUserId < ActiveRecord::Migration[6.0]
  def change

    rename_column :favorite_characters, :users_id, :user_id
    rename_column :favorite_comics, :users_id, :user_id

  end
end
