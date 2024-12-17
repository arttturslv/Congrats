export function formataURL(youtubeURL) {
    var newURL;
    try {
        newURL = new URL(youtubeURL);
    } catch {
        return null;
    }

    let Code = newURL.searchParams.get('v') || newURL.pathname;
    let CodeWithoutBars = Code.replace("embed", "");
    let CodeFinal = CodeWithoutBars.replaceAll("/", "");

    if(CodeFinal) {
      let yt = "https://www.youtube.com/embed/"+CodeFinal;
      return yt;
    } 

    return youtubeURL;
  }