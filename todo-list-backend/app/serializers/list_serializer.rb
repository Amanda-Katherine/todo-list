class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  attribute :todos do |list|
    TodoSerializer.new(list.todos).as_json["data"]
  end
  # has_many :todos
end
