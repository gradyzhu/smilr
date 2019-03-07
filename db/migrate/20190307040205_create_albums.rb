class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.integer :user_id, null: false
      t.integer :album_id, null: false
      t.string :name, null: false 
      t.text :description
    end
  end
end
