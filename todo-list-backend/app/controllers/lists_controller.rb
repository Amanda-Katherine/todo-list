class ListsController < ApplicationController

  def index
    # options = {
    #    include: [:todos]
    #  }
    # render({json: List.all, include: [:todos]})
    # render json: List.all, include: [todos: {only: [:content]}], except: [:created_at, :updated_at]
    render json: ListSerializer.new(List.all)
    # render json: ListSerializer.new(List.all, options)
  end

  def create
    list = List.create(list_params)
    render json: ListSerializer.new(list)
  end

  private

  def list_params
    params.require(:list).permit(:name)
  end


end
