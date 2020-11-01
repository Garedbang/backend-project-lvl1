# Makefile

install:
	npm install

brain-games:
	node bin/brain-games.js

brain-gcd:
	node bin/brain-gcd.js

publish:
	npm publish --dry-run