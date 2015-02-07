require 'active_resource'  

class Qualification < ActiveResource::Base
	self.site = "http://api.gojimo.net/api/v4"
	has_many :subjects
end