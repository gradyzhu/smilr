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
  Tag.destroy_all
  PhotoTag.destroy_all

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
  juice_photo_1 = Photo.create!(
    user_id: juice.id, 
    title: "Lombard Street", 
    description: "Lombard Street is an east–west street in San Francisco, California that is famous for a steep, one-block section with eight hairpin turns.", 
    width: juice_photo_1_size[0], 
    height: juice_photo_1_size[1])

  juice_photo_2_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-772472-unsplash.jpg", :raise_on_failure => true)
  juice_photo_2 = Photo.create!(
    user_id: juice.id, 
    title: "Golden Gate Fence", 
    description: "At the time of its opening in 1937, it was both the longest and the tallest suspension bridge in the world, with a main span of 4,200 feet (1,280 m) and a total height of 746 feet (227 m).", 
    width: juice_photo_2_size[0], 
    height: juice_photo_2_size[1])

  juice_photo_3_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-772463-unsplash.jpg", :raise_on_failure => true)
  juice_photo_3 = Photo.create!(
    user_id: juice.id, 
    title: "In the Bay", 
    description: "description", 
    width: juice_photo_3_size[0], 
    height: juice_photo_3_size[1])

  juice_photo_4_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-772475-unsplash.jpg", :raise_on_failure => true)
  juice_photo_4 = Photo.create!(
    user_id: juice.id, 
    title: "Aerial Golden Gate", 
    description: "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean.", 
    width: juice_photo_4_size[0], 
    height: juice_photo_4_size[1])

  juice_photo_5_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-773461-unsplash.jpg", :raise_on_failure => true)
  juice_photo_5 = Photo.create!(
    user_id: juice.id, 
    title: "Views from the Bay", 
    description: "The structure links the American city of San Francisco, California – the northern tip of the San Francisco Peninsula – to Marin County, carrying both U.S. Route 101 and California State Route 1 across the strait.", 
    width: juice_photo_5_size[0], 
    height: juice_photo_5_size[1])

  juice_photo_6_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-775985-unsplash.jpg", :raise_on_failure => true)
  juice_photo_6 = Photo.create!(
    user_id: juice.id, 
    title: "Cable Car", 
    description: "A cable car (usually known as a cable tram outside North America) is a type of cable railway used for mass transit where rail cars are hauled by a continuously moving cable running at a constant speed.", 
    width: juice_photo_6_size[0], 
    height: juice_photo_6_size[1])

  juice_photo_7_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/juice_photos/amogh-manjunath-799398-unsplash.jpg", :raise_on_failure => true)
  juice_photo_7 = Photo.create!(
    user_id: juice.id, 
    title: "Socal Chillin'", 
    description: "Southern California (colloquially and locally known as SoCal) is a geographic and cultural region that generally comprises California's southernmost counties, and is the second most populous urban agglomeration in the United States.", 
    width: juice_photo_7_size[0], 
    height: juice_photo_7_size[1])
  

  tony_photo_1_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-48063-unsplash.jpg", :raise_on_failure => true)
  tony_photo_1 = Photo.create!(
    user_id: tony.id, 
    title: "Kayaking", 
    description: "Life was meant for GOod Friends & Great Adventure", 
    width: tony_photo_1_size[0], 
    height: tony_photo_1_size[1])

  tony_photo_2_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-495794-unsplash.jpg", :raise_on_failure => true)
  tony_photo_2 = Photo.create!(
    user_id: tony.id, 
    title: "Wheat Fields", 
    description: "Always do your best. What you plant now, will harvest later.", 
    width: tony_photo_2_size[0], 
    height: tony_photo_2_size[1])

  tony_photo_3_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-706404-unsplash.jpg", :raise_on_failure => true)
  tony_photo_3 = Photo.create!(
    user_id: tony.id, 
    title: "Desert Skies", 
    description: "True friendship multiplies the good in life and divides its evils.", 
    width: tony_photo_3_size[0], 
    height: tony_photo_3_size[1])

  tony_photo_4_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-706405-unsplash.jpg", :raise_on_failure => true)
  tony_photo_4 = Photo.create!(
    user_id: tony.id, 
    title: "Red Rock Canyon", 
    description: "Red Rock Island is an uninhabited, 5.8-acre (2.3 ha) island in the San Francisco Bay located just south of the Richmond–San Rafael Bridge.", 
    width: tony_photo_4_size[0], 
    height: tony_photo_4_size[1])

  tony_photo_5_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1083409-unsplash.jpg", :raise_on_failure => true)
  tony_photo_5 = Photo.create!(
    user_id: tony.id, 
    title: "Industrial Sunset", 
    description: "U.S. Route 101, or U.S. Highway 101 (US 101) is a north–south United States Numbered Highway that runs through the states of California, Oregon", 
    width: tony_photo_5_size[0], 
    height: tony_photo_5_size[1])

  tony_photo_6_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1090353-unsplash.jpg", :raise_on_failure => true)
  tony_photo_6 = Photo.create!(
    user_id: tony.id, 
    title: "Crusing down the 101", 
    description: "description", 
    width: tony_photo_6_size[0], 
    height: tony_photo_6_size[1])

  tony_photo_7_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1266859-unsplash.jpg", :raise_on_failure => true)
  tony_photo_7 = Photo.create!(
    user_id: tony.id, 
    title: "Fluffy Dog", 
    description: "The domestic dog is a member of the genus Canis (canines), which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.", 
    width: tony_photo_7_size[0], 
    height: tony_photo_7_size[1])

  tony_photo_8_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1293509-unsplash.jpg", :raise_on_failure => true)
  tony_photo_8 = Photo.create!(
    user_id: tony.id, 
    title: "Christmas House", 
    description: "A feast central to the Christian liturgical year, it is preceded by the season of Advent or the Nativity Fast and initiates the season of Christmastide, which historically in the West lasts twelve days and culminates on Twelfth Night", 
    width: tony_photo_8_size[0], 
    height: tony_photo_8_size[1])

  tony_photo_9_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1348835-unsplash.jpg", :raise_on_failure => true)
  tony_photo_9 = Photo.create!(
    user_id: tony.id, 
    title: "Miami Vibes", 
    description: "Miami, officially the City of Miami, is the cultural, economic and financial center of South Florida and the seat of Miami-Dade County, the most populous county in Florida.", 
    width: tony_photo_9_size[0], 
    height: tony_photo_9_size[1])

  tony_photo_10_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1385598-unsplash.jpg", :raise_on_failure => true)
  tony_photo_10 = Photo.create!(
    user_id: tony.id, 
    title: "LACMA'", 
    description: "The Los Angeles County Museum of Art (LACMA) is an art museum located on Wilshire Boulevard in the Miracle Mile vicinity of Los Angeles.", 
    width: tony_photo_10_size[0], 
    height: tony_photo_10_size[1])

  tony_photo_11_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/tony_photos/roberto-nickson-1413539-unsplash.jpg", :raise_on_failure => true)
  tony_photo_11 = Photo.create!(
    user_id: tony.id, 
    title: "Old Car, Old Soul", 
    description: "Old souls have no interest in things that can break or be taken away from them.", 
    width: tony_photo_11_size[0], 
    height: tony_photo_11_size[1])


  lisa_photo_1_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-166955-unsplash.jpg", :raise_on_failure => true)
  lisa_photo_1 = Photo.create!(
    user_id: lisa.id, 
    title: "Gargoyles", 
    width: lisa_photo_1_size[0], 
    height: lisa_photo_1_size[1],
    description: "Make no mistake, little human. You are under my protection now, and I protect what is mine.")

  lisa_photo_2_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-168185-unsplash.jpg", :raise_on_failure => true)
  lisa_photo_2 = Photo.create!(
    user_id: lisa.id, 
    title: "Blueberry Man Group", 
    width: lisa_photo_2_size[0], 
    height: lisa_photo_2_size[1],
    description: "Blueberries are perennial flowering plants with blue– or purple–colored berries. They are classified in the section Cyanococcus within the genus Vaccinium.")

  lisa_photo_3_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-168280-unsplash.jpg", :raise_on_failure => true)
  lisa_photo_3 = Photo.create!(
    user_id: lisa.id, 
    title: "Brighten Up", 
    width: lisa_photo_3_size[0], 
    height: lisa_photo_3_size[1],
    description: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.")

  lisa_photo_4_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-178856-unsplash.jpg", :raise_on_failure => true)
  lisa_photo_4 = Photo.create!(
    user_id: lisa.id, 
    title: "Aokiji", 
    width: lisa_photo_4_size[0], 
    height: lisa_photo_4_size[1],
    description: "The thing called 'justice' changes its shape... Depending on where you stand.")

  lisa_photo_5_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-181097-unsplash.jpg", :raise_on_failure => true)
  lisa_photo_5 = Photo.create!(
    user_id: lisa.id, 
    title: "Light Room", 
    width: lisa_photo_5_size[0], 
    height: lisa_photo_5_size[1],
    description: "Their apparent convergence in the sky is a visual illusion from linear perspective.")

  lisa_photo_6_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/lisa_photos/angel-jimenez-204076-unsplash.jpg", :raise_on_failure => true)
  lisa_photo_6 = Photo.create!(
    user_id: lisa.id, 
    title: "Mr.Photographer", 
    width: lisa_photo_6_size[0], 
    height: lisa_photo_6_size[1],
    description: "Photography is the art, application and practice of creating durable images by recording light or other electromagnetic radiation, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.")
  

  nicole_photo_1_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-248781-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_1 = Photo.create!(
    user_id: nicole.id, 
    title: "Solar Plexus", 
    description: "Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.", 
    width: nicole_photo_1_size[0], 
    height: nicole_photo_1_size[1])
  
  nicole_photo_2_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-280940-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_2 = Photo.create!(
    user_id: nicole.id, 
    title: "SkyLight", 
    description: "have to think that I think it's always been a horse race between this administration's temporary political acumen and their completely, utterly, totally bankrupt policies. And they're coming home to roost. It was always a question of time. These guys aren't conservative. These guys are radicals.", 
    width: nicole_photo_2_size[0], 
    height: nicole_photo_2_size[1])

  nicole_photo_3_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-297329-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_3 = Photo.create!(
    user_id: nicole.id, 
    title: "Brilliant Builds", 
    description: "Telling a story in a futuristic world gives you this freedom to explore things that bother you in contemporary times.", 
    width: nicole_photo_3_size[0], 
    height: nicole_photo_3_size[1])

  nicole_photo_4_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-297333-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_4 = Photo.create!(
    user_id: nicole.id, 
    title: "Laying Up", 
    description: "This was a movement of intellectuals who wanted to replace tradition with the modern world of machinery, speed, violence, and public relations. It proves that we should be careful what intellectuals wish for, because we might get it.  ", 
    width: nicole_photo_4_size[0], 
    height: nicole_photo_4_size[1])

  nicole_photo_5_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-306172-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_5 = Photo.create!(
    user_id: nicole.id, 
    title: "Pure Introspection", 
    description: "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn.", 
    width: nicole_photo_5_size[0], 
    height: nicole_photo_5_size[1])

  nicole_photo_6_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-307743-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_6 = Photo.create!(
    user_id: nicole.id, 
    title: "Shining Moment", 
    description: "What is funny is when you do a futuristic movie, you immediately get to be fashionable because you're creating something that doesn't exist.", 
    width: nicole_photo_6_size[0], 
    height: nicole_photo_6_size[1])

  nicole_photo_7_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-367505-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_7 = Photo.create!(
    user_id: nicole.id, 
    title: "Wrists and Face", 
    description: "The future will look futuristic only because we will be trying to make it look futuristic. ", 
    width: nicole_photo_7_size[0], 
    height: nicole_photo_7_size[1])

  nicole_photo_8_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-415606-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_8 = Photo.create!(
    user_id: nicole.id, 
    title: "Distant Feelings", 
    description: "If we define Futurism as an exploration beyond accepted limits, then the nature of limiting systems becomes the first object of exploration.", 
    width: nicole_photo_8_size[0], 
    height: nicole_photo_8_size[1])

  nicole_photo_9_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-415618-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_9 = Photo.create!(
    user_id: nicole.id, 
    title: "Kanye Palette", 
    description: "For time and the world do not stand still. Change is the law of life. And those who look only to the past or the present are certain to miss the future.", 
    width: nicole_photo_9_size[0], 
    height: nicole_photo_9_size[1])

  nicole_photo_10_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-558609-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_10 = Photo.create!(
    user_id: nicole.id, 
    title: "Straight Power", 
    description: "To be a futurist, in pursuit of improving reality, is not to have your face continually turned upstream, waiting for the future to come. To improve reality is to clearly see where you are, and then wonder how to make that better.", 
    width: nicole_photo_10_size[0], 
    height: nicole_photo_10_size[1])

  nicole_photo_11_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-600457-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_11 = Photo.create!(
    user_id: nicole.id, 
    title: "Yellow Disposition", 
    description: "The most futuristic aspect of the House of the Future was that it was made almost entirely of plastic.", 
    width: nicole_photo_11_size[0], 
    height: nicole_photo_11_size[1])

  nicole_photo_12_size = FastImage.size("https://s3-us-west-1.amazonaws.com/smilr-seed/nicole_photos/oladimeji-odunsi-1335501-unsplash.jpg", :raise_on_failure => true)
  nicole_photo_12 = Photo.create!(
    user_id: nicole.id, 
    title: "White anD Teal", 
    description: "Those who speak of progression but are afraid of change are self-repressed and therefore unable to reach any further than their eyes can already see.", 
    width: nicole_photo_12_size[0], 
    height: nicole_photo_12_size[1])

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
  
  tag_1 = Tag.create!(name: "vsco")
  tag_2 = Tag.create!(name: "iphone")
  tag_3 = Tag.create!(name: "hot")
  tag_4 = Tag.create!(name: "lol")
  tag_5 = Tag.create!(name: "scenic")
  tag_6 = Tag.create!(name: "nature")
  tag_7 = Tag.create!(name: "coding")
  tag_8 = Tag.create!(name: "love")
  tag_9 = Tag.create!(name: "beauty")
  tag_10 = Tag.create!(name: "amazing")
  tag_11 = Tag.create!(name: "glorious")
  tag_12 = Tag.create!(name: "inspirational")
  tag_13 = Tag.create!(name: "gross")
  tag_14 = Tag.create!(name: "tight")
  tag_15 = Tag.create!(name: "cool")
  tag_16 = Tag.create!(name: "sf")
  tag_17 = Tag.create!(name: "sky")
  tag_18 = Tag.create!(name: "ballin")
  tag_19 = Tag.create!(name: "creative")
  tag_20 = Tag.create!(name: "strong")
  tag_21 = Tag.create!(name: "fantastic")
  tag_22 = Tag.create!(name: "lmao")
  tag_23 = Tag.create!(name: "curious")
  tag_24 = Tag.create!(name: "dark")
  tag_25 = Tag.create!(name: "lucrative")
  tag_26 = Tag.create!(name: "joyful")

  photo_tag_1 = PhotoTag.create!(photo_id:juice_photo_1.id, tag_id:tag_1.id)
  photo_tag_2 = PhotoTag.create!(photo_id:josh_photo_3.id, tag_id:tag_21.id)
  photo_tag_3 = PhotoTag.create!(photo_id:josh_photo_5.id, tag_id:tag_22.id)
  photo_tag_4 = PhotoTag.create!(photo_id:josh_photo_6.id, tag_id:tag_2.id)
  photo_tag_5 = PhotoTag.create!(photo_id:josh_photo_5.id, tag_id:tag_23.id)
  photo_tag_6 = PhotoTag.create!(photo_id:josh_photo_2.id, tag_id:tag_2.id)
  photo_tag_7 = PhotoTag.create!(photo_id:juice_photo_3.id, tag_id:tag_24.id)
  photo_tag_8 = PhotoTag.create!(photo_id:juice_photo_1.id, tag_id:tag_25.id)
  photo_tag_9 = PhotoTag.create!(photo_id:juice_photo_1.id, tag_id:tag_3.id)
  photo_tag_10 = PhotoTag.create!(photo_id:juice_photo_1.id, tag_id:tag_4.id)

  photo_tag_11 = PhotoTag.create!(photo_id:juice_photo_7.id, tag_id:tag_4.id)
  photo_tag_12 = PhotoTag.create!(photo_id:lisa_photo_2.id, tag_id:tag_4.id)
  photo_tag_13 = PhotoTag.create!(photo_id:lisa_photo_3.id, tag_id:tag_21.id)
  photo_tag_14 = PhotoTag.create!(photo_id:lisa_photo_4.id, tag_id:tag_5.id)
  photo_tag_15 = PhotoTag.create!(photo_id:lisa_photo_5.id, tag_id:tag_22.id)
  photo_tag_16 = PhotoTag.create!(photo_id:lisa_photo_5.id, tag_id:tag_6.id)
  photo_tag_17 = PhotoTag.create!(photo_id:lisa_photo_4.id, tag_id:tag_23.id)
  photo_tag_18 = PhotoTag.create!(photo_id:lisa_photo_3.id, tag_id:tag_6.id)
  photo_tag_19 = PhotoTag.create!(photo_id:lisa_photo_2.id, tag_id:tag_24.id)
  photo_tag_20 = PhotoTag.create!(photo_id:lisa_photo_1.id, tag_id:tag_26.id)

  photo_tag_21 = PhotoTag.create!(photo_id:lisa_photo_5.id, tag_id:tag_7.id)
  photo_tag_22 = PhotoTag.create!(photo_id:nicole_photo_1.id, tag_id:tag_8.id)
  photo_tag_23 = PhotoTag.create!(photo_id:nicole_photo_2.id, tag_id:tag_8.id)
  photo_tag_24 = PhotoTag.create!(photo_id:nicole_photo_3.id, tag_id:tag_8.id)
  photo_tag_25 = PhotoTag.create!(photo_id:nicole_photo_5.id, tag_id:tag_9.id)
  photo_tag_26 = PhotoTag.create!(photo_id:nicole_photo_4.id, tag_id:tag_9.id)
  photo_tag_27 = PhotoTag.create!(photo_id:nicole_photo_7.id, tag_id:tag_9.id)
  photo_tag_28 = PhotoTag.create!(photo_id:nicole_photo_2.id, tag_id:tag_10.id)
  photo_tag_29 = PhotoTag.create!(photo_id:nicole_photo_3.id, tag_id:tag_10.id)
  photo_tag_30 = PhotoTag.create!(photo_id:nicole_photo_4.id, tag_id:tag_10.id)
  
  photo_tag_31 = PhotoTag.create!(photo_id:tony_photo_11.id, tag_id:tag_11.id)
  photo_tag_32 = PhotoTag.create!(photo_id:tony_photo_10.id, tag_id:tag_11.id)
  photo_tag_33 = PhotoTag.create!(photo_id:tony_photo_9.id, tag_id:tag_11.id)
  photo_tag_34 = PhotoTag.create!(photo_id:tony_photo_2.id, tag_id:tag_12.id)
  photo_tag_35 = PhotoTag.create!(photo_id:tony_photo_4.id, tag_id:tag_12.id)
  photo_tag_36 = PhotoTag.create!(photo_id:tony_photo_7.id, tag_id:tag_12.id)
  photo_tag_37 = PhotoTag.create!(photo_id:tony_photo_8.id, tag_id:tag_13.id)
  photo_tag_38 = PhotoTag.create!(photo_id:tony_photo_2.id, tag_id:tag_13.id)
  photo_tag_39 = PhotoTag.create!(photo_id:tony_photo_3.id, tag_id:tag_13.id)
  photo_tag_40 = PhotoTag.create!(photo_id:tony_photo_4.id, tag_id:tag_13.id)

  photo_tag_41 = PhotoTag.create!(photo_id:tony_photo_2.id, tag_id:tag_14.id)
  photo_tag_42 = PhotoTag.create!(photo_id:tony_photo_1.id, tag_id:tag_14.id)
  photo_tag_43 = PhotoTag.create!(photo_id:lisa_photo_2.id, tag_id:tag_14.id)
  photo_tag_44 = PhotoTag.create!(photo_id:lisa_photo_4.id, tag_id:tag_15.id)
  photo_tag_45 = PhotoTag.create!(photo_id:lisa_photo_3.id, tag_id:tag_15.id)
  photo_tag_46 = PhotoTag.create!(photo_id:lisa_photo_2.id, tag_id:tag_15.id)
  photo_tag_47 = PhotoTag.create!(photo_id:lisa_photo_1.id, tag_id:tag_16.id)
  photo_tag_48 = PhotoTag.create!(photo_id:lisa_photo_2.id, tag_id:tag_16.id)
  photo_tag_49 = PhotoTag.create!(photo_id:lisa_photo_4.id, tag_id:tag_16.id)
  photo_tag_50 = PhotoTag.create!(photo_id:lisa_photo_2.id, tag_id:tag_17.id)

  photo_tag_51 = PhotoTag.create!(photo_id:nicole_photo_1.id, tag_id:tag_12.id)
  photo_tag_52 = PhotoTag.create!(photo_id:lisa_photo_6.id, tag_id:tag_13.id)
  photo_tag_53 = PhotoTag.create!(photo_id:lisa_photo_6.id, tag_id:tag_17.id)
  photo_tag_54 = PhotoTag.create!(photo_id:lisa_photo_6.id, tag_id:tag_18.id)
  photo_tag_55 = PhotoTag.create!(photo_id:josh_photo_1.id, tag_id:tag_18.id)
  photo_tag_56 = PhotoTag.create!(photo_id:josh_photo_2.id, tag_id:tag_18.id)
  photo_tag_57 = PhotoTag.create!(photo_id:josh_photo_3.id, tag_id:tag_19.id)
  photo_tag_58 = PhotoTag.create!(photo_id:josh_photo_4.id, tag_id:tag_19.id)
  photo_tag_59 = PhotoTag.create!(photo_id:josh_photo_5.id, tag_id:tag_20.id)
  photo_tag_60 = PhotoTag.create!(photo_id:josh_photo_6.id, tag_id:tag_20.id)
end

