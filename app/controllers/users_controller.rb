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
	@user = User.new(user_params)
	binding.pry
	if @user.save
		render nothing: true, status: 201
	else
		render nothing: true, status: 500
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