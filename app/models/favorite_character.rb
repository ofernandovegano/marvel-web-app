class FavoriteCharacter < ApplicationRecord
  belongs_to :user
  validates :character_id, uniqueness: { scope: :user_id }
end
