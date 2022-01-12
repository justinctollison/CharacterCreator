class CharactersController < ApplicationController

    #instance methods for the controller that is connected to the routes. Each method does something different based on the route

    #grabs all characters in the database, renders them in json so that the front-end can interpet it
    def index
        characters = Character.all
        render json: characters
    end

    #uses the current user and then stores the current user's information into the nested data of the character through associations.
    def create
        # character = @current_user.characters.build(character_params)
        character = Character.new(character_params)
        character.user_id = @current_user.id
        if character.save
            render json: character, status: :created
        else
            render json: { errors: character.errors }
        end
    end

    def alpha
        characters = Character.alpha
        render json: characters
    end

    #shows specific character based on id, ex: character/:id
    def show
        character = Character.find(params[:id])
        render json: character
    end

    #deletes specific character from the database based on id.
    def destroy
        character = Character.find(params[:id])
        character.delete
        head :no_content
    end

    #updates specific character based on id, uses the .update method and character_params parameter to change the data in the database. If searched character id does not exit
    #then renders an error. ex: trying to edit characters/8 even through characters/8 was deleted. New characters do not take up a deleted id in the database
    def update
        character = Character.find(params[:id])
        if character && character.user.id == @current_user.id
            if character.update(character_params)
                render json: character
            else
                render json: { errors: character.errors }
            end
          else
            render json: { errors: "Character not found" }, status: :not_found
          end
    end

    private

    #strong params to allow the creation of a character object in the database, permits the use of the parameters. TODO: more stuff with likes feature.
    def character_params
        params.require(:character).permit(:name, :character_class, :race, :image_url, :description, :history, :universe_genre_game, :likes,)
    end



end
