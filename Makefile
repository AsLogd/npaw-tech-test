BUILDDIR = build
DISTDIR = dist
MODULESDIR = ./node_modules/.bin

styles: 
	$(MODULESDIR)/lessc app/styles/app.less $(BUILDDIR)/css/app.css

scripts-dev: 
	$(MODULESDIR)/browserify app/initialize.js \
	-t node-underscorify \
	-t [ babelify --presets [ es2015 ] ] \
	-t [jstify --noMinify] \
	-o $(BUILDDIR)/js/app.js

scripts:
	$(MODULESDIR)/browserify app/initialize.js \
	-t node-underscorify \
	-t [ babelify --presets [ es2015 ] ] \
	-t [jstify --noMinify] \
	-o temp/app.js -d
	$(MODULESDIR)/uglifyjs temp/app.js -o $(DISTDIR)/js/app.js

assets: 
	@cp -Rf app/assets/* $(BUILDDIR)/


pre-build:
	@mkdir -p $(BUILDDIR)/js

build: pre-build assets	styles scripts-dev


pre-dist:
	@mkdir -p $(DISTDIR)/js & \
	mkdir temp & \

post-dist:
	rm -Rf temp

dist: pre-dist assets styles scripts post-dist


server:
	$(MODULESDIR)/http-server &\

start: build server

clean:
	@rm -rf $(BUILDDIR)
	rm -Rf temp

.PHONY: clean