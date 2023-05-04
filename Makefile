SHELL := /bin/bash
PWD := $(shell pwd)

.PHONY: run build serve install

all: run

install: 
	npm install

run:
	@node src/index.js


