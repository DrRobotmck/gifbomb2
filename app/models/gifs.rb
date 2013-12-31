class Gifs < ActiveRecord::Base
	validate :gif_url, presence: true
end