class UpdatePhotos < ActiveRecord::Migration[5.2]
  def change
    change_column :photos, :album_id, :integer, :null => true
  end
end
