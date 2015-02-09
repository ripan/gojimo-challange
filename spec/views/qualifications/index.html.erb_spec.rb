require 'rails_helper'
require 'factory_girl_rails'

RSpec.describe "qualifications/index", type: :view do
  before(:each) do
    assign(:qualifications, [
      FactoryGirl.build(:qualification),
      FactoryGirl.build(:qualification)
    ])
  end

  # it "renders a list of qualifications" do
  #   render
  #   assert_select "tr>td", :text => "Name".to_s, :count => 2
  #   assert_select "tr>td", :text => "Country".to_s, :count => 2
  #   assert_select "tr>td", :text => "Link".to_s, :count => 2
  # end
end
