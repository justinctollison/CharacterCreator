class CharactersController < ApplicationController

    def index
        characters = Character.all
        render json: characters
    end

    def create
        character = @current_user.characters.create!(character_params)
        render json: character, status: :created
    end

    def show
        character = Character.find(params[:id])
        render json: character
    end

    def destroy
        character = Character.find(params[:id])
        character.delete
        head :no_content
    end

    private

    def character_params
        params.permit(:name, :character_class, :race, :image_url, :description, :history, :universe_genre_game)
    end

end
