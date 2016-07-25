#MIDDLEMAN 

	# start local server
	middleman server
	
	# make build 
	middleman build



##folder structure

##### - source/layouts/layout.erb
insert here header informations common to every pages
	
	<title><%= current_page.data.title %></title>
	
	<%= stylesheet_link_tag :site %>
    <%= javascript_include_tag :all %>
    
    <body class="<%= page_classes %>">
    	<%= yield %>
    </body>
    
##### - source/localizable/index.html.erb
##### - source/localizable/secondary_page.html.erb
insert here the content (only the content) of the single pages

	# translate text
	<%= t(:hello) %> World
	
	# load partial
	<%= partial('button', :locals => { :text => "text in Button" }) %>
	
	# in source/_nameofthepartial.erb
	<%= locals[:text] %>
	
##### - locales/en.yml
##### - locales/it.yml
insert here the text

	---
	en:
		hello: "Hello"
	
	# in config.rb
	activate :i18n, :mount_at_root => :es

##### - source/_nameofthepartial.erb

	<%= locals[:text] %>
	
---
## data

##### - source/localizable/index.html.erb

	<% data.object.each do |key, value|%>
		<%= key %>
		<% value.each do |k, v| %>
			<%= "#{k} = #{v}" %>
		<% end %>
	<% end %>
	
##### - data/object.yml
	---
	torch:
		price: 40
		valute: "$"
	computer: 
		price: 2000
		valute: "euro"

## load js dependence
on terminal

	bower install lodash

	# add the line in source/javascript/main.js
	//= require lodash

	
---
T0D0
./data/
./helpers/
.config.rb
./source/javascripts
bourbon sass
neat sass


