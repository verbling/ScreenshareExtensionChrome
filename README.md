# ScreenshareExtensionChrome
Chrome extension to expose https://developer.chrome.com/extensions/desktopCapture to a website script.

content-script.js acts as middle-man between background.js and the client application.


# Configuration
Edit extension/manifest.json. Replace "https://192.168.1.64:8000" in "content_scripts" and "permissions" to be the URL that hosts the client app. NOTE - client app must be served over https .

See - https://developer.chrome.com/extensions/manifest


# Installation / Testing

1. Go to chrome://extensions
2. Check "Developer mode"
3. Click "Load unpacked extension..."
4. Select the extension folder


# Reference / Documentation

Forked and only slightly modified from https://github.com/wpp/ScreenStream

See README.md there for more documentation.
