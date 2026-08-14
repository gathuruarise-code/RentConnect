// ========================================
// RENTCONNECT PROPERTY DATA
// ========================================

const properties = {

    1: {
        title: "Modern 1 Bedroom Apartment",
        location: "Westlands, Nairobi",
        price: "KSh 25,000 / month",
        image: "images/house1.jpg",
        description:
            "A spacious modern one-bedroom apartment in Westlands with parking, security and reliable water."
    },

    2: {
        title: "2 Bedroom Apartment",
        location: "Kilimani, Nairobi",
        price: "KSh 35,000 / month",
        image: "images/house2.jpg",
        description:
            "A modern two-bedroom apartment located close to shops, restaurants and public transport."
    },

    3: {
        title: "Affordable Bedsitter",
        location: "Kasarani, Nairobi",
        price: "KSh 10,000 / month",
        image: "images/house3.jpg",
        description:
            "An affordable and secure bedsitter suitable for students and young professionals."
    }

};


// ========================================
// LOAD PROPERTY DETAILS
// ========================================

const urlParams = new URLSearchParams(
    window.location.search
);

const propertyId = urlParams.get("id");

const property = properties[propertyId];


if (property) {

    document.getElementById("property-title").textContent =
        property.title;

    document.getElementById("property-location").textContent =
        "📍 " + property.location;

    document.getElementById("property-price").textContent =
        property.price;

    document.getElementById("property-description").textContent =
        property.description;

    document.getElementById("property-image").src =
        property.image;

}
