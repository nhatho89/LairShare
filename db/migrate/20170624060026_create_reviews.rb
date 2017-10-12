class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :room_id, null: false
      t.integer :rating, null: false
      
      t.timestamps null: false
    end
  end
end
