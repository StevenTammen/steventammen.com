#!/bin/bash

find . -name "*.org" | while read fname; do
  echo "$fname"
  emacsclientw.exe -e "(progn (find-file \"$fname\") (org-hugo-export-to-md) (kill-buffer))"
done
