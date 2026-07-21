/**
 * ============================================================
 *  MENU DATA — All menu items live here.
 *  Each category has a name and an array of items.
 * ============================================================
 */

const menuData = [
  {
    category: "Breakfast",
    id: "breakfast",
    items: [
      {
        id: 1,
        name: "Classic Pancakes",
        description: "Fluffy buttermilk pancakes served with maple syrup and fresh berries.",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
      },
      {
        id: 2,
        name: "Eggs Benedict",
        description: "Poached eggs on English muffins with hollandaise sauce and smoked salmon.",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1608039829572-a1068d0e0e70?w=400&h=300&fit=crop",
      },
      {
        id: 3,
        name: "Avocado Toast",
        description: "Sourdough bread topped with mashed avocado, cherry tomatoes, and microgreens.",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    category: "Lunch",
    id: "lunch",
    items: [
      {
        id: 4,
        name: "Grilled Salmon",
        description: "Atlantic salmon fillet grilled to perfection with lemon herb butter.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
      },
      {
        id: 5,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce, croutons, parmesan, and our house-made Caesar dressing.",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      },
      {
        id: 6,
        name: "Wagyu Burger",
        description: "Premium Wagyu beef patty with aged cheddar, caramelized onions, and truffle aioli.",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    category: "Dinner",
    id: "dinner",
    items: [
      {
        id: 7,
        name: "Filet Mignon",
        description: "8oz center-cut filet, sous vide then seared, with red wine reduction.",
        price: 42.99,
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop",
      },
      {
        id: 8,
        name: "Lobster Risotto",
        description: "Creamy arborio rice with butter-poached lobster tail and truffle oil.",
        price: 38.99,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop",
      },
      {
        id: 9,
        name: "Duck Confit",
        description: "Slow-cooked duck leg with roasted root vegetables and cherry gastrique.",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1432139509613-5c4255a78e0f?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    category: "Desserts",
    id: "desserts",
    items: [
      {
        id: 10,
        name: "Crème Brûlée",
        description: "Classic French custard with a perfectly caramelized sugar top.",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop",
      },
      {
        id: 11,
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a molten center, served with vanilla ice cream.",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
      },
      {
        id: 12,
        name: "Tiramisu",
        description: "Layers of espresso-soaked ladyfingers and mascarpone cream dusted with cocoa.",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    category: "Drinks",
    id: "drinks",
    items: [
      {
        id: 13,
        name: "Signature Cocktail",
        description: "Our mixologist's special creation with premium spirits and fresh juices.",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
      },
      {
        id: 14,
        name: "Artisan Coffee",
        description: "Single-origin pour-over coffee brewed to perfection.",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      },
      {
        id: 15,
        name: "Fresh Juice",
        description: "Cold-pressed organic juice blend — orange, carrot, ginger, and turmeric.",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=300&fit=crop",
      },
    ],
  },
];

export default menuData;
