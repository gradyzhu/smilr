class UpdateAlbums < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :album_id
  end
end
