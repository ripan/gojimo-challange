random_number = rand(1000).to_s

FactoryGirl.define do
  factory :qualification do
    name "Name #{random_number}" 
    country ""
    link "/api/v4/qualifications/d45945e4-b724-48ab-9f99-21e61f1648ad"
  end
end
