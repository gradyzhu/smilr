# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  # user = User.create!({username: "", email: "", password: ""})
  user1 = User.create!({username: "demo_user", email: "demo_user@gmail.com", password: "password"})
  user2 = User.create!({username: "tony_pepperoni"}, email: "tony@gmail.com", password: "password")
  user3 = User.create!({username: "giuseppe_stephens"}, email: "guiseppe@gmail.com", password: "password")
  user4 = User.create!({username: "jason"}, email: "jacegamer@gmail.com", password: "password")

  # photo = Photo.create!({user_id: , title: "", description: "", album_id: , date_taken: ""})
  photo1 = Photo.create!({user_id: 2, title: "myfavoritestreet", description: "dopeski"})
  photo2 = Photo.create!({user_id: 3, title: "gordos", description: "delicious"})
  photo3 = Photo.create!({user_id: 3, title: "sf", description: "beautiful"})

  # attach url to photos
  photo1.image.attach(io: File.open("/Users/grady/Desktop/gordos.jpeg"), filename: "gordo")
  photo2.image.attach(io: File.open("/Users/grady/Desktop/sf.jpeg"), filename: "sf")
  photo3.image.attach(io: File.open("/Users/grady/Desktop/gordos.jpeg"), filename: "gordos")
end
