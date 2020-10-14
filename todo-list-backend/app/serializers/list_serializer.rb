class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  # attribute :todos do |t|
  #   TodoSerializer.new(t.todos).as_json["data"]
  # end
  has_many :todos
end
