+++
author = "Eddie Webb"
title = "Studio light - Busy/Free LED indicator"
date = "2020-03-05"
description = "Help make this site better."
tags = [
    "cli","usb","lights", "google-apis"
]
languages = [
	"golang"
]
technologies = [
	"usb", "hid", "led"
]
+++

Working project today, but uses a flaky HID library.  I'd like to learn about interfacing with USB, and see if I can replace that module.
<!--more-->

### Me
Practiced web service developer, mostly Java.  


### Where
https://github.com/eddiewebb/studio-light

### How
Hangouts, Slack, Zoom, whatever. Please open issue at the repo and we can coordinate time.


### Technology
Golang based CLI loads status from Google Calendars via API. (Handling oauth). Uses status to map color and send to a "Blynclight".  I'd like to remove the hid based modulesm and maybe even interact with a cheaper/homemade LED fixture.
