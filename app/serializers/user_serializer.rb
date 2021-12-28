class UserSerializer < ActiveModel::Serializer
  #serializer for attributes to be allowed to be displayed on the front-end in JSON, allows them to be grabbed from the back-end. We want name and username to be available
  # BUT NOT password
  attributes :id, :username
end
