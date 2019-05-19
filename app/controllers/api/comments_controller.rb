class Api::CommentsController < ApplicationController
  def index 
    @comments = Comment.all.select { |comment| comment.photo_id = params[:photo_id]}
    render "api/comments/index"
  end

  def create
    @comment = Comment.new(comment_params);
    if @comment.save!
      render "api/comments/_show"
    else
      render json: ["comment could not be created"], status: 404
    end
  end

  def destroy
    @comment = Comment.find(params[:id]);
    if @comment.destroy
      render "api/comments/_show"
    else
      render json: ["comment could not be destroyed"], status: 404
    end
  end

  private 

  def comment_params
    params.require(:comment).permit(:body, :user_id, :photo_id)
  end
end
