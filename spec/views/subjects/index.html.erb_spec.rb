require 'rails_helper'
require 'factory_girl_rails'

RSpec.describe "subjects/index", type: :view do
  before(:each) do
    assign(:subjects, [
      FactoryGirl.build(:subject),
      FactoryGirl.build(:subject)
    ])
  end

  # it "renders a list of subjects" do
  #   render
  #   assert_select "tr>td", :text => "Title".to_s, :count => 2
  #   assert_select "tr>td", :text => "Link".to_s, :count => 2
  #   assert_select "tr>td", :text => "Colour".to_s, :count => 2
  # end
end
