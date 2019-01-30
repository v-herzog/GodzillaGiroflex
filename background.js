const myAudio = new Audio(chrome.runtime.getURL("audio/roar.mp3"));

chrome.commands.onCommand.addListener(function (command) {
    if (command === "copy" || command === "paste") {
        chrome.tabs.insertCSS(null, { file: "css/spin.css" })
        myAudio.play();
        setTimeout(function() {
            chrome.tabs.insertCSS(null, { file: "css/stop.css" })
        }, 1000)
    }
});