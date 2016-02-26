class AddMainPicAndDescriptionToRoom < ActiveRecord::Migration
  def change
    add_column :rooms, :description, :string
    add_column :rooms, :primary_photo_url, :string
    add_column :rooms, :max_sleep_num, :integer
  end
end
