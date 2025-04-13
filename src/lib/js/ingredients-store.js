import { derived, writable } from "svelte/store";

const INGREDIENTS = [
    { "id": 1, "name": "Spaghetti", "type": "Pasta", "unit": "500g pack", "price": 3.20 },
    { "id": 2, "name": "Eggs", "type": "Dairy", "unit": "dozen", "price": 7.00 },
    { "id": 3, "name": "Pancetta", "type": "Meat", "unit": "100g", "price": 5.90 },
    { "id": 4, "name": "Parmesan Cheese", "type": "Dairy", "unit": "100g", "price": 6.50 },
    { "id": 5, "name": "Black Pepper", "type": "Spice", "unit": "50g jar", "price": 3.80 },
    { "id": 6, "name": "Broccoli", "type": "Vegetable", "unit": "head", "price": 3.50 },
    { "id": 7, "name": "Carrots", "type": "Vegetable", "unit": "1kg bag", "price": 4.20 },
    { "id": 8, "name": "Bell Peppers", "type": "Vegetable", "unit": "each", "price": 2.70 },
    { "id": 9, "name": "Garlic", "type": "Spice", "unit": "bulb", "price": 2.50 },
    { "id": 10, "name": "Soy Sauce", "type": "Condiment", "unit": "250ml bottle", "price": 3.60 },
    { "id": 11, "name": "Sesame Oil", "type": "Oil", "unit": "100ml", "price": 4.90 },
    { "id": 12, "name": "Chicken Breast", "type": "Meat", "unit": "500g", "price": 9.80 },
    { "id": 13, "name": "Yogurt", "type": "Dairy", "unit": "500g tub", "price": 5.00 },
    { "id": 14, "name": "Tomato Puree", "type": "Vegetable", "unit": "400g can", "price": 2.60 },
    { "id": 15, "name": "Garam Masala", "type": "Spice", "unit": "40g packet", "price": 3.40 },
    { "id": 16, "name": "Onion", "type": "Vegetable", "unit": "1kg bag", "price": 4.00 },
    { "id": 17, "name": "Heavy Cream", "type": "Dairy", "unit": "250ml bottle", "price": 3.80 },
    { "id": 18, "name": "Tomatoes", "type": "Vegetable", "unit": "500g", "price": 4.60 },
    { "id": 19, "name": "Cucumber", "type": "Vegetable", "unit": "each", "price": 3.00 },
    { "id": 20, "name": "Red Onion", "type": "Vegetable", "unit": "each", "price": 2.10 },
    { "id": 21, "name": "Kalamata Olives", "type": "Vegetable", "unit": "200g jar", "price": 6.80 },
    { "id": 22, "name": "Feta Cheese", "type": "Dairy", "unit": "200g", "price": 7.20 },
    { "id": 23, "name": "Olive Oil", "type": "Oil", "unit": "500ml bottle", "price": 9.50 },
    { "id": 24, "name": "Banana", "type": "Fruit", "unit": "bunch", "price": 3.90 },
    { "id": 25, "name": "Flour", "type": "Grain", "unit": "1.5kg bag", "price": 3.40 },
    { "id": 26, "name": "Milk", "type": "Dairy", "unit": "2L bottle", "price": 5.10 },
    { "id": 27, "name": "Baking Powder", "type": "Baking", "unit": "100g tin", "price": 2.30 },
    { "id": 28, "name": "Mushrooms", "type": "Vegetable", "unit": "400g", "price": 5.50 },
    { "id": 29, "name": "Vegetable Broth", "type": "Liquid", "unit": "1L carton", "price": 4.70 },
    { "id": 30, "name": "Butter", "type": "Dairy", "unit": "500g block", "price": 7.80 }
];

export const ingredientStore = writable(INGREDIENTS);

export function getIngredientById(id){
    return INGREDIENTS.find(item => item.id === id);
}