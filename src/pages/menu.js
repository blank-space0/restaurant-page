export class Menu {
    constructor(content) {
        this.content = content;

        if (!this.content) {
            throw new Error("content ID was not found.");
        }
    }

    // remember
    // .append() -> adds element as a child
    // .after() -> adds element as a sibling
    makePage() {
        // make our info div
        const info = document.createElement("div");
        info.classList.add("info");
        const infoText = document.createElement("p");
        infoText.textContent = "Try one of our dishes!";
        info.append(infoText);

        // make our featured div
        // the cards will go in here
        const featured = document.createElement("div");
        featured.classList.add("featured");

        let ids = ["margherita", "burger", "sushi"];
        for (let id of ids) {
            const card = document.createElement("div");
            card.classList.add("food-card");
            card.id = id;
            featured.appendChild(card);
        }

        this.content.append(info, featured);
    }
} 