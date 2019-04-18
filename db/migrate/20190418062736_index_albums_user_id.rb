class IndexAlbumsUserId < ActiveRecord::Migration[5.2]
  def change
    add_index :albums, :user_id
  end
end
