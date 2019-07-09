class Api::TagsController < ApplicationController
  
  def index
    @tags = Tag.joins(:photo_tags).where("photo_tags.photo_id = #{params[:photo_id]}")
    render "api/tags/index"
  end

  def create
    @tag = Tag.new({name: tag_params[:name]});
    if @tag.save!
      photo_tag_params = {
        photo_id: tag_params[:photo_id],
        tag_id: @tag.id
      }
      @photo_tag = PhotoTag.new(photo_tag_params);
      if @photo_tag.save!
        render "api/tags/_show"
      end
    else
      render json: ['tag requires name'], status: 404
    end
  end

  def destroy 
    @tag = Tag.find(params[:id])
    if @tag.destroy
      render "api/photos/_show"
    else
      render json: ['tag not destroyed'], status: 404
    end
  end

  def tag_params
    params.require(:tag).permit(:name, :photo_id)
  end
end