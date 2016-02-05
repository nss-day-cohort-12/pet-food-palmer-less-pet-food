# pet-food-palmer-less-pet-food

This project created a single page application for a pet food company that displays various types, volumes, and prices of cat and dog food. Our code employs XMLHttpRequests to access JSON files containing basic information about the types of dog food and cat food available for purchase.

When the page loads the two JSON files containing product information, dog-food.json and cat-food.json, two functions are executed that display the product information to the page inside DOM elements. Each type of dog food or cat food has its own div element that is dynamically inserted onto the page.

The page uses event listeners that make classList changes to DOM elements. This allows the user to view only cat food, or only dog food, on the page based on a selection. 

