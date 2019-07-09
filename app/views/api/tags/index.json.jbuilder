@tags.each do |tag|
  json.set! tag.id do
    json.partial! "api/tags/show", tag: tag
  end
end

