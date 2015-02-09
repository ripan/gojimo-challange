require 'rails_helper'
require 'factory_girl_rails'

RSpec.describe "subjects/show", type: :view do
  before(:each) do
    @subject = assign(:subject, FactoryGirl.build(:subject))
  end

  # it "renders attributes in <p>" do
  #   render
  #   expect(rendered).to match(/Title/)
  #   expect(rendered).to match(/Link/)
  #   expect(rendered).to match(/Colour/)
  # end
end
