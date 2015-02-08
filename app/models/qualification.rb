require 'active_resource'  

class Qualification < ActiveResource::Base
	self.site = "http://api.gojimo.net/api/v4"
	#self.site = "http://gojimo-challange.dev/data"
	has_many :subjects
end