# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

ActiveRecord::Base.transaction do
  User.destroy_all
  Photo.destroy_all

  josh = User.create!(username: "josh", email: "josh@gmail.com", password: "password")
  juice = User.create!(username: "juice", email: "stephens@gmail.com", password: "password")


  # photo = Photo.create!({user_id: , title: "", description: "", album_id: , date_taken: ""})
  josh_photo_1 = Photo.create!(user_id: josh.id, title: "josh_photo_1", description: "description")
  josh_photo_2 = Photo.create!(user_id: josh.id, title: "josh_photo_2", description: "description")
  josh_photo_3 = Photo.create!(user_id: josh.id, title: "josh_photo_3", description: "description")
  josh_photo_4 = Photo.create!(user_id: josh.id, title: "josh_photo_4", description: "description")
  josh_photo_5 = Photo.create!(user_id: josh.id, title: "josh_photo_5", description: "description")
  josh_photo_6 = Photo.create!(user_id: josh.id, title: "josh_photo_6", description: "description")
  josh_photo_7 = Photo.create!(user_id: josh.id, title: "josh_photo_7", description: "description")
  josh_photo_8 = Photo.create!(user_id: josh.id, title: "josh_photo_8", description: "description")

  juice_photo_1 = Photo.create!(user_id: juice.id, title: "juice_photo_1", description: "description")

  # photoname.image.attach(io: open(""), filename: "")
  # attach url to photos
  josh_photo_1.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1279580-unsplash.jpg"), filename: "josh-hild-1279580-unsplash.jpg")
  josh_photo_2.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1289167-unsplash.jpg"), filename: "josh-hild-1289167-unsplash.jpg")
  josh_photo_3.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1289181-unsplash.jpg"), filename: "josh-hild-1289181-unsplash.jpg")
  josh_photo_4.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1313362-unsplash.jpg"), filename: "josh-hild-1313362-unsplash.jpg")
  josh_photo_5.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1313363-unsplash.jpg"), filename: "josh-hild-1313363-unsplash.jpg")
  josh_photo_6.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1330241-unsplash.jpg"), filename: "josh-hild-1330241-unsplash.jpg")
  josh_photo_7.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1336479-unsplash.jpg"), filename: "josh-hild-1336479-unsplash.jpg")
  josh_photo_8.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1362788-unsplash.jpg"), filename: "josh-hild-1362788-unsplash.jpg")
  
  juice_photo_1.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-774717-unsplash.jpg"), filename: "amogh-manjunath-774717-unsplash.jpg")
end
