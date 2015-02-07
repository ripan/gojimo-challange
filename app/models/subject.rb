require 'active_resource'  

class Subject < ActiveResource::Base
	self.site = "http://api.gojimo.net/api/v4"
	belongs_to :qualification
end