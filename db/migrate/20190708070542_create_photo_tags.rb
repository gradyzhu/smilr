class CreatePhotoTags < ActiveRecord::Migration[5.2]
  def change
    create_table :photo_tags do |t|
      t.integer :photo_id, null: false
      t.integer :tag_id, null: false
    end

    add_index :photo_tags, :photo_id
    add_index :photo_tags, :tag_id
  end
end
