
###
# Page options, layouts, aliases and proxies
###

require_relative 'extension/csv-helpers.rb'
require_relative 'extension/svg-inline.rb'

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :css_dir,     'stylesheets'
set :js_dir,      'javascripts'
set :images_dir,  'images'


after_configuration do
  sprockets.append_path File.join( root, "vendor/assets/bower/" )
end


###
# Helpers
###

activate :sprockets
activate :csv_helpers
activate :svg_inline
activate :directory_indexes
activate :i18n, :mount_at_root => false

# Reload the browser automatically whenever files change
configure :development do
  # activate :livereload
end

# build
configure :build do
  sprockets.append_path File.join( root, "vendor/assets/bower/" )
  activate :minify_css
  activate :minify_javascript
end
