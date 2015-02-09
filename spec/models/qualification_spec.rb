require 'rails_helper'

describe 'Qualification' do

	before do
		@qualification = FactoryGirl.build(:qualification)
	end

	subject { @qualification }
	it "should respond to 'name'" do
		expect(@qualification).to respond_to(:name)
	end

	# context 'is invalid if' do
	# 	it "name is not present" do
	# 		@qualification.name = ""
	# 		expect(@qualification).to be_invalid
	# 	end
	# end

end
