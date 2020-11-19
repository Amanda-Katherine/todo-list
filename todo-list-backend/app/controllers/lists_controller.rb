class ListsController < ApplicationController

  def index
    # options = {
    #    include: [:todos]
    #  }
    # render({json: List.all, include: [:todos]})
    render json: List.all, include: [todos: {only: [:content]}], except: [:created_at, :updated_at]
    # render json: ListSerializer.new(List.all)
    # render json: ListSerializer.new(List.all, options)
  end

  def create
    list = List.new(list_params)
    if list.save
      # render json: ListSerializer.new(list)
      render json: list, include: [todos: {only: [:content]}], except: [:created_at, :updated_at]
    else
      render json: {message: list.errors.full_messages}
    end
  end

  def update
    list = List.find_by(id: params[:id])
    list.update(list_params)
    render json: list, include: [todos: {only: [:content]}], except: [:created_at, :updated_at]
  end

  def destroy
    list = List.find_by(id: params[:id])
    list.destroy
    render json: {message: "success"}
  end

  private

  def list_params
    params.require(:list).permit(:name)
  end


end
