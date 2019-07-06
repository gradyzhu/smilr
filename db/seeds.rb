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
  josh_photo_1_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1279580-unsplash.jpg", :raise_on_failure => true)
  josh_photo_1 = Photo.create!(user_id: josh.id, title: "Brooklyn Bridge", 
    description: "The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City. It connects the boroughs of Manhattan and Brooklyn, spanning the East River.",
    width: josh_photo_1_size[0],
    height: josh_photo_1_size[1])

  josh_photo_2_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1289167-unsplash.jpg", :raise_on_failure => true)    
  josh_photo_2 = Photo.create!(user_id: josh.id, title: "New York", 
    description: "The City of New York, usually called either New York City (NYC) or simply New York (NY), is the most populous city in the United States.",
    width: josh_photo_2_size[0],
    height: josh_photo_2_size[1])

  josh_photo_3_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1289181-unsplash.jpg", :raise_on_failure => true)    
  josh_photo_3 = Photo.create!(user_id: josh.id, title: "Stunning Cityscape", 
    description: "Architecture is both the process and the product of planning, designing, and constructing buildings or any other structures.",
    width: josh_photo_3_size[0],
    height: josh_photo_3_size[1])

  josh_photo_4_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1313362-unsplash.jpg", :raise_on_failure => true)
  josh_photo_4= Photo.create!(user_id: josh.id, title: "A Ray of Light", 
    description: "I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.",
    width: josh_photo_4_size[0],
    height: josh_photo_4_size[1])

  josh_photo_5_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1313363-unsplash.jpg", :raise_on_failure => true)
  josh_photo_5 = Photo.create!(user_id: josh.id, title: "Bubble Girl", 
    description: "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character",
    width: josh_photo_5_size[0],
    height: josh_photo_5_size[1])

  josh_photo_6_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1330241-unsplash.jpg", :raise_on_failure => true)
  josh_photo_6 = Photo.create!(user_id: josh.id, title: "A Moment of Inspiration", 
    description: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
    width: josh_photo_6_size[0],
    height: josh_photo_6_size[1])

  josh_photo_7_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1336479-unsplash.jpg", :raise_on_failure => true)
  josh_photo_7 = Photo.create!(user_id: josh.id, title: "Yosemite National Park", 
    description: "On average, about 4 million people visit Yosemite each year, and most spend the majority of their time in the 7 square miles (18 km2) of Yosemite Valley.",
    width: josh_photo_7_size[0],
    height: josh_photo_7_size[1])

  josh_photo_8_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/josh_photos/josh-hild-1362788-unsplash.jpg", :raise_on_failure => true)
  josh_photo_8 = Photo.create!(user_id: josh.id, title: "Mariposa, California", 
    description: "Yosemite is one of the largest and least fragmented habitat blocks in the Sierra Nevada, and the park supports a diversity of plants and animals. The park has an elevation range from 2,127 to 13,
    114 feet (648 to 3,997 m) and contains five major vegetation zones: chaparral and oak woodland, lower montane forest, upper montane forest, subalpine zone, and alpine.",
    width: josh_photo_8_size[0],
    height: josh_photo_8_size[1])

    
  juice_photo_1_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-774717-unsplash.jpg", :raise_on_failure => true)
  juice_photo_1 = Photo.create!(user_id: juice.id, title: "juice_photo_1", description: "description", width: juice_photo_1_size[0], height: juice_photo_1_size[1])
  juice_photo_2_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-772472-unsplash.jpg", :raise_on_failure => true)
  juice_photo_2 = Photo.create!(user_id: juice.id, title: "juice_photo_2", description: "description", width: juice_photo_2_size[0], height: juice_photo_2_size[1])
  juice_photo_3_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-772463-unsplash.jpg", :raise_on_failure => true)
  juice_photo_3 = Photo.create!(user_id: juice.id, title: "juice_photo_3", description: "description", width: juice_photo_3_size[0], height: juice_photo_3_size[1])
  juice_photo_4_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-772475-unsplash.jpg", :raise_on_failure => true)
  juice_photo_4 = Photo.create!(user_id: juice.id, title: "juice_photo_4", description: "description", width: juice_photo_4_size[0], height: juice_photo_4_size[1])
  juice_photo_5_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-773461-unsplash.jpg", :raise_on_failure => true)
  juice_photo_5 = Photo.create!(user_id: juice.id, title: "juice_photo_5", description: "description", width: juice_photo_5_size[0], height: juice_photo_5_size[1])
  juice_photo_6_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-775985-unsplash.jpg", :raise_on_failure => true)
  juice_photo_6 = Photo.create!(user_id: juice.id, title: "juice_photo_6", description: "description", width: juice_photo_6_size[0], height: juice_photo_6_size[1])
  juice_photo_7_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-799398-unsplash.jpg", :raise_on_failure => true)
  juice_photo_7 = Photo.create!(user_id: juice.id, title: "juice_photo_7", description: "description", width: juice_photo_7_size[0], height: juice_photo_7_size[1])
  

  tony_photo_1_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-48063-unsplash.jpg", :raise_on_failure => true)
  tony_photo_1 = Photo.create!(user_id: tony.id, title: "tony_photo_1", description: "description", width: tony_photo_1_size[0], height: tony_photo_1_size[1])
  tony_photo_2_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-495794-unsplash.jpg", :raise_on_failure => true)
  tony_photo_2 = Photo.create!(user_id: tony.id, title: "tony_photo_2", description: "description", width: tony_photo_2_size[0], height: tony_photo_2_size[1])
  tony_photo_3_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-706404-unsplash.jpg", :raise_on_failure => true)
  tony_photo_3 = Photo.create!(user_id: tony.id, title: "tony_photo_3", description: "description", width: tony_photo_3_size[0], height: tony_photo_3_size[1])
  tony_photo_4_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-706405-unsplash.jpg", :raise_on_failure => true)
  tony_photo_4 = Photo.create!(user_id: tony.id, title: "tony_photo_4", description: "description", width: tony_photo_4_size[0], height: tony_photo_4_size[1])
  tony_photo_5_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1083409-unsplash.jpg", :raise_on_failure => true)
  tony_photo_5 = Photo.create!(user_id: tony.id, title: "tony_photo_5", description: "description", width: tony_photo_5_size[0], height: tony_photo_5_size[1])
  tony_photo_6_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1090353-unsplash.jpg", :raise_on_failure => true)
  tony_photo_6 = Photo.create!(user_id: tony.id, title: "tony_photo_6", description: "description", width: tony_photo_6_size[0], height: tony_photo_6_size[1])
  tony_photo_7_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1266859-unsplash.jpg", :raise_on_failure => true)
  tony_photo_7 = Photo.create!(user_id: tony.id, title: "tony_photo_7", description: "description", width: tony_photo_7_size[0], height: tony_photo_7_size[1])
  tony_photo_8_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1293509-unsplash.jpg", :raise_on_failure => true)
  tony_photo_8 = Photo.create!(user_id: tony.id, title: "tony_photo_8", description: "description", width: tony_photo_8_size[0], height: tony_photo_8_size[1])
  tony_photo_9_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1348835-unsplash.jpg", :raise_on_failure => true)
  tony_photo_9 = Photo.create!(user_id: tony.id, title: "tony_photo_9", description: "description", width: tony_photo_9_size[0], height: tony_photo_9_size[1])
  tony_photo_10_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1385598-unsplash.jpg", :raise_on_failure => true)
  tony_photo_10 = Photo.create!(user_id: tony.id, title: "tony_photo_10", description: "description", width: tony_photo_10_size[0], height: tony_photo_10_size[1])
  tony_photo_11_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1413539-unsplash.jpg", :raise_on_failure => true)
  tony_photo_11 = Photo.create!(user_id: tony.id, title: "tony_photo_11", description: "description", width: tony_photo_11_size[0], height: tony_photo_11_size[1])

  
  lisa_photo_1_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-166955-unsplash.jpg", :raise_on_failure => true)
  lisa_photo_1 = Photo.create!(user_id: lisa.id, title: "lisa_photo_1", description: "description", width: lisa_photo_1_size[0], height: lisa_photo_1_size[1])
  lisa_photo_2_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-168185-unsplash.jpg", :raise_on_failure => true)
  lisa_photo_2 = Photo.create!(user_id: lisa.id, title: "lisa_photo_2", description: "description", width: lisa_photo_2_size[0], height: lisa_photo_2_size[1])
  lisa_photo_3_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-168280-unsplash.jpg", :raise_on_failure => true)
  lisa_photo_3 = Photo.create!(user_id: lisa.id, title: "lisa_photo_3", description: "description", width: lisa_photo_3_size[0], height: lisa_photo_3_size[1])
  lisa_photo_4_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-178856-unsplash.jpg", :raise_on_failure => true)
  lisa_photo_4 = Photo.create!(user_id: lisa.id, title: "lisa_photo_4", description: "description", width: lisa_photo_4_size[0], height: lisa_photo_4_size[1])
  lisa_photo_5_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-181097-unsplash.jpg", :raise_on_failure => true)
  lisa_photo_5 = Photo.create!(user_id: lisa.id, title: "lisa_photo_5", description: "description", width: lisa_photo_5_size[0], height: lisa_photo_5_size[1])
  lisa_photo_6_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-204076-unsplash.jpg", :raise_on_failure => true)
  lisa_photo_6 = Photo.create!(user_id: lisa.id, title: "lisa_photo_6", description: "description", width: lisa_photo_6_size[0], height: lisa_photo_6_size[1])
  

  nicole_photo_1_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-248781-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_1 = Photo.create!(user_id: nicole.id, title: "nicole_photo_1", description: "description", width: nicole_photo_1_size[0], height: nicole_photo_1_size[1])
  
  nicole_photo_2_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-280940-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_2 = Photo.create!(user_id: nicole.id, title: "nicole_photo_2", description: "description", width: nicole_photo_2_size[0], height: nicole_photo_2_size[1])

  nicole_photo_3_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-297329-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_3 = Photo.create!(user_id: nicole.id, title: "nicole_photo_3", description: "description", width: nicole_photo_3_size[0], height: nicole_photo_3_size[1])

  nicole_photo_4_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-297333-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_4 = Photo.create!(user_id: nicole.id, title: "nicole_photo_4", description: "description", width: nicole_photo_4_size[0], height: nicole_photo_4_size[1])

  nicole_photo_5_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-306172-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_5 = Photo.create!(user_id: nicole.id, title: "nicole_photo_5", description: "description", width: nicole_photo_5_size[0], height: nicole_photo_5_size[1])

  nicole_photo_6_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-307743-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_6 = Photo.create!(user_id: nicole.id, title: "nicole_photo_6", description: "description", width: nicole_photo_6_size[0], height: nicole_photo_6_size[1])

  nicole_photo_7_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-367505-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_7 = Photo.create!(user_id: nicole.id, title: "nicole_photo_7", description: "description", width: nicole_photo_7_size[0], height: nicole_photo_7_size[1])

  nicole_photo_8_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-415606-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_8 = Photo.create!(user_id: nicole.id, title: "nicole_photo_8", description: "description", width: nicole_photo_8_size[0], height: nicole_photo_8_size[1])

  nicole_photo_9_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-415618-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_9 = Photo.create!(user_id: nicole.id, title: "nicole_photo_9", description: "description", width: nicole_photo_9_size[0], height: nicole_photo_9_size[1])

  nicole_photo_10_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-558609-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_10 = Photo.create!(user_id: nicole.id, title: "nicole_photo_10", description: "description", width: nicole_photo_10_size[0], height: nicole_photo_10_size[1])

  nicole_photo_11_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-600457-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_11 = Photo.create!(user_id: nicole.id, title: "nicole_photo_11", description: "description", width: nicole_photo_11_size[0], height: nicole_photo_11_size[1])

  nicole_photo_12_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-1335501-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_12 = Photo.create!(user_id: nicole.id, title: "nicole_photo_12", description: "description", width: nicole_photo_12_size[0], height: nicole_photo_12_size[1])

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
  juice_photo_2.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-772472-unsplash.jpg"), filename: "amogh-manjunath-772472-unsplash.jpg")
  juice_photo_3.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-772463-unsplash.jpg"), filename: "amogh-manjunath-772463-unsplash.jpg")
  juice_photo_4.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-772475-unsplash.jpg"), filename: "amogh-manjunath-772475-unsplash.jpg")
  juice_photo_5.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-773461-unsplash.jpg"), filename: "amogh-manjunath-773461-unsplash.jpg")
  juice_photo_6.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-775985-unsplash.jpg"), filename: "amogh-manjunath-775985-unsplash.jpg")
  juice_photo_7.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-799398-unsplash.jpg"), filename: "amogh-manjunath-799398-unsplash.jpg")
 
  tony_photo_1.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-48063-unsplash.jpg"), filename: "roberto-nickson-48063-unsplash.jpg")
  tony_photo_2.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-495794-unsplash.jpg"), filename: "roberto-nickson-495794-unsplash.jpg")
  tony_photo_3.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-706404-unsplash.jpg"), filename: "roberto-nickson-706404-unsplash.jpg")
  tony_photo_4.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-706405-unsplash.jpg"), filename: "roberto-nickson-706405-unsplash.jpg")
  tony_photo_5.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1083409-unsplash.jpg"), filename: "roberto-nickson-1083409-unsplash.jpg")
  tony_photo_6.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1090353-unsplash.jpg"), filename: "roberto-nickson-1090353-unsplash.jpg")
  tony_photo_7.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1266859-unsplash.jpg"), filename: "roberto-nickson-1266859-unsplash.jpg")
  tony_photo_8.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1293509-unsplash.jpg"), filename: "roberto-nickson-1293509-unsplash.jpg")
  tony_photo_9.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1348835-unsplash.jpg"), filename: "roberto-nickson-1348835-unsplash.jpg")
  tony_photo_10.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1385598-unsplash.jpg"), filename: "roberto-nickson-1385598-unsplash.jpg")
  tony_photo_11.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1413539-unsplash.jpg"), filename: "roberto-nickson-1413539-unsplash.jpg")

  lisa_photo_1.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-166955-unsplash.jpg"), filename: "angel-jimenez-166955-unsplash.jpg")
  lisa_photo_2.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-168185-unsplash.jpg"), filename: "angel-jimenez-168185-unsplash.jpg")
  lisa_photo_3.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-168280-unsplash.jpg"), filename: "angel-jimenez-168280-unsplash.jpg")
  lisa_photo_4.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-178856-unsplash.jpg"), filename: "angel-jimenez-178856-unsplash.jpg")
  lisa_photo_5.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-181097-unsplash.jpg"), filename: "angel-jimenez-181097-unsplash.jpg")
  lisa_photo_6.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-204076-unsplash.jpg"), filename: "angel-jimenez-204076-unsplash.jpg")

  nicole_photo_1.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-248781-unsplash.jpg"), filename: "oladimeji-odunsi-248781-unsplash.jpg")
  nicole_photo_2.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-280940-unsplash.jpg"), filename: "oladimeji-odunsi-280940-unsplash.jpg")
  nicole_photo_3.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-297329-unsplash.jpg"), filename: "oladimeji-odunsi-297329-unsplash.jpg")
  nicole_photo_4.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-297333-unsplash.jpg"), filename: "oladimeji-odunsi-297333-unsplash.jpg")
  nicole_photo_5.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-306172-unsplash.jpg"), filename: "oladimeji-odunsi-306172-unsplash.jpg")
  nicole_photo_6.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-307743-unsplash.jpg"), filename: "oladimeji-odunsi-307743-unsplash.jpg")
  nicole_photo_7.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-367505-unsplash.jpg"), filename: "oladimeji-odunsi-367505-unsplash.jpg")
  nicole_photo_8.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-415606-unsplash.jpg"), filename: "oladimeji-odunsi-415606-unsplash.jpg")
  nicole_photo_9.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-415618-unsplash.jpg"), filename: "oladimeji-odunsi-415618-unsplash.jpg")
  nicole_photo_10.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-558609-unsplash.jpg"), filename: "oladimeji-odunsi-558609-unsplash.jpg")
  nicole_photo_11.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-600457-unsplash.jpg"), filename: "oladimeji-odunsi-600457-unsplash.jpg")
  nicole_photo_12.image.attach(io: open("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-1335501-unsplash.jpg"), filename: "oladimeji-odunsi-1335501-unsplash.jpg")

  juice_album_1 = Album.create(user_id: juice.id, name: "juice_album_1", description: "juice's awesome album 1 description")
  juice_album_2 = Album.create(user_id: juice.id, name: "juice_album_2", description: "juice's awesome album 2 description")
  juice_album_3 = Album.create(user_id: juice.id, name: "juice_album_3", description: "juice's awesome album 3 description")
  juice_album_4 = Album.create(user_id: juice.id, name: "juice_album_4", description: "juice's awesome album 4 description")

  lisa_album_1 = Album.create(user_id: lisa.id, name: "lisa_album_1", description: "lisa's awesome album 1 description")
  lisa_album_2 = Album.create(user_id: lisa.id, name: "lisa_album_2", description: "lisa's awesome album 2 description")
  lisa_album_3 = Album.create(user_id: lisa.id, name: "lisa_album_3", description: "lisa's awesome album 3 description")
  lisa_album_4 = Album.create(user_id: lisa.id, name: "lisa_album_4", description: "lisa's awesome album 4 description")
  
  josh_album_1 = Album.create(user_id: josh.id, name: "josh_album_1", description: "josh's awesome album 1 description")
  josh_album_2 = Album.create(user_id: josh.id, name: "josh_album_2", description: "josh's awesome album 2 description")
  josh_album_3 = Album.create(user_id: josh.id, name: "josh_album_3", description: "josh's awesome album 3 description")

  nicole_album_1 = Album.create(user_id: nicole.id, name: "nicole_album_1", description: "nicole's awesome album 1 description")
  nicole_album_2 = Album.create(user_id: nicole.id, name: "nicole_album_2", description: "nicole's awesome album 2 description")
  nicole_album_3 = Album.create(user_id: nicole.id, name: "nicole_album_3", description: "nicole's awesome album 3 description")

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

  album_photo_14 = AlbumPhoto.create!(photo_id: josh_photo_1.id, album_id: josh_album_1.id)
  album_photo_15 = AlbumPhoto.create!(photo_id: josh_photo_2.id, album_id: josh_album_1.id)
  album_photo_16 = AlbumPhoto.create!(photo_id: josh_photo_3.id, album_id: josh_album_1.id)
  album_photo_17 = AlbumPhoto.create!(photo_id: josh_photo_4.id, album_id: josh_album_2.id)
  album_photo_18 = AlbumPhoto.create!(photo_id: josh_photo_5.id, album_id: josh_album_2.id)
  album_photo_19 = AlbumPhoto.create!(photo_id: josh_photo_6.id, album_id: josh_album_2.id)
  album_photo_20 = AlbumPhoto.create!(photo_id: josh_photo_7.id, album_id: josh_album_3.id)
  album_photo_21 = AlbumPhoto.create!(photo_id: josh_photo_8.id, album_id: josh_album_3.id)

  album_photo_22 = AlbumPhoto.create!(photo_id: nicole_photo_1.id, album_id: nicole_album_1.id)
  album_photo_23 = AlbumPhoto.create!(photo_id: nicole_photo_2.id, album_id: nicole_album_1.id)
  album_photo_24 = AlbumPhoto.create!(photo_id: nicole_photo_3.id, album_id: nicole_album_1.id)
  album_photo_25 = AlbumPhoto.create!(photo_id: nicole_photo_4.id, album_id: nicole_album_1.id)
  album_photo_26 = AlbumPhoto.create!(photo_id: nicole_photo_5.id, album_id: nicole_album_2.id)
  album_photo_27 = AlbumPhoto.create!(photo_id: nicole_photo_6.id, album_id: nicole_album_2.id)
  album_photo_28 = AlbumPhoto.create!(photo_id: nicole_photo_7.id, album_id: nicole_album_2.id)
  album_photo_29 = AlbumPhoto.create!(photo_id: nicole_photo_8.id, album_id: nicole_album_2.id)
  album_photo_30 = AlbumPhoto.create!(photo_id: nicole_photo_9.id, album_id: nicole_album_3.id)
  album_photo_31 = AlbumPhoto.create!(photo_id: nicole_photo_10.id, album_id: nicole_album_3.id)
  album_photo_32 = AlbumPhoto.create!(photo_id: nicole_photo_11.id, album_id: nicole_album_3.id)
  album_photo_33 = AlbumPhoto.create!(photo_id: nicole_photo_12.id, album_id: nicole_album_3.id)

  nicole_comment_1 = Comment.create!(photo_id: josh_photo_1.id, user_id: nicole.id, 
    body: "I can drive 10 miles, walk 50 feet. Turn around and before I know it, I'd be back home. Or would I? I'm not sure but that's just how it is." )
  nicole_comment_2 = Comment.create!(photo_id: josh_photo_1.id, user_id: nicole.id, 
    body: "From this day on I shall be known as Bob. For Bob is a good name and I am good. But if you want you can just call me Sally." )
  nicole_comment_3 = Comment.create!(photo_id: josh_photo_2.id, user_id: nicole.id, 
    body: "I like to wax my legs and stick the hair on my back. Why? Because it keeps my back warm. There's method in my madness." )
  nicole_comment_4 = Comment.create!(photo_id: josh_photo_2.id, user_id: nicole.id, 
    body: "If I could I would. Wether or not I should, I still would." )

  lisa_comment_5 = Comment.create!(photo_id: josh_photo_3.id, user_id: lisa.id, 
    body: "Look! In the sky. It's a bird, it's a plane. Or is it a hellicopter? No actually I think it is a bird. Or maybe I'm just seeing things. Who knows... After 10 shots of Whiskey things start to get a bit strange." )
  lisa_comment_6 = Comment.create!(photo_id: josh_photo_3.id, user_id: lisa.id, 
    body: "From this day on I shall be known as Bob. For Bob is a good name and I am good. But if you want you can just call me Sally." )
  lisa_comment_7 = Comment.create!(photo_id: josh_photo_4.id, user_id: lisa.id, 
    body: "If you really wanted to do that, then why wouldn't you do that? Instead you do this. It makes no sense." )
  lisa_comment_8 = Comment.create!(photo_id: josh_photo_4.id, user_id: lisa.id, 
    body: "Sometimes I wonder if I really can. But then I think to myself, maybe I can't. But if I could, that would be good. Maybe it's all a lie?" )

  juice_comment_1 = Comment.create!(photo_id: josh_photo_1.id, user_id: juice.id, 
    body: "Loving you Isn't the right thing to do How can I Ever change things that I feel? If I could Maybe I'd give you my world How can I When you won't take it from me?" )
  juice_comment_2 = Comment.create!(photo_id: josh_photo_1.id, user_id: juice.id, 
    body: "I never meant to cause you any sorrow. I never meant to cause you any pain. I only wanted to one time see you laughing. I only wanted to see you laughing in the purple rain." )
  juice_comment_3 = Comment.create!(photo_id: josh_photo_2.id, user_id: juice.id, 
    body: "And everything is going to the beat And everything is going to the beat And everything is going..." )
  juice_comment_4 = Comment.create!(photo_id: josh_photo_2.id, user_id: juice.id, 
    body: "I see trees of green........ red roses too I see em bloom..... for me and for you And I think to myself.... what a wonderful world." )

  tony_comment_5 = Comment.create!(photo_id: josh_photo_3.id, user_id: tony.id, 
    body: "It's gonna take a lot to take me away from you There's nothing that a hundred men or more could ever do I bless the rains down in Africa Gonna take some time to do the things we never have." )
  tony_comment_6 = Comment.create!(photo_id: josh_photo_3.id, user_id: tony.id, 
    body: "Buddy you're a young man hard man Shoutin' in the street gonna take on the world some day You got blood on yo' face You big disgrace Wavin' your banner all over the place." )
  tony_comment_7 = Comment.create!(photo_id: josh_photo_4.id, user_id: tony.id, 
    body: "Oppan Gangnam Style Gangnam Style Op op op op oppan Gangnam Style Gangnam Style Op op op op oppan Gangnam Style." )
  tony_comment_8 = Comment.create!(photo_id: josh_photo_4.id, user_id: tony.id, 
    body: "Don't want to close my eyes I don't want to fall asleep Cause I'd miss you babe And I don't want to miss a thing Cause even when I dream of you The sweetest dream will never do I'd still miss you babe And I don't want to miss a thing." )

