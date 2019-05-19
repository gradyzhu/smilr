class Api::CommentsController < ApplicationController
  def index 
    @comments = Comment.all.select { |comment| comment.photo_id = params[:photo_id]}
  end

  def create
    @comment = new Comment(comment_params);
    if @comment.save
      render "api/photos/_show"
    else
      render json: ["comment could not be created"], status: 404
    end
  end

  def destroy
    @comment = Comment.find(params[:id]);
    photo_id = @comment.photo_id;

    @photo = Photo.find(params[:photo_id]);
    if @comment.destroy
      render "api/photos/_show"
    else
      render json: ["comment could not be destroyed"]. status: 404
    end
  end

  private 

  def comment_params
    params.require(:comment).permit(:body)
  end
end
