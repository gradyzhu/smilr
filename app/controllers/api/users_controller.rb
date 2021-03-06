class Api::UsersController < ApplicationController

  def create 
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: ["Password is too short (min. is 6 characters)"], status: 422
    end
  end

  def show
    @user = User.includes(photos: [{image_attachment: :blob}])
    .find_by(id: params[:id])
    render "api/users/show"
  end

  private

  def user_params 
    params.require(:user).permit(:username, :password, :email) 
  end

end
