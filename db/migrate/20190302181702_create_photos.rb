class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.integer :album_id, null: false
      t.string :title
      t.text :description
      t.datetime :date_taken
      t.timestamps
    end

    add_index :photos, :user_id, unique: true
    add_index :photos, :album_id
  end
end
