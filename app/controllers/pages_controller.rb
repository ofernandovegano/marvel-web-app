class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @favorite_comics = FavoriteComic.where(user_id: current_user)
    @favorite_characters = FavoriteCharacter.where(user_id: current_user)
  end
end
