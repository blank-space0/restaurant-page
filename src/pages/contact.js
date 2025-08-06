export class Contact {
    constructor(content) {
        this.content = content;
    }

    makePage() {
        const basicInfo = document.createElement("div");
        const basicTitle = document.createElement("p");
        const phone = document.createElement("p");
        const email = document.createElement("p");
        const address = document.createElement("p");

        basicTitle.textContent = "Get in touch!";
        phone.textContent = "Phone: 999-999-9999";
        email.textContent = "Email: john.doe@gmail.com";
        address.textContent = "Address: 123 Skyline Avenue, New York 10001";

        basicInfo.classList.add("basic-info");
        basicTitle.classList.add("title");
        basicInfo.append(basicTitle, phone, email, address);

        const hours = document.createElement("div");
        const hoursTitle = document.createElement("p");
        const weekdays = document.createElement("p");
        const weekends = document.createElement("p");

        hoursTitle.textContent = "hours";
        weekdays.textContent = "Mon - Fri: 11 AM - 9 PM";
        weekends.textContent = "Weekends: 12 PM - 2 AM";

        hours.classList.add("hours")
        hoursTitle.classList.add("title");
        hours.append(hoursTitle, weekdays, weekends);
        this.content.append(basicInfo, hours);
    }
}