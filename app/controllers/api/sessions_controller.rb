class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username], 
      params[:user][:password])
    if user
      login(@user)
      render "api/users/users"
    else
      render json: ["Invalid login credentials"], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render 
    else
      render json: ["Nobody Logged In"], status: 404
  end

end
