class User < ActiveRecord::Base
	validate_uniqueness_of :email
	has_secure_password
end