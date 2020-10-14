class ListsController < ApplicationController

  def index
    options = {
       include: [:todos]
     }
    # render({json: List.all, include: [:todos]})
    # render json: List.all, include: [todos: {only: [:content]}], except: [:created_at, :updated_at]

    render json: ListSerializer.new(List.all, options)
  end


end