#lisa photo comments
  tony_comment_9 = Comment.create!(photo_id: lisa_photo_5.id, user_id: tony.id, 
    body: "All those moments will be lost in time… like tears in rain." )
  tony_comment_10 = Comment.create!(photo_id: lisa_photo_4.id, user_id: tony.id, 
    body: "Won't you excuse me for a moment while I ... slip into something a little bit more ... comfortable?" )
  tony_comment_11 = Comment.create!(photo_id: lisa_photo_3.id, user_id: tony.id, 
    body: "Of all the gin joints in all the towns in all the world, she walks into mine." )
  tony_comment_12 = Comment.create!(photo_id: lisa_photo_2.id, user_id: tony.id, 
    body: "Well, it's not the men in your life that counts, it's the life in your men." )
  tony_comment_13 = Comment.create!(photo_id: lisa_photo_1.id, user_id: tony.id, 
    body: "My Mama always said, 'Life was like a box of chocolates; you never know what you're gonna get." )
  tony_comment_14 = Comment.create!(photo_id: lisa_photo_5.id, user_id: tony.id, 
    body: "I could dance with you till the cows come home...On second thought, I'd rather dance with the cows when you came home." )
  tony_comment_15 = Comment.create!(photo_id: lisa_photo_4.id, user_id: tony.id, 
    body: "...Bond. James Bond" )
  tony_comment_16 = Comment.create!(photo_id: lisa_photo_3.id, user_id: tony.id, 
    body: "You talkin' to me? You talkin' to me? You talkin' to me? Well, who the hell else are you talkin' to? You talkin' to me? Well, I'm the only one here. Who the f--k do you think you're talkin' to?" )

  juice_comment_5 = Comment.create!(photo_id: lisa_photo_2.id, user_id: juice.id, 
    body: "Would you be shocked if I put on something more comfortable?" )
  juice_comment_6 = Comment.create!(photo_id: lisa_photo_1.id, user_id: juice.id, 
    body: "I could dance with you till the cows come home...On second thought, I'd rather dance with the cows when you came home." )
  juice_comment_7 = Comment.create!(photo_id: lisa_photo_5.id, user_id: juice.id, 
    body: "Frankly, my dear, I don't give a damn!" )
  juice_comment_8 = Comment.create!(photo_id: lisa_photo_4.id, user_id: juice.id, 
    body: "Love means never having to say you're spatula." )
  juice_comment_9 = Comment.create!(photo_id: lisa_photo_3.id, user_id: juice.id, 
    body: "I am Torgo. I take care of the place while the Nothing is away." )
  juice_comment_10 = Comment.create!(photo_id: lisa_photo_2.id, user_id: juice.id, 
    body: "Watch the bear, everywhere, keep looking! Keep watching the bear!" )
  juice_comment_11 = Comment.create!(photo_id: lisa_photo_1.id, user_id: juice.id, 
    body: "Father to a murdered son. Husband to a murdered wife. And I will have my car, in this life or the next." )
  juice_comment_12 = Comment.create!(photo_id: lisa_photo_5.id, user_id: juice.id, 
    body: "This phil attracts Those We Do Not Speak Of. You must bury it." )

  nicole_comment_5 = Comment.create!(photo_id: lisa_photo_4.id, user_id: nicole.id, 
    body: "I can drive 10 miles, walk 50 feet. Turn around and before I know it, I'd be back home. Or would I? I'm not sure but that's just how it is." )
  nicole_comment_6 = Comment.create!(photo_id: lisa_photo_3.id, user_id: nicole.id, 
    body: "I do wish we could chat longer, but I'm having an old beer for dinner." )
  nicole_comment_7 = Comment.create!(photo_id: lisa_photo_2.id, user_id: nicole.id, 
    body: "All right, Mr. DeMille, I'm ready for my beer." )
  nicole_comment_8 = Comment.create!(photo_id: lisa_photo_1.id, user_id: nicole.id, 
    body: "Oh, no, it wasn't the airplanes. It was tally killed the beast." )
  
end
