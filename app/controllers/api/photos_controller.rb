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
      render "api/photos/show"
    else
      render json: ["no photo that id"]
    end
  end

  def create 
    @photo = Photo.new(photo_params)

    if @photo.save    
      render "api/photos/show"
    else
      render json: ["error"], status: 422
    end
  end 

  def destroy 
    debugger
    @photo = Photo.find(params[:id])
    if @photo.destroy
      render "api/photos/show"
    else
      render json: ["photo not destroyed"], status: 401
    end
  end
   
  def update 
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
      render "api/photos/show"
    else
      render json: ["photo not updated"]
    end
  end

  def photo_params
    params.require(:photo).permit(:user_id, :title, :description, :album_id, :date_taken)
  end

end