class Api::AlbumsController < ApplicationController
  def index 
    if params[:user_id] != nil
      @albums = Album.includes(photos: [{image_attachment: :blob}, {comments: :user}, :user])
      .where("user_id = #{params[:user_id].to_i}")
    else
      render json: ["no albums"]
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
    @album = Album.new(
      name: params[:album][:name], 
      description: params[:album][:description], 
      user_id: params[:album][:user_id])
      
    photo_ids = params[:album][:photo_ids]

    if @album.save! && photo_ids && !photo_ids.empty?
      photo_ids.each do |id|
        album_photo_params = {
          album_id: @album.id,
          photo_id: id.to_i
        }
        AlbumPhoto.create(album_photo_params)
      end

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
    if @album.update(album_params)
      render "api/albums/_show"
    else
      render json: ["album updated"]
    end
  end

  def album_params
    params.require(:album).permit(:name, :description, :user_id, photo_ids: [])
  end

end