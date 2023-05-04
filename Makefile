SHELL := /bin/bash
PWD := $(shell pwd)

.PHONY: run build serve install

all: run

install: 
	@npm install

test:
	@npm test

run:
	@npm start


