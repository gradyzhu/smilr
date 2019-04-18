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
  Album.destroy_all
  AlbumPhoto.destroy_all

  josh = User.create!(username: "josh", email: "josh@gmail.com", password: "password")
  juice = User.create!(username: "juice", email: "stephens@gmail.com", password: "password")
  tony = User.create!(username: "tony", email: "peredo@gmail.com", password: "password")
  lisa = User.create!(username: "lisa", email: "simpson@gmail.com", password: "password")
  nicole = User.create!(username: "nicole", email: "wong@gmail.com", password: "password")

  # photo = Photo.create!({user_id: , title: "", description: "", album_id: , date_taken: ""})
  josh_photo_1 = Photo.create!(user_id: josh.id, title: "josh_photo_1", description: "description")
  # josh_photo_2 = Photo.create!(user_id: josh.id, title: "josh_photo_2", description: "description")
  # josh_photo_3 = Photo.create!(user_id: josh.id, title: "josh_photo_3", description: "description")
  # josh_photo_4 = Photo.create!(user_id: josh.id, title: "josh_photo_4", description: "description")
  # josh_photo_5 = Photo.create!(user_id: josh.id, title: "josh_photo_5", description: "description")
  # josh_photo_6 = Photo.create!(user_id: josh.id, title: "josh_photo_6", description: "description")
  # josh_photo_7 = Photo.create!(user_id: josh.id, title: "josh_photo_7", description: "description")
  # josh_photo_8 = Photo.create!(user_id: josh.id, title: "josh_photo_8", description: "description")

  juice_photo_1 = Photo.create!(user_id: juice.id, title: "juice_photo_1", description: "description")
  juice_photo_2 = Photo.create!(user_id: juice.id, title: "juice_photo_2", description: "description")
  juice_photo_3 = Photo.create!(user_id: juice.id, title: "juice_photo_3", description: "description")
  juice_photo_4 = Photo.create!(user_id: juice.id, title: "juice_photo_4", description: "description")
  juice_photo_5 = Photo.create!(user_id: juice.id, title: "juice_photo_5", description: "description")
  juice_photo_6 = Photo.create!(user_id: juice.id, title: "juice_photo_6", description: "description")
  juice_photo_7 = Photo.create!(user_id: juice.id, title: "juice_photo_7", description: "description")

  tony_photo_1 = Photo.create!(user_id: tony.id, title: "tony_photo_1", description: "description")
  # tony_photo_2 = Photo.create!(user_id: tony.id, title: "tony_photo_2", description: "description")
  # tony_photo_3 = Photo.create!(user_id: tony.id, title: "tony_photo_3", description: "description")
  # tony_photo_4 = Photo.create!(user_id: tony.id, title: "tony_photo_4", description: "description")
  # tony_photo_5 = Photo.create!(user_id: tony.id, title: "tony_photo_5", description: "description")
  # tony_photo_6 = Photo.create!(user_id: tony.id, title: "tony_photo_6", description: "description")
  # tony_photo_7 = Photo.create!(user_id: tony.id, title: "tony_photo_7", description: "description")
  # tony_photo_8 = Photo.create!(user_id: tony.id, title: "tony_photo_8", description: "description")
  # tony_photo_9 = Photo.create!(user_id: tony.id, title: "tony_photo_9", description: "description")
  # tony_photo_10 = Photo.create!(user_id: tony.id, title: "tony_photo_10", description: "description")
  # tony_photo_11 = Photo.create!(user_id: tony.id, title: "tony_photo_11", description: "description")

  lisa_photo_1 = Photo.create!(user_id: lisa.id, title: "lisa_photo_1", description: "description")
  lisa_photo_2 = Photo.create!(user_id: lisa.id, title: "lisa_photo_2", description: "description")
  lisa_photo_3 = Photo.create!(user_id: lisa.id, title: "lisa_photo_3", description: "description")
  lisa_photo_4 = Photo.create!(user_id: lisa.id, title: "lisa_photo_4", description: "description")
  lisa_photo_5 = Photo.create!(user_id: lisa.id, title: "lisa_photo_5", description: "description")
  lisa_photo_6 = Photo.create!(user_id: lisa.id, title: "lisa_photo_6", description: "description")

  nicole_photo_1 = Photo.create!(user_id: nicole.id, title: "nicole_photo_1", description: "description")
  # nicole_photo_2 = Photo.create!(user_id: nicole.id, title: "nicole_photo_2", description: "description")
  # nicole_photo_3 = Photo.create!(user_id: nicole.id, title: "nicole_photo_3", description: "description")
  # nicole_photo_4 = Photo.create!(user_id: nicole.id, title: "nicole_photo_4", description: "description")
  # nicole_photo_5 = Photo.create!(user_id: nicole.id, title: "nicole_photo_5", description: "description")
  # nicole_photo_6 = Photo.create!(user_id: nicole.id, title: "nicole_photo_6", description: "description")
  # nicole_photo_7 = Photo.create!(user_id: nicole.id, title: "nicole_photo_7", description: "description")
  # nicole_photo_8 = Photo.create!(user_id: nicole.id, title: "nicole_photo_8", description: "description")
  # nicole_photo_9 = Photo.create!(user_id: nicole.id, title: "nicole_photo_9", description: "description")
  # nicole_photo_10 = Photo.create!(user_id: nicole.id, title: "nicole_photo_10", description: "description")
  # nicole_photo_11 = Photo.create!(user_id: nicole.id, title: "nicole_photo_11", description: "description")
  # nicole_photo_12 = Photo.create!(user_id: nicole.id, title: "nicole_photo_12", description: "description")

  # photoname.image.attach(io: open(""), filename: "")
  # attach url to photos
  josh_photo_1.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1279580-unsplash.jpg"), filename: "josh-hild-1279580-unsplash.jpg")
  # josh_photo_2.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1289167-unsplash.jpg"), filename: "josh-hild-1289167-unsplash.jpg")
  # josh_photo_3.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1289181-unsplash.jpg"), filename: "josh-hild-1289181-unsplash.jpg")
  # josh_photo_4.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1313362-unsplash.jpg"), filename: "josh-hild-1313362-unsplash.jpg")
  # josh_photo_5.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1313363-unsplash.jpg"), filename: "josh-hild-1313363-unsplash.jpg")
  # josh_photo_6.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1330241-unsplash.jpg"), filename: "josh-hild-1330241-unsplash.jpg")
  # josh_photo_7.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1336479-unsplash.jpg"), filename: "josh-hild-1336479-unsplash.jpg")
  # josh_photo_8.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1362788-unsplash.jpg"), filename: "josh-hild-1362788-unsplash.jpg")
  
  juice_photo_1.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-774717-unsplash.jpg"), filename: "amogh-manjunath-774717-unsplash.jpg")
  juice_photo_2.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-772472-unsplash.jpg"), filename: "amogh-manjunath-772472-unsplash.jpg")
  juice_photo_3.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-772463-unsplash.jpg"), filename: "amogh-manjunath-772463-unsplash.jpg")
  juice_photo_4.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-772475-unsplash.jpg"), filename: "amogh-manjunath-772475-unsplash.jpg")
  juice_photo_5.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-773461-unsplash.jpg"), filename: "amogh-manjunath-773461-unsplash.jpg")
  juice_photo_6.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-775985-unsplash.jpg"), filename: "amogh-manjunath-775985-unsplash.jpg")
  juice_photo_7.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-799398-unsplash.jpg"), filename: "amogh-manjunath-799398-unsplash.jpg")
 
  tony_photo_1.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-48063-unsplash.jpg"), filename: "roberto-nickson-48063-unsplash.jpg")
  # tony_photo_2.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-495794-unsplash.jpg"), filename: "roberto-nickson-495794-unsplash.jpg")
  # tony_photo_3.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-706404-unsplash.jpg"), filename: "roberto-nickson-706404-unsplash.jpg")
  # tony_photo_4.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-706405-unsplash.jpg"), filename: "roberto-nickson-706405-unsplash.jpg")
  # tony_photo_5.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1083409-unsplash.jpg"), filename: "roberto-nickson-1083409-unsplash.jpg")
  # tony_photo_6.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1090353-unsplash.jpg"), filename: "roberto-nickson-1090353-unsplash.jpg")
  # tony_photo_7.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1266859-unsplash.jpg"), filename: "roberto-nickson-1266859-unsplash.jpg")
  # tony_photo_8.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1293509-unsplash.jpg"), filename: "roberto-nickson-1293509-unsplash.jpg")
  # tony_photo_9.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1348835-unsplash.jpg"), filename: "roberto-nickson-1348835-unsplash.jpg")
  # tony_photo_10.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1385598-unsplash.jpg"), filename: "roberto-nickson-1385598-unsplash.jpg")
  # tony_photo_11.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1413539-unsplash.jpg"), filename: "roberto-nickson-1413539-unsplash.jpg")

  lisa_photo_1.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-166955-unsplash.jpg"), filename: "angel-jimenez-166955-unsplash.jpg")
  lisa_photo_2.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-168185-unsplash.jpg"), filename: "angel-jimenez-168185-unsplash.jpg")
  lisa_photo_3.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-168280-unsplash.jpg"), filename: "angel-jimenez-168280-unsplash.jpg")
  lisa_photo_4.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-178856-unsplash.jpg"), filename: "angel-jimenez-178856-unsplash.jpg")
  lisa_photo_5.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-181097-unsplash.jpg"), filename: "angel-jimenez-181097-unsplash.jpg")
  lisa_photo_6.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-204076-unsplash.jpg"), filename: "angel-jimenez-204076-unsplash.jpg")

  nicole_photo_1.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-248781-unsplash.jpg"), filename: "oladimeji-odunsi-248781-unsplash.jpg")
  # nicole_photo_2.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-280940-unsplash.jpg"), filename: "oladimeji-odunsi-280940-unsplash.jpg")
  # nicole_photo_3.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-297329-unsplash.jpg"), filename: "oladimeji-odunsi-297329-unsplash.jpg")
  # nicole_photo_4.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-297333-unsplash.jpg"), filename: "oladimeji-odunsi-297333-unsplash.jpg")
  # nicole_photo_5.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-306172-unsplash.jpg"), filename: "oladimeji-odunsi-306172-unsplash.jpg")
  # nicole_photo_6.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-307743-unsplash.jpg"), filename: "oladimeji-odunsi-307743-unsplash.jpg")
  # nicole_photo_7.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-367505-unsplash.jpg"), filename: "oladimeji-odunsi-367505-unsplash.jpg")
  # nicole_photo_8.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-415606-unsplash.jpg"), filename: "oladimeji-odunsi-415606-unsplash.jpg")
  # nicole_photo_9.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-415618-unsplash.jpg"), filename: "oladimeji-odunsi-415618-unsplash.jpg")
  # nicole_photo_10.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-558609-unsplash.jpg"), filename: "oladimeji-odunsi-558609-unsplash.jpg")
  # nicole_photo_11.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-600457-unsplash.jpg"), filename: "oladimeji-odunsi-600457-unsplash.jpg")
  # nicole_photo_12.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-1335501-unsplash.jpg"), filename: "oladimeji-odunsi-1335501-unsplash.jpg")

  juice_album_1 = Album.create(user_id: juice.id, name: "juice_album_1", description: "juice's awesome album 1 description")
  juice_album_2 = Album.create(user_id: juice.id, name: "juice_album_2", description: "juice's awesome album 2 description")
  juice_album_3 = Album.create(user_id: juice.id, name: "juice_album_3", description: "juice's awesome album 3 description")
  juice_album_4 = Album.create(user_id: juice.id, name: "juice_album_4", description: "juice's awesome album 4 description")

  lisa_album_1 = Album.create(user_id: lisa.id, name: "lisa_album_1", description: "lisa's awesome album 1 description")
  lisa_album_2 = Album.create(user_id: lisa.id, name: "lisa_album_2", description: "lisa's awesome album 2 description")
  
  # josh_album_1 = Album.create(user_id: josh.id, name: "josh_album_1", description: "josh's awesome album 1 description")
  # josh_album_2 = Album.create(user_id: josh.id, name: "josh_album_2", description: "josh's awesome album 2 description")


  album_photo_1 = AlbumPhoto.create!(photo_id: juice_photo_1.id, album_id: juice_album_1.id)
  album_photo_2 = AlbumPhoto.create!(photo_id: juice_photo_2.id, album_id: juice_album_1.id)
  album_photo_3 = AlbumPhoto.create!(photo_id: juice_photo_3.id, album_id: juice_album_1.id)
  album_photo_4 = AlbumPhoto.create!(photo_id: juice_photo_4.id, album_id: juice_album_1.id)
  album_photo_5 = AlbumPhoto.create!(photo_id: juice_photo_5.id, album_id: juice_album_2.id)
  album_photo_6 = AlbumPhoto.create!(photo_id: juice_photo_6.id, album_id: juice_album_2.id)
  album_photo_7 = AlbumPhoto.create!(photo_id: juice_photo_7.id, album_id: juice_album_2.id)

  album_photo_8 = AlbumPhoto.create!(photo_id: lisa_photo_1.id, album_id: lisa_album_1.id)
  album_photo_9 = AlbumPhoto.create!(photo_id: lisa_photo_2.id, album_id: lisa_album_1.id)
  album_photo_10 = AlbumPhoto.create!(photo_id: lisa_photo_3.id, album_id: lisa_album_1.id)
  album_photo_11 = AlbumPhoto.create!(photo_id: lisa_photo_4.id, album_id: lisa_album_2.id)
  album_photo_12 = AlbumPhoto.create!(photo_id: lisa_photo_5.id, album_id: lisa_album_2.id)
  album_photo_13 = AlbumPhoto.create!(photo_id: lisa_photo_6.id, album_id: lisa_album_2.id)
end
