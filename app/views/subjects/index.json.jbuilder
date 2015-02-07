json.array!(@subjects) do |subject|
  json.extract! subject, :id, :name, :link, :colour
  json.url subject_url(subject, format: :json)
end
