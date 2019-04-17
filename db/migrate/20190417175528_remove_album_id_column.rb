class RemoveAlbumIdColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :photos, :album_id
  end
end
