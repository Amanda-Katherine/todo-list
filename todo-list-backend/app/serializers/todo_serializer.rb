class TodoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :content
  belongs_to :list
end
