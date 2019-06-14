class Api::PhotosController < ApplicationController

  def index   
    if params[:user_id] != nil
      is_initial_load = params[:count].to_i == 0
      initial_count = 10
      batch_count = 5
      offset_count = initial_count - batch_count + params[:count].to_i * batch_count

      if is_initial_load
        @photos = Photo.where("user_id = #{params[:user_id]}")
        .order('created_at ASC')
        .limit(initial_count)
      else
        @photos = Photo.where("user_id = #{params[:user_id]}")
        .offset(offset_count)
        .order('created_at ASC')
        .limit(batch_count)
      end
    else
      is_initial_load = params[:count].to_i == 0
      initial_count = 20
      batch_count = 10
      offset_count = initial_count - batch_count + params[:count].to_i * batch_count

      if is_initial_load
        @photos = Photo.order('created_at ASC').limit(initial_count)
      else
        @photos = Photo.offset(offset_count)
        .order('created_at ASC')
        .limit(batch_count)
      end
    end

    render "api/photos/index"
  end

  def show 
    @photo = Photo.find(params[:id])
    if @photo
      render "api/photos/_show"
    else
      render json: ["no photo with that id"], status: 404
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
      render json: ["photo not updated"], status: 404
    end
  end

  def photo_params
    params.require(:photo).permit(:title, :description, :date_taken, :image, :id)
  end

end