class Api::AlbumsController < ApplicationController

  def index 
    if params[:user_id] != nil
      @albums = Album.all.select { |album| album.user_id = params[:user_id] }
    else
      @albums = Album.all
    end
    render "api/albums/index"
  end

  def show 
    @album = Album.find(params[:id])
    if @album
      render "api/albums/_show"
    else
      render json: ["no album with that id"]
    end
  end

  def create 
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    if @album.save    
      render "api/albums/_show"
    else
      render json: ["error"], status: 422
    end
  end 

  def destroy 
    @album = Album.find(params[:id])
    if @album.destroy
      render "api/albums/_show"
    else
      render json: ["album not destroyed"], status: 401
    end
  end
   
  def update 
    @album = Album.find(params[:id])
    debugger
    if @album.update(album_params)
      debugger
      render "api/albums/_show"
    else
      render json: ["album upated"]
    end
  end

  def album_params
    params.require(:album).permit(:name, :description, :user_id)
  end

end