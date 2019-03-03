class Api::PhotosController < ApplicationController

  def index 
    @photos = Photo.all
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
    debugger
    if @photo.save
      debugger
      render "api/photos/show"
    else
      debugger
      render json: ["error"], status: 422
    end
  end 

  def destroy 
    @photo = Photo.find(params[:id])
    if @photo.destroy
      render "api/photos/show"
    else
      render json: ["photo not destroyed"]
    end
  end
   
  def update 
    @photo = Photo.find(params[:id])
    debugger
    if @photo.update(photo_params)
      debugger
      render "api/photos/show"
    else
      debugger
      render json: ["photo not updated"]
    end
  end

  def photo_params
    debugger
    params.require(:photo).permit(:user_id, :title, :description, :album_id, :date_taken)
  end

end