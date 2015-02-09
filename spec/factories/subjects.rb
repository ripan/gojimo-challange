random_number = rand(1000).to_s

FactoryGirl.define do
  factory :subject do
    title "Title #{random_number}" 
    colour "#ECF7E2"
    link "/api/v4/subjects/0fe4c738-f43c-4a66-bd5b-fc9cf6255355"
  end
end
