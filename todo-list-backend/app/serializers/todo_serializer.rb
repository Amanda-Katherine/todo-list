class TodoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content
  # belongs_to :list
end
