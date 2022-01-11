console.log('My script is now activated!!!')
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            var firstHref = $('iframe')[0].src

            console.log(firstHref);
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
        }
    }
);