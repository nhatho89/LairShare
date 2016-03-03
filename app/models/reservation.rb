class Reservation < ActiveRecord::Base
  belongs_to :room

  has_one :host,
  through: :room,
  source: :user

  belongs_to :guest,
    foreign_key: :guest_id,
    primary_key: :id,
    class_name: 'User'

  has_one :host,
    through: :room,
    source: :host


  # has_one :host_profile,
  #   through: :room,
  #   source: :host_profile

  has_one :room_primary_pic,
    through: :room,
    source: :primary_pic


  STATUS = {
    0 => "PENDING",
    1 => "CONFIRMED",
    2 => "DENIED",
    3 => "CANCELED BY HOST",
    4 => "CANCELED BY GUEST",
    5 => "NOT AVAILABLE"
  }




  validates :room_id, :guest_id, :guest_num, presence: true
  validate :start_date_before_end_date
  validate :requested_period_available



  def self.unavailable_room_ids(start_date, end_date)
    return [] if (start_date == "" || end_date == "")
    result = Reservation.where('(start_date < ? AND end_date > ?)',
                              end_date, start_date)
                        # .where(status: [0, 1, 5])
                        # .where(status: [1, 5])
    result.map(&:room_id).uniq
  end

  def self.user_trips_with_details(user)
    fail
    user.trip_reservations.includes(:room, :room_primary_pic).where("reservations.status != ?", 5)
  end

  # def self.isAvailable(query_params)
  #
  # end

  def overlapping_requests
    # debugger
    Reservation
    .where("(:id IS NULL) OR (id != :id)", id: self.id)
    .where(room_id: self.room_id)
    .where('(start_date < ? AND end_date > ?)', end_date, start_date)
  end

  def overlapping_unavailable_requests
    overlapping_requests.where(status: 5)
  end

  def overlapping_confirmed_reservations
    overlapping_requests.where(status: 1)
  end

  def overlapping_pending_reservations
    overlapping_requests.where(status: 0)
  end

  # def overlapping_unbookable_period
  #   overlapping_requests.where(status: [1, 5])
  # end

  # including pending
  def overlapping_unbookable_period
    overlapping_requests.where(status: [0, 1, 5])
  end

  def query_availability
    overlapping_unbookable_period.empty? && self.guest_num <= self.room.max_guest_num
  end



  private

  def assign_pending_status
    self.status ||= 0
  end


  def start_date_before_end_date
    return unless start_date && end_date
    errors[:start_date] << "must come before end date" if start_date > end_date
  end

  def requested_period_available
    unless overlapping_unbookable_period.empty?
      errors[:base] << "Requested date is not available"
    end
  end
end
