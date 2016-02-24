class CreateRooms < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
      t.string :title, null: false
      t.integer :host_id, null: false
      t.integer :type_id, null: false
      t.float :price, null: false
      t.string :location, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps null: false
    end
  end
end
