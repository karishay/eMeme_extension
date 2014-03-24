//this function checks if you are on gmail and displays eMeme icon in browser
function isUrlGmail(tabId, changeInfo, tab){
    console.log("I'm in your browser browsing your brow...sing?");
    if (tab.url.indexOf('mail.google.com')> -1){
        chrome.pageAction.show(tabId);
    }
};
// listen for url changes on any tab.
chrome.tabs.onUpdated.addListener(isUrlGmail);

//This function logs the selected text upon clicking the context menu item
function onClickHandler(info, tab) {
  document.getElementsByTagName('body')[0].innerHTML+= info.selectionText;
  console.log(info.selectionText)
};


chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  var contexts = ["page","selection","link","editable","image","video",
                  "audio"];
  var id = chrome.contextMenus.create({"title": "This is the title for my context Menu that listens to selections",
                                        "contexts": [contexts[1]],"id": "parent"});

});


//TODO: either rebuild this or get it working better. it works in the console, 
//but not in the extension. See if it's related to background page vs content script

            // function isReplyBoxOpen(){
            //     var pants = $('.editable');
            //     console.log(pants);
            //     if ($('.editable').length > 1){
            //         console.log("Yep, your reply box is open.");
            //         pants.innerHTML = '<img onload="src="https://images.nga.gov/?service=asset&action=show_preview&asset=19750">'

            //     }else{
            //         console.log("nope, not working.")
            //     }
            // };
            // chrome.tabs.onClicked.addListener(isReplyBoxOpen);

