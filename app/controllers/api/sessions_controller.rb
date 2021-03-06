class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username], 
      params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid login credentials", "Username required.", "Password required"], status: 401
    end
  end

  def destroy
    if current_user
      logout
    else
      render json: ["Nobody Logged In"], status: 404
    end
  end

end
