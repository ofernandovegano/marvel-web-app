class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def user_favorites
    @favorite_characters = User.find(current_user.id)
  end
end
