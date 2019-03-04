# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  # user = User.create!({username: "", email: "", password: ""})
  tony = User.create!(username: "tony", email: "tony@gmail.com", password: "password")
  juice = User.create!(username: "juice", email: "stephens@gmail.com", password: "password")
  jason = User.create!(username: "jason", email: "jacegamer@gmail.com", password: "password")

  # photo = Photo.create!({user_id: , title: "", description: "", album_id: , date_taken: ""})
  photo1 = Photo.create!(user_id: juice.id, title: "skate1", description: "fence")
  photo2 = Photo.create!(user_id: juice.id, title: "skate2", description: "skating")
  photo3 = Photo.create!(user_id: juice.id, title: "skate3", description: "odd angle")
  photo4 = Photo.create!(user_id: juice.id, title: "skate4", description: "fuzzy")
  photo5 = Photo.create!(user_id: juice.id, title: "skate5", description: "flying")
  photo6 = Photo.create!(user_id: jason.id, title: "sf1", description: "bridge")
  photo7 = Photo.create!(user_id: jason.id, title: "sf2", description: "gordos")
  photo8 = Photo.create!(user_id: jason.id, title: "sf3", description: "lady")

  # attach url to photos
  photo1.image.attach(io: File.open("/Users/grady/Desktop/assets/juice_photos/austin-ban-712-unsplash.jpg"), filename: "austin-ban-712-unsplash.jpg")
  photo2.image.attach(io: File.open("/Users/grady/Desktop/assets/juice_photos/charlotte-butcher-345900-unsplash.jpg"), filename: "charlotte-butcher-345900-unsplash.jpg")
  photo3.image.attach(io: File.open("/Users/grady/Desktop/assets/juice_photos/daan-stoof-1217441-unsplash.jpg"), filename: "daan-stoof-1217441-unsplash.jpg")
  photo4.image.attach(io: File.open("/Users/grady/Desktop/assets/juice_photos/karol-kaczorek-753195-unsplash.jpg"), filename: "karol-kaczorek-753195-unsplash")
  photo5.image.attach(io: File.open("/Users/grady/Desktop/assets/juice_photos/liene-geidane-61048-unsplash.jpg"), filename: "gordo")
  photo6.image.attach(io: File.open("/Users/grady/Desktop/assets/jason_photos/sf/bridge.jpg"), filename: "bridge.jpg")
  photo7.image.attach(io: File.open("/Users/grady/Desktop/assets/jason_photos/sf/lady.jpg"), filename: "lady.jpg")
  photo8.image.attach(io: File.open("/Users/grady/Desktop/assets/jason_photos/sf/sf.jpg"), filename: "sf.jpg")
end
