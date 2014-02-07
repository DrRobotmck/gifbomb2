class UsersController < ApplicationController

before_action :set_user, :authorized!, :authenticated!, except: [:new, :create]

def index
	@user = User.new
end

def show
end

def new
end

def create
	if User.exists?(email: user_params[:email])
		render json: user_params, status: 201
		binding.pry
	else
		@user = User.new(user_params)
		if @user.save
			session[:user_id] = @user.id
			render json: @user.id, status: 201
		else
			render nothing: true, status: 500
		end
	end
end

def edit
end
def update
end
def destroy
end

private
def user_params
	params.require(:user).permit(:email,:password,:password_confirmation)
end
def logged_in?
	session[:user_id].present?
end
def authenticated!
	unless logged_in?
		redirect_to root_path
	end
end


end