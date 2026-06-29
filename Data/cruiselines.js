const cruiseLines = [

/* ============================================
   CONTEMPORARY CRUISE LINES
============================================ */

{
    id: "royal-caribbean",

    name: "Royal Caribbean",

    category: "Contemporary",

    description: "The world's largest cruise line, offering innovative ships packed with adventure, entertainment, and activities for every generation.",

    bestFor: [
        "Families",
        "Groups",
        "Adventure Seekers",
        "First Time Cruisers"
    ],

    destinations: [
        "Caribbean",
        "Bahamas",
        "Alaska",
        "Mediterranean",
        "Northern Europe",
        "Australia",
        "Asia"
    ],

    ships: [
        "Icon of the Seas",
        "Star of the Seas",
        "Wonder of the Seas",
        "Utopia of the Seas",
        "Oasis of the Seas"
    ],

    scores: {
        luxury: 7,
        family: 9,
        adults: 8,
        nightlife: 10,
        relaxation: 7,
        adventure: 10,
        entertainment: 10,
        dining: 8,
        romance: 8,
        budget: 7,
        premium: 8,
        kids: 10,
        teens: 10,
        solo: 8,
        excursions: 9
    }
},

{
    id: "carnival",

    name: "Carnival Cruise Line",

    category: "Contemporary",

    description: "Fun, energetic vacations focused on value, entertainment, and memorable family experiences.",

    bestFor: [
        "Families",
        "Friends",
        "Budget Travelers",
        "First Time Cruisers"
    ],

    destinations: [
        "Caribbean",
        "Bahamas",
        "Mexico",
        "Alaska",
        "Europe"
    ],

    ships: [
        "Jubilee",
        "Celebration",
        "Mardi Gras",
        "Vista",
        "Panorama"
    ],

    scores: {
        luxury: 4,
        family: 10,
        adults: 7,
        nightlife: 10,
        relaxation: 8,
        adventure: 8,
        entertainment: 10,
        dining: 8,
        romance: 7,
        budget: 10,
        premium: 6,
        kids: 10,
        teens: 10,
        solo: 8,
        excursions: 8
    }
},

{
    id: "norwegian",

    name: "Norwegian Cruise Line",

    category: "Contemporary",

    description: "Freestyle Cruising with flexible dining, lively entertainment, and something for everyone.",

    bestFor: [
        "Couples",
        "Families",
        "Groups",
        "Solo Travelers"
    ],

    destinations: [
        "Caribbean",
        "Alaska",
        "Mediterranean",
        "Northern Europe",
        "Hawaii",
        "Asia"
    ],

    ships: [
        "Norwegian Aqua",
        "Norwegian Viva",
        "Norwegian Prima",
        "Norwegian Encore",
        "Norwegian Bliss"
    ],

    scores: {
        luxury: 7,
        family: 8,
        adults: 8,
        nightlife: 8,
        relaxation: 8,
        adventure: 8,
        entertainment: 9,
        dining: 9,
        romance: 7,
        budget: 9,
        premium: 8,
        kids: 8,
        teens: 8,
        solo: 9,
        excursions: 8
    }
},

{
    id: "msc",

    name: "MSC Cruises",

    category: "Contemporary",

    description: "European-inspired cruising offering stylish ships, international experiences, and exceptional value.",

    bestFor: [
        "Families",
        "Couples",
        "International Travelers",
        "Value Seekers"
    ],

    destinations: [
        "Mediterranean",
        "Caribbean",
        "Northern Europe",
        "Middle East",
        "South America"
    ],

    ships: [
        "MSC World America",
        "MSC World Europa",
        "MSC Seascape",
        "MSC Euribia",
        "MSC Seashore"
    ],

    scores: {
        luxury: 7,
        family: 10,
        adults: 5,
        nightlife: 5,
        relaxation: 8,
        adventure: 8,
        entertainment: 10,
        dining: 9,
        romance: 6,
        budget: 4,
        premium: 8,
        kids: 10,
        teens: 10,
        solo: 3,
        excursions: 8
    }
},

{
    id: "disney",

    name: "Disney Cruise Line",

    category: "Contemporary",

    description: "World-class family cruising with Disney storytelling, exceptional service, and magical experiences for all ages.",

    bestFor: [
        "Families",
        "Disney Fans",
        "Multi-Generational Travel"
    ],

    destinations: [
        "Caribbean",
        "Bahamas",
        "Alaska",
        "Mediterranean",
        "Northern Europe",
        "Australia"
    ],

    ships: [
        "Disney Adventure",
        "Disney Treasure",
        "Disney Wish",
        "Disney Fantasy",
        "Disney Dream"
    ],

    scores: {
        luxury: 9,
        family: 0,
        adults: 10,
        nightlife: 10,
        relaxation: 8,
        adventure: 7,
        entertainment: 9,
        dining: 10,
        romance: 10,
        budget: 5,
        premium: 9,
        kids: 0,
        teens: 0,
        solo: 9,
        excursions: 8
    }
},

{
    id: "virgin",

    name: "Virgin Voyages",

    category: "Contemporary",

    description: "Adults-only cruising with elevated dining, vibrant nightlife, and a fresh, modern atmosphere.",

    bestFor: [
        "Couples",
        "Adults",
        "Food Lovers",
        "Nightlife"
    ],

    destinations: [
        "Caribbean",
        "Mediterranean",
        "Greece",
        "Europe"
    ],

    ships: [
        "Scarlet Lady",
        "Valiant Lady",
        "Resilient Lady",
        "Brilliant Lady"
    ],

    scores: {
        luxury: 9,
        family: 0,
        adults: 10,
        nightlife: 10,
        relaxation: 8,
        adventure: 7,
        entertainment: 9,
        dining: 10,
        romance: 10,
        budget: 5,
        premium: 9,
        kids: 0,
        teens: 0,
        solo: 9,
        excursions: 8
    }
},

/* ============================================
   PREMIUM CRUISE LINES
============================================ */

{
    id: "celebrity",

    name: "Celebrity Cruises",

    category: "Premium",

    description: "Modern luxury with award-winning dining, sophisticated design, and exceptional service.",

    bestFor: [
        "Couples",
        "Luxury Travelers",
        "Food Lovers"
    ],

    destinations: [
        "Caribbean",
        "Mediterranean",
        "Alaska",
        "Europe",
        "Galapagos"
    ],

    ships: [
        "Celebrity Xcel",
        "Celebrity Ascent",
        "Celebrity Beyond",
        "Celebrity Apex",
        "Celebrity Edge"
    ],

    scores: {
        luxury: 9,
        family: 4,
        adults: 10,
        nightlife: 7,
        relaxation: 9,
        adventure: 7,
        entertainment: 8,
        dining: 10,
        romance: 10,
        budget: 5,
        premium: 10,
        kids: 3,
        teens: 4,
        solo: 8,
        excursions: 9
    }
},

{
    id: "princess",

    name: "Princess Cruises",

    category: "Premium",

    description: "Destination-focused cruising known for outstanding Alaska itineraries, relaxing atmosphere, and exceptional service.",

    bestFor: [
        "Couples",
        "Retirees",
        "Alaska",
        "Destination Lovers"
    ],

    destinations: [
        "Alaska",
        "Mediterranean",
        "Caribbean",
        "Japan",
        "Australia",
        "South Pacific"
    ],

    ships: [
        "Sun Princess",
        "Star Princess",
        "Discovery Princess",
        "Enchanted Princess",
        "Sky Princess"
    ],

    scores: {
        luxury: 8,
        family: 7,
        adults: 9,
        nightlife: 5,
        relaxation: 10,
        adventure: 7,
        entertainment: 7,
        dining: 9,
        romance: 9,
        budget: 6,
        premium: 9,
        kids: 6,
        teens: 5,
        solo: 7,
        excursions: 10
    }
},

{
    id: "holland-america",

    name: "Holland America Line",

    category: "Premium",

    description: "Classic cruising featuring immersive itineraries, refined dining, and outstanding service.",

    bestFor: [
        "Adults",
        "Alaska",
        "Food Lovers",
        "Longer Voyages"
    ],

    destinations: [
        "Alaska",
        "Europe",
        "Caribbean",
        "South America",
        "Antarctica"
    ],

    ships: [
        "Rotterdam",
        "Nieuw Statendam",
        "Koningsdam",
        "Eurodam"
    ],

    scores: {
        luxury: 8,
        family: 3,
        adults: 10,
        nightlife: 4,
        relaxation: 10,
        adventure: 7,
        entertainment: 6,
        dining: 9,
        romance: 8,
        budget: 7,
        premium: 9,
        kids: 2,
        teens: 3,
        solo: 8,
        excursions: 10
    }
},

{
    id: "cunard",

    name: "Cunard",

    category: "Premium",

    description: "Elegant ocean voyages steeped in tradition, featuring White Star Service and iconic transatlantic crossings.",

    bestFor: [
        "Luxury",
        "Formal Evenings",
        "World Cruises",
        "Couples"
    ],

    destinations: [
        "Transatlantic",
        "Europe",
        "Mediterranean",
        "Caribbean",
        "World Cruises"
    ],

    ships: [
        "Queen Anne",
        "Queen Mary 2",
        "Queen Victoria",
        "Queen Elizabeth"
    ],

    scores: {
        luxury: 10,
        family: 3,
        adults: 10,
        nightlife: 6,
        relaxation: 10,
        adventure: 5,
        entertainment: 8,
        dining: 9,
        romance: 10,
        budget: 3,
        premium: 10,
        kids: 2,
        teens: 2,
        solo: 9,
        excursions: 8
    }
}

];