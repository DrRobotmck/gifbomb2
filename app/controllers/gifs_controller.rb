class GifsController < ApplicationController
	before_action :set_gif, only: [:show, :edit, :update, :destroy]

	def index
		@gifs = Gif.all
		render json: @gifs
	end
	def show
	end
	def create
		@gif = Gif.new(gif_params)
		if @gif.save
			render json: @gif
		else
			render json: @gif.errors, status: :unprocessable_entity
		end
	end
	def update
		if @gif.update(gif_params)
			head :no_content
		else
			render json: @gif.errors, status: :unprocessable_entity
		end
	end

	def destroy
		@gif.destroy
		head :no_content
	end

private

def set_gif
	@gif = Gif.find(params[:id])
end
def gif_params
	params.require(:gif)
end

end