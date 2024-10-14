browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    let url = new URL(details.url);
    if (url.pathname === "/watch" && url.searchParams.has("v")) {
      let videoId = url.searchParams.get("v");
      return {
        redirectUrl: `https://lwytui.github.io/watch.html?id=${videoId}`
      };
    }
  },
  {urls: ["*://www.youtube.com/watch?v=*"]},
  ["blocking"]
);
