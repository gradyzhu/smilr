class Api::PhotosController < ApplicationController

  def index 
    @photos = Photo.all
    render "api/photos/index"
  end

  def show 
    @photo = Photo.find(params[:id])
    render "api/photos/show"
  end

  def create 
    @photo = Photo.new(photo_params)
    if @photo.save
      render "api/photos/show"
    else
      render json: ["error"], status 422
    end
  end 

  def destroy 
    @photo = Photo.find(params[:id])
    if @photo.destroy
      render json: ["photo destroyed"]
    else
      render json: ["photo not destroyed"]
    end
  end
  
  
  def photo_params
    params.require(:photo).permit(:title, :description, :album_id, :date_taken)
end