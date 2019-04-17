class Api::PhotosController < ApplicationController

  def index 
    if params[:user_id] != nil
      @photos = Photo.all.select { |photo| photo.user_id = params[:user_id] }
      render "api/photos/index"
    else
      @photos = Photo.all
      @user = User.find_by(id: params[:user_id])
      render "api/photos/index"
    end
  end

  def show 
    @photo = Photo.find(params[:id])
    if @photo
      render "api/photos/_show"
    else
      render json: ["no photo that id"]
    end
  end

  def create 
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    if @photo.save    
      render "api/photos/_show"
    else
      render json: ["error"], status: 422
    end
  end 

  def destroy 
    @photo = Photo.find(params[:id])
    if @photo.destroy
      render "api/photos/_show"
    else
      render json: ["photo not destroyed"], status: 401
    end
  end
   
  def update 
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
      render "api/photos/_show"
    else
      render json: ["photo not updated"]
    end
  end

  def photo_params
    params.require(:photo).permit(:title, :description, :date_taken, :image, :id)
  end

end