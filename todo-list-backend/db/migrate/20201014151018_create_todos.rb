class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :content
      t.references :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
