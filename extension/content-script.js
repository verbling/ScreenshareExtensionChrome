// https://chromeextensionsdocs.appspot.com/apps/content_scripts#host-page-communication
//   - 'content_script' and execution env are isolated from each other
//   - In order to communicate we use the DOM (window.postMessage)
//
// "OurClientApp.js" |        |content-script.js |      |background.js
// window.postMessage|------->|port.postMessage  |----->| port.onMessage
//                   | window |                  | port |
// webkitGetUserMedia|<------ |window.postMessage|<-----| port.postMessage
//

var port = chrome.runtime.connect(chrome.runtime.id);

port.onMessage.addListener(function(msg) {
	window.postMessage(msg, '*');
});

window.addEventListener('message', function(event) {
	if (event.source != window) return;

	if (event.data.type && ((event.data.type === 'SS_UI_REQUEST') ||
							(event.data.type === 'SS_UI_CANCEL'))) {
		port.postMessage(event.data);
	} else if (event.data.type && ((event.data.type === 'SS_CHECK_STATUS'))) {
		window.postMessage({ type: 'SS_PING', text: 'start' }, '*');
	}
}, false);

window.postMessage({ type: 'SS_PING', text: 'start' }, '*');
