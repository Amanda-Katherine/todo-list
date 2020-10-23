class TodoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :list_id
  # belongs_to :list
end
