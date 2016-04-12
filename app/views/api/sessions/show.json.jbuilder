if current_user
  json.username     current_user.username
  json.profile_pic    current_user.profile_pic
  json.id       current_user.id

else
  nil
end
