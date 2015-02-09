require 'rails_helper'
require 'factory_girl_rails'

RSpec.describe "qualifications/show", type: :view do
  before(:each) do
    @qualification = assign(:qualification, FactoryGirl.build(:qualification))
  end

  # it "renders attributes in <p>" do
  #   render
  #   expect(rendered).to match(/Name/)
  #   expect(rendered).to match(/Country/)
  #   expect(rendered).to match(/Link/)
  # end
end
