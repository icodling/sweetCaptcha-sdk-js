test:
	@NODE_ENV=test \
	  ./node_modules/.bin/mocha \
		--reporter spec \
		--recursive \
		--bail 

.PHONY: test
