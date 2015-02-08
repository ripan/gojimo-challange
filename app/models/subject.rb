require 'active_resource'  

class Subject < ActiveResource::Base
	self.site = "http://api.gojimo.net/api/v4"
	#self.site = "http://gojimo-challange.dev/data"
	belongs_to :qualification
end