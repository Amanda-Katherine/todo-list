class TodosController < ApplicationController

  def create
    todo = Todo.create(todo_params)
    render json: TodoSerializer.new(todo)
  end

  private

  def todo_params
    params.require(:todo).permit(:content, :list_id)
  end

end
