---
title: "{{ replace .Name "-" " " | lower }}"
draft: true
image: //via.placeholder.com/640x150
alt_text: "an image of {{ replace .Name "-" " " | lower }} project"
summary: "summary of the {{ replace .Name "-" " " | lower }} project"
status: # select one
  - "planning"
  - "active"
  - "backlog"
  - "complete"
tech_used:
  - Go
  - Make
  - CSS
  - HTML
  - Bash
---

a description of the {{ replace .Name "-" " " | lower }} project goes here...
