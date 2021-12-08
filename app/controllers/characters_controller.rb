class CharactersController < ApplicationController

    def index
        characters = Character.all
        render json: characters
    end

    def create
        character = @current_user.characters.create!(character_params)
        render json: character, status: :created
    end

    private

    def character_params
        params.permit(:name, :character_class, :race, :image_url, :description, :history)
    end

end
