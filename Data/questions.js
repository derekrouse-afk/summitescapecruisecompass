const questions = [

{
    id: 1,
    question: "Who are you traveling with? 👥",
    answers: [
        {
            text: "Just Me 👤",
            profile: {
                solo: 10,
                adults: 9,
                relaxation: 6,
                nightlife: 6
            }
        },
        {
            text: "My Partner 💑",
            profile: {
                romance: 10,
                luxury: 8,
                dining: 8,
                adults: 8
            }
        },
        {
            text: "Family with Young Children 👨‍👩‍👧",
            profile: {
                family: 10,
                kids: 10,
                entertainment: 9,
                relaxation: 6
            }
        },
        {
            text: "Family with Teenagers 👩‍👧‍👦",
            profile: {
                family: 10,
                teens: 10,
                adventure: 8,
                entertainment: 8
            }
        },
        {
            text: "Friends 🎉",
            profile: {
                nightlife: 10,
                entertainment: 9,
                adventure: 8,
                adults: 7
            }
        },
        {
            text: "Multi Generational Family 👪",
            profile: {
                family: 10,
                relaxation: 8,
                entertainment: 7,
                dining: 7
            }
        }
    ]
},

{
    id: 2,
    question: "What sounds like your perfect vacation? 🌴",
    answers: [
        {
            text: "Adventure Every Day 🧗",
            profile: {
                adventure: 10,
                excursions: 9,
                entertainment: 8
            }
        },
        {
            text: "Relax and Recharge 🧘",
            profile: {
                relaxation: 10,
                luxury: 8,
                dining: 7
            }
        },
        {
            text: "Luxury and Indulgence 💎",
            profile: {
                luxury: 10,
                premium: 10,
                dining: 9
            }
        },
        {
            text: "Family Fun 🎈",
            profile: {
                family: 10,
                kids: 9,
                entertainment: 9,
                dining: 7
            }
        },
        {
            text: "Explore New Cultures 🌍",
            profile: {
                excursions: 10,
                adventure: 7,
                relaxation: 6
            }
        },
        {
            text: "A Little Bit of Everything 🌀",
            profile: {
                adventure: 6,
                relaxation: 6,
                entertainment: 6,
                dining: 6
            }
        }
    ]
},

{
    id: 3,
    question: "What matters most while you're onboard? 🛳️",
    answers: [
        {
            text: "Amazing Food 🍽️",
            profile: {
                dining: 10,
                luxury: 7,
                relaxation: 5
            }
        },
        {
            text: "Activities 🧗‍♂️",
            profile: {
                adventure: 9,
                entertainment: 9,
                excursions: 8
            }
        },
        {
            text: "Relaxation 🛀",
            profile: {
                relaxation: 10,
                luxury: 6,
                premium: 6
            }
        },
        {
            text: "Nightlife 🎶",
            profile: {
                nightlife: 10,
                entertainment: 9,
                adults: 8
            }
        },
        {
            text: "Entertainment 🎭",
            profile: {
                entertainment: 10,
                nightlife: 8,
                family: 7
            }
        },
        {
            text: "Exceptional Service ⭐",
            profile: {
                luxury: 9,
                premium: 10,
                relaxation: 8
            }
        }
    ]
},

{
    id: 4,
    question: "How much does budget matter? 💰",
    answers: [
        {
            text: "Price is the biggest factor 💵",
            profile: {
                budget: 10,
                family: 8,
                entertainment: 7
            }
        },
        {
            text: "Value with comfort 🛋️",
            profile: {
                budget: 8,
                premium: 6,
                relaxation: 7
            }
        },
        {
            text: "I want a premium experience 💎",
            profile: {
                budget: 3,
                luxury: 10,
                premium: 10
            }
        },
        {
            text: "I want a balance of cost and quality ⚖️",
            profile: {
                budget: 7,
                luxury: 7,
                dining: 7
            }
        }
    ]
},

{
    id: 5,
    question: "What kind of dining experience do you want? 🍽️",
    answers: [
        {
            text: "Casual and plentiful 🍔",
            profile: {
                dining: 8,
                family: 8,
                budget: 8
            }
        },
        {
            text: "Fine dining and chef experiences 🍷",
            profile: {
                dining: 10,
                luxury: 9,
                premium: 9
            }
        },
        {
            text: "Specialty restaurants and tasting menus 🍣",
            profile: {
                dining: 9,
                luxury: 8,
                premium: 10
            }
        },
        {
            text: "Flexible dining with lots of options 🥗",
            profile: {
                dining: 9,
                entertainment: 8,
                adults: 8
            }
        }
    ]
},

{
    id: 6,
    question: "Which atmosphere do you prefer in the evenings? 🌙",
    answers: [
        {
            text: "Party and nightlife 🎉",
            profile: {
                nightlife: 10,
                entertainment: 9,
                adults: 9
            }
        },
        {
            text: "Quiet and romantic 🌹",
            profile: {
                romance: 10,
                relaxation: 8,
                luxury: 8
            }
        },
        {
            text: "Family shows and activities 🎪",
            profile: {
                family: 10,
                entertainment: 9,
                kids: 9
            }
        },
        {
            text: "Elegant dining and live music 🎼",
            profile: {
                dining: 9,
                relaxation: 7,
                luxury: 8
            }
        }
    ]
},

{
    id: 7,
    question: "What type of shore excursions appeal to you? 🏞️",
    answers: [
        {
            text: "Active adventures 🧗‍♀️",
            profile: {
                adventure: 10,
                excursions: 10,
                entertainment: 7
            }
        },
        {
            text: "Scenic sightseeing 🏞️",
            profile: {
                relaxation: 8,
                excursions: 9,
                luxury: 6
            }
        },
        {
            text: "Cultural discovery 🏛️",
            profile: {
                excursions: 10,
                adventure: 7,
                relaxation: 5
            }
        },
        {
            text: "Beach days and ease 🏖️",
            profile: {
                relaxation: 10,
                family: 8,
                adults: 6
            }
        }
    ]
},

{
    id: 8,
    question: "What cabin experience do you want? 🛌",
    answers: [
        {
            text: "Large suite or balcony 🛌",
            profile: {
                luxury: 10,
                relaxation: 9,
                premium: 9
            }
        },
        {
            text: "Affordable and cozy 🛋️",
            profile: {
                budget: 10,
                family: 8,
                relaxation: 6
            }
        },
        {
            text: "Adults-only retreat 🍸",
            profile: {
                adults: 10,
                luxury: 8,
                relaxation: 8
            }
        },
        {
            text: "Family-friendly suite 🧸",
            profile: {
                family: 10,
                kids: 9,
                entertainment: 8
            }
        }
    ]
},

{
    id: 9,
    question: "How do you feel about formal nights? 🎩",
    answers: [
        {
            text: "I love dressing up 👗",
            profile: {
                luxury: 9,
                romance: 8,
                premium: 8
            }
        },
        {
            text: "I prefer casual vibes 👟",
            profile: {
                nightlife: 8,
                entertainment: 8,
                relaxation: 7
            }
        },
        {
            text: "A mix of both is ideal 🔄",
            profile: {
                luxury: 7,
                family: 7,
                adults: 7
            }
        },
        {
            text: "No formal nights please 🙅",
            profile: {
                relaxation: 9,
                budget: 8,
                entertainment: 6
            }
        }
    ]
},

{
    id: 10,
    question: "What pace do you want on board? ⚡",
    answers: [
        {
            text: "Non-stop action ⚡",
            profile: {
                adventure: 9,
                nightlife: 9,
                entertainment: 10
            }
        },
        {
            text: "Relaxed and easy 🌊",
            profile: {
                relaxation: 10,
                luxury: 8,
                dining: 7
            }
        },
        {
            text: "Structured activities 📅",
            profile: {
                family: 9,
                entertainment: 9,
                excursions: 8
            }
        },
        {
            text: "Flexible, little bit of everything 🎯",
            profile: {
                adventure: 7,
                relaxation: 7,
                entertainment: 7,
                dining: 7
            }
        }
    ]
},

{
    id: 11,
    question: "Which age group should onboard options support? 👨‍👩‍👧‍👦",
    answers: [
        {
            text: "All Ages 👨‍👩‍👧‍👦",
            profile: {
                family: 10,
                kids: 8,
                teens: 8,
                entertainment: 8,
                relaxation: 7
            }
        },
        {
            text: "Adults only 🍹",
            profile: {
                adults: 10,
                romance: 8,
                nightlife: 8,
                luxury: 7,
                relaxation: 7
            }
        }
    ]
},

{
    id: 12,
    question: "What kind of cruise atmosphere fits you best? 🌟",
    answers: [
        {
            text: "Modern, trendy, and social 🌟",
            profile: {
                nightlife: 10,
                entertainment: 9,
                adults: 8
            }
        },
        {
            text: "Upscale and luxurious ✨",
            profile: {
                luxury: 10,
                premium: 10,
                relaxation: 9
            }
        },
        {
            text: "Classic, calm, and refined 🌿",
            profile: {
                relaxation: 10,
                adults: 9,
                romance: 8
            }
        },
        {
            text: "Fun and affordable for everyone 🎈",
            profile: {
                budget: 10,
                family: 10,
                entertainment: 9
            }
        }
    ]
}

];