class ChangeReservationStatusType < ActiveRecord::Migration
  def change
    remove_column :reservations, :status, :string
    add_column :reservations, :status, :integer
  end
end
