class SessionsController < ApplicationController

def new
end

def create
	user = User.find_by(email: params[:email])

	if user && user.authenticate(params[:password])
		session[:user_id] = user.id
		render json: session[:user_id], status: 201 
	else
		redirect
	end
end

end
