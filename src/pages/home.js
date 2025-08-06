export class Home {
  constructor(content) {
    this.content = content;
  }

  makePage() {
    const homeImg = document.createElement("div");
    homeImg.id = "home-img";

    const overlayTxt = document.createElement("div");
    overlayTxt.textContent = "Flora";
    overlayTxt.classList.add("overlay-text");

    homeImg.append(overlayTxt);
    this.content.append(homeImg);

    // Now, tell the browser its time to animate our dom node
    requestAnimationFrame(() => {
        // defined in our css
        overlayTxt.classList.add("fade-in");
    });
  }
}
