class TodosController < ApplicationController

  def create
    todo = Todo.new(todo_params)
    if todo.save
      render json: TodoSerializer.new(todo)
    else
        render json: {message: todo.errors.full_messages}
      end
  end

  private

  def todo_params
    params.require(:todo).permit(:content, :list_id)
  end

end
