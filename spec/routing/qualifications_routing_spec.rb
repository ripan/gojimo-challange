require "rails_helper"

RSpec.describe QualificationsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/qualifications").to route_to("qualifications#index")
    end

    it "routes to #show" do
      expect(:get => "/qualifications/1").to route_to("qualifications#show", :id => "1")
    end

  end
end
