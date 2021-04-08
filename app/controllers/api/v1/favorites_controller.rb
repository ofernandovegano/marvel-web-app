class Api::V1::FavoritesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def add_to_favorite_comics
    favorite_comic = current_user.favorite_comics.build(comic_id: params[:id], image_url: params[:image_url], image_type: params[:image_type])
    favorite_comic.user = current_user
    favorite_comic.save
    render json: favorite_comic # see favorite_comic.as_json method
  end

  def add_to_favorite_characters
    favorite_character = current_user.favorite_characters.build(character_id: params[:id], image_url: params[:image_url], image_type: params[:image_type])
    favorite_character.user = current_user
    favorite_character.save
    render json: favorite_character # see favorite_character.as_json method
  end

end
