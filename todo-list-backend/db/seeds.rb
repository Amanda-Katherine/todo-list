# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

List.create(name: "Health")
List.create(name: "Chores")
List.create(name: "Errands")

Todo.create(content: "Drink Water", list_id: 1)

Todo.create(content: "Go on Walk", list_id: 1)

Todo.create(content: "Vacuum", list_id: 2)

Todo.create(content: "Do Dishes", list_id: 2)

Todo.create(content: "Make Bed", list_id: 2)

Todo.create(content: "Grocery Shop", list_id: 3)
