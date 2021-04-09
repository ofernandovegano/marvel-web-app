class FavoriteComic < ApplicationRecord
  belongs_to :user
  validates :comic_id, uniqueness: { scope: :user_id }

end
