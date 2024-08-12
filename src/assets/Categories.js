export const colors = {
    COLOR_PRIMARY: "#f96163",
    COLOR_LIGHT: "#fff",
    COLOR_DARK: "#000",
    COLOR_DARK_ALT: "#262626"
};

export const categories = [
    {
        id: "01",
        category: "Breakfast"
    },
    {
        id: "02",
        category: "Lunch"
    },
    {
        id: "03",
        category: "Dinner"
    },
    {
        id: "04",
        category: "Asian"
    },
    {
        id: "05",
        category: "Italian"
    },
    {
        id: "06",
        category: "Desserts"
    },
    {
        id: "07",
        category: "Vegetarian"
    },
    {
        id: "08",
        category: "Seafood"
    },
];

export const recipeList = [
    {
        id: "01",
        name: "Tuna Tartare",
        image: require("../assets/Images/tuna_tartare.jpg"),
        rating: "4.2",
        ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
        time: "40 mins",
        difficulty: "Medium",
        calories: "420 cal",
        color: "#FF6347", // Tomato color
        description: "A refreshing and flavorful dish, Tuna Tartare is made with fresh tuna marinated in lime juice, served with diced avocado and red onion.",
        steps: [
            "Dice the fresh tuna into small cubes.",
            "Mix the lime juice, finely chopped red onion, and a pinch of salt in a bowl.",
            "Add the tuna to the mixture and marinate for 15 minutes.",
            "Serve with diced avocado and garnish with cilantro."
        ]
    },
    {
        id: "02",
        name: "Lasagna",
        image: require("../assets/Images/lasagna.jpg"),
        rating: "3.6",
        ingredients: ["Lasagna Noodles", "Chicken", "Ricotta Cheese", "Tomato Sauce"],
        time: "40 mins",
        difficulty: "Medium",
        calories: "420 cal",
        color: "#D2691E", // Chocolate color
        description: "A classic Italian dish, this Lasagna is made with layers of chicken, ricotta cheese, and rich tomato sauce.",
        steps: [
            "Preheat the oven to 375°F (190°C).",
            "Cook the lasagna noodles according to package instructions.",
            "Layer the noodles, cooked chicken, ricotta cheese, and tomato sauce in a baking dish.",
            "Bake for 30 minutes until the cheese is melted and bubbly.",
            "Let it cool slightly before serving."
        ]
    },
    {
        id: "03",
        name: "Hot Dog",
        image: require("../assets/Images/hot_dog.jpg"),
        rating: "4.6",
        ingredients: ["Hot Dog Buns", "Frankfurters", "Ketchup", "Mustard"],
        time: "40 mins",
        difficulty: "Medium",
        calories: "420 cal",
        color: "#FF4500", // Orange Red color
        description: "An American classic, Hot Dogs are quick and easy to make, perfect for a casual meal or a summer barbecue.",
        steps: [
            "Grill or boil the frankfurters until fully cooked.",
            "Place the frankfurters in the hot dog buns.",
            "Add ketchup and mustard to taste.",
            "Optionally, top with relish, onions, or other condiments."
        ]
    },
    {
        id: "04",
        name: "Manchurian",
        image: require("../assets/Images/manchurian.jpg"),
        rating: "3.6",
        ingredients: ["Cauliflower", "Soy Sauce", "Ginger", "Garlic"],
        time: "30 mins",
        difficulty: "Medium",
        calories: "420 cal",
        color: "#32CD32", // Lime Green color
        description: "A popular Indo-Chinese dish, Manchurian features crispy cauliflower florets tossed in a savory, spicy sauce.",
        steps: [
            "Chop the cauliflower into bite-sized florets and lightly fry until golden brown.",
            "In a pan, sauté ginger and garlic in oil until fragrant.",
            "Add soy sauce and chili sauce to the pan and mix well.",
            "Toss the fried cauliflower in the sauce until fully coated.",
            "Garnish with spring onions and serve hot."
        ]
    },
    {
        id: "05",
        name: "Chicken Caesar Salad",
        image: require("../assets/Images/chicken-caesar-salad.jpg"),
        rating: "4.5",
        ingredients: ["Grilled Chicken Breast", "Romaine Lettuce", "Caesar Dressing", "Parmesan Cheese", "Croutons"],
        time: "25 mins",
        difficulty: "Easy",
        calories: "360 cal",
        color: "#66661e", // Light Yellow color
        description: "A light yet satisfying meal, Chicken Caesar Salad combines grilled chicken, fresh romaine lettuce, and a creamy Caesar dressing.",
        steps: [
            "Grill the chicken breast and slice it into strips.",
            "Toss the romaine lettuce with Caesar dressing in a large bowl.",
            "Top the salad with the grilled chicken, croutons, and shaved Parmesan cheese.",
            "Serve chilled or at room temperature."
        ]
    },
    {
        id: "06",
        name: "Spaghetti Carbonara",
        image: require("../assets/Images/carbonara.jpg"),
        rating: "4.7",
        ingredients: ["Spaghetti", "Pancetta", "Egg Yolks", "Parmesan Cheese", "Black Pepper"],
        time: "30 mins",
        difficulty: "Medium",
        calories: "500 cal",
        color: "#F5DEB3", // Wheat color
        description: "Spaghetti Carbonara is a rich and creamy pasta dish made with pancetta, egg yolks, Parmesan cheese, and black pepper.",
        steps: [
            "Cook the spaghetti according to package instructions.",
            "In a pan, fry the pancetta until crispy.",
            "In a bowl, whisk the egg yolks with grated Parmesan cheese.",
            "Drain the spaghetti and immediately toss it with the pancetta and egg mixture.",
            "Season with black pepper and serve hot."
        ]
    },
    {
        id: "07",
        name: "Grilled Salmon",
        image: require("../assets/Images/Asparagus.webp"),
        rating: "4.6",
        ingredients: ["Salmon Fillets", "Asparagus", "Olive Oil", "Lemon", "Garlic"],
        time: "30 mins",
        difficulty: "Easy",
        calories: "430 cal",
        color: "#FFA07A", // Light Salmon color
        description: "Grilled Salmon is a healthy and delicious dish, paired with roasted asparagus and a zesty lemon garlic sauce.",
        steps: [
            "Preheat the grill to medium-high heat.",
            "Season the salmon fillets with olive oil, salt, and pepper.",
            "Grill the salmon for 4-5 minutes on each side until fully cooked.",
            "Roast the asparagus in the oven with olive oil, salt, and pepper for 10-12 minutes.",
            "Serve the salmon with the asparagus and a drizzle of lemon garlic sauce."
        ]
    },
    {
        id: "08",
        name: "Vegetable Paella",
        image: require("../assets/Images/Paella.jpg"),
        rating: "4.4",
        ingredients: ["Arborio Rice", "Bell Peppers", "Green Beans", "Tomatoes", "Saffron", "Garlic"],
        time: "50 mins",
        difficulty: "Hard",
        calories: "380 cal",
        color: "#FFD700", // Gold color
        description: "A vibrant and hearty dish, Vegetable Paella is a Spanish classic made with saffron-infused rice and a variety of colorful vegetables.",
        steps: [
            "In a large pan, sauté garlic and bell peppers in olive oil until softened.",
            "Add Arborio rice and saffron to the pan and stir to coat the rice.",
            "Pour in vegetable broth and bring to a simmer.",
            "Add the green beans and tomatoes, and let the paella cook uncovered until the rice is tender.",
            "Garnish with fresh parsley and serve hot."
        ]
    }
    
]