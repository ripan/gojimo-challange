require 'rails_helper'

describe 'Subject' do

  before do
    @subject = FactoryGirl.build(:subject)
  end

  subject { @subject }
  it "should respond to 'title'" do
    expect(@subject).to respond_to(:title)
  end

end
