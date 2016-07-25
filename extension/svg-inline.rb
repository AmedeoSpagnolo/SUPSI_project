class SVG_Inline < Middleman::Extension
	def initialize(app, options_hash={}, &block)
		super
	end
	helpers do
	  def load_svg(filename, options = {})
	    asset = "source/images/#{filename}.svg"
	    if File.exists?(asset)
	      file = File.open(asset, 'r') { |f| f.read }
	    else
	      %(
	        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 30"
	          width="400px" height="30px"
	        >
	          <text font-size="16" x="8" y="20" fill="#cc0000">
	            Error: '#{filename}' could not be found.
	          </text>
	          <rect
	            x="1" y="1" width="398" height="28" fill="none"
	            stroke-width="1" stroke="#cc0000"
	          />
	        </svg>
	      )
	    end
	  end
	end
end
::Middleman::Extensions.register(:svg_inline, SVG_Inline)



