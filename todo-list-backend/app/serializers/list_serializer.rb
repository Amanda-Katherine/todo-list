class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :todos
end
