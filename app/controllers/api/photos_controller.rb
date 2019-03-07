class Api::PhotosController < ApplicationController

  def index 
    if params[:user_id] != nil
      @photos = Photo.all.select { |photo| photo.user_id = params[:user_id] }
    else
      @photos = Photo.all
    end
    render "api/photos/index"
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
    params.require(:photo).permit(:title, :description, :album_id, :date_taken, :image, :id)
  end

end