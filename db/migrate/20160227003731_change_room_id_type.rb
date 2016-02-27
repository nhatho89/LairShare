class ChangeRoomIdType < ActiveRecord::Migration
  def change
    change_table :rooms do |t|
      t.rename :type_id, :room_type
    end
    change_column :rooms, :room_type, :string
  end
end
