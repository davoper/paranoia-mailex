import { callCalculateParanoiaLevel } from "./overlay.js";

browser.messageDisplay.onMessageDisplayed.addListener((tab, msg) => {
	//console.log(`Message displayed in tab ${tab.id}: ${msg.subject}`);
	callCalculateParanoiaLevel(msg);
});

