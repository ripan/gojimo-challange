json.array!(@qualifications) do |qualification|
  json.extract! qualification, :id, :name, :country, :link
  json.url qualification_url(qualification, format: :json)
end
