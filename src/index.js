import "./styles.css";
import { Home } from "./pages/home.js";
import { Menu } from "./pages/menu.js";
import { Contact } from "./pages/contact.js";

class Main {
    constructor() {
        this.content = document.getElementById("content");
        this.buttons = document.querySelectorAll(".btn");
        this.home = new Home(this.content);
        this.menu = new Menu(this.content);
        this.contact = new Contact(this.content);

        this.init();
    }

    init() {
        this.home.makePage();

        // add event listeners to all buttons
        this.buttons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = e.currentTarget.id;
                if (id === "home") {
                    this.content.replaceChildren();
                    this.content.className = "home";
                    this.home.makePage();
                }
                if (id === "menu") {
                    this.content.replaceChildren();
                    this.content.className = "menu";
                    this.menu.makePage();
                }
                if (id === "contact") {
                    this.content.replaceChildren();
                    this.content.className = "contact";
                    this.contact.makePage();
                }
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const main = new Main();
});