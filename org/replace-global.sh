#!/bin/bash

find . -name "*.org" -type f -exec sed -i 's/Github/GitHub/g' {} \;
