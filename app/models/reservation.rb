class Reservation < ActiveRecord::Base
  belongs_to :room

  belongs_to :guest,
    foreign_key: :guest_id,
    primary_key: :id,
    class_name: 'User'

  # has_one :host,
  #   through: :room,
  #   source: :host


  # has_one :host_profile,
  #   through: :room,
  #   source: :host_profile
  # has_one :room_primary_pic,
  #   through: :room,
  #   source: :primary_pic




  validates :room_id, :requester_id, :guest_num, presence: true
  # validate :start_date_before_end_date
  # validate :requested_period_available
end
