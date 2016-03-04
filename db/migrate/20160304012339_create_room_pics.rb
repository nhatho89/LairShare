class CreateRoomPics < ActiveRecord::Migration
  def change
    create_table :room_pics do |t|
      t.integer :room_id, null: false
      t.string :pic_url, null: false

      t.timestamps null: false
    end
  end
end
