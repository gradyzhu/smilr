class AddWidthHeightConstraints < ActiveRecord::Migration[5.2]
  change_column_null :photos, :width, false
  change_column_null :photos, :height, false
end
