class AddPhotoTagsUniqueness < ActiveRecord::Migration[5.2]
  def change
    add_index :photo_tags, [:photo_id, :tag_id], unique: true
  end
end
