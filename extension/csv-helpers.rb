class CSV_Helpers < Middleman::Extension
	def initialize(app, options_hash={}, &block)
		super
	end
	helpers do
		def csv_data(file)
			csv_data = File.read(File.join('csv', file))
			hash = CSV.new(csv_data, :headers => :first_row, :header_converters => :symbol)
			array = hash.to_a.map { |row| row.to_hash } 
			
			# create lang objects
			obj = {}
			hash.headers.each_with_index do |e, i|
				if i > 0
					obj[e] = {} 
					array.each do |j|
						obj[e][j[hash.headers[0]]] = j[e]
					end
				end
			end
			return obj
		end
	end
end
::Middleman::Extensions.register(:csv_helpers, CSV_Helpers)

