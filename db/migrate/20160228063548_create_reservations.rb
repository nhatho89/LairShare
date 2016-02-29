class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :room_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :guest_num, null: false
      t.integer :guest_id, null: false
      t.string :status, null: false
      t.text :message

      t.timestamps null: false
    end
  end
end
