class DefaultUserProfilePic < ActiveRecord::Migration
  def change
    change_column_default( :users, :profile_pic, '/assets/user-human.png' )
  end
end
