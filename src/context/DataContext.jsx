import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// Mock data for restaurants
const mockRestaurants = [
  {
    id: 1,
    name: "The Golden Spoon",
    cuisine: "Fine Dining",
    rating: 4.8,
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    address: "123 Gourmet Street, Downtown",
    phone: "+1 (555) 123-4567",
    description: "Exquisite fine dining experience with contemporary cuisine",
    tables: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      number: i + 1,
      capacity: [2, 4, 6, 8][Math.floor(Math.random() * 4)],
      status: i < 12 ? 'available' : ['reserved', 'occupied', 'cleaning'][Math.floor(Math.random() * 3)],
      x: (i % 5) * 18 + 10,
      y: Math.floor(i / 5) * 20 + 10,
      image: `https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop&crop=center`,
      type: ['window', 'corner', 'center', 'private'][Math.floor(Math.random() * 4)],
      features: ['WiFi', 'Power Outlet', 'Premium View', 'Quiet Zone']
    }))
  },
  {
    id: 2,
    name: "Sakura Sushi",
    cuisine: "Japanese",
    rating: 4.6,
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
    address: "456 Zen Garden Ave, Midtown",
    phone: "+1 (555) 234-5678",
    description: "Authentic Japanese cuisine with fresh sushi and sashimi",
    tables: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      number: i + 1,
      capacity: [2, 4, 6][Math.floor(Math.random() * 3)],
      status: i < 10 ? 'available' : ['reserved', 'occupied', 'cleaning'][Math.floor(Math.random() * 3)],
      x: (i % 5) * 18 + 10,
      y: Math.floor(i / 5) * 20 + 10,
      image: `https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop&crop=center`,
      type: ['window', 'corner', 'center', 'private'][Math.floor(Math.random() * 4)],
      features: ['WiFi', 'Sushi Bar View', 'Traditional Seating', 'Sake Pairing']
    }))
  },
  {
    id: 3,
    name: "Mama's Italian",
    cuisine: "Italian",
    rating: 4.7,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    address: "789 Pasta Lane, Little Italy",
    phone: "+1 (555) 345-6789",
    description: "Traditional Italian flavors in a cozy family atmosphere",
    tables: Array.from({ length: 18 }, (_, i) => ({
      id: i + 1,
      number: i + 1,
      capacity: [2, 4, 6, 8][Math.floor(Math.random() * 4)],
      status: i < 14 ? 'available' : ['reserved', 'occupied', 'cleaning'][Math.floor(Math.random() * 3)],
      x: (i % 6) * 15 + 8,
      y: Math.floor(i / 6) * 18 + 8,
      image: `https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop&crop=center`,
      type: ['window', 'corner', 'center', 'private'][Math.floor(Math.random() * 4)],
      features: ['WiFi', 'Wine Cellar View', 'Family Friendly', 'Romantic Ambiance']
    }))
  }
];

// Mock menu data
const mockMenuItems = {
  1: [
    {
      id: 1,
      name: "Wagyu Beef Tenderloin",
      category: "Mains",
      price: 89.99,
      description: "Premium wagyu beef with truffle sauce and seasonal vegetables",
      image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg",
      dietary: ["gluten-free"],
      chef_special: true,
      available: true
    },
    {
      id: 2,
      name: "Pan-Seared Salmon",
      category: "Mains",
      price: 32.99,
      description: "Fresh Atlantic salmon with lemon herb butter and quinoa",
      image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg",
      dietary: ["gluten-free", "healthy"],
      available: true
    },
    {
      id: 3,
      name: "Truffle Arancini",
      category: "Starters",
      price: 18.99,
      description: "Crispy risotto balls with black truffle and parmesan",
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg",
      dietary: ["vegetarian"],
      available: true
    },
    {
      id: 4,
      name: "Lobster Thermidor",
      category: "Mains",
      price: 65.99,
      description: "Fresh lobster with creamy cognac sauce and herbs",
      image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg",
      dietary: ["gluten-free"],
      available: true
    },
    {
      id: 5,
      name: "Chocolate Soufflé",
      category: "Desserts",
      price: 16.99,
      description: "Warm chocolate soufflé with vanilla ice cream",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
      dietary: ["vegetarian"],
      available: true
    }
  ],
  2: [
    {
      id: 6,
      name: "Sashimi Platter",
      category: "Sashimi",
      price: 45.99,
      description: "Fresh selection of tuna, salmon, and yellowtail",
      image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
      dietary: ["gluten-free", "healthy"],
      available: true
    },
    {
      id: 7,
      name: "Dragon Roll",
      category: "Sushi",
      price: 18.99,
      description: "Eel and cucumber topped with avocado and eel sauce",
      image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
      available: true
    },
    {
      id: 8,
      name: "Miso Soup",
      category: "Starters",
      price: 6.99,
      description: "Traditional soybean paste soup with tofu and seaweed",
      image: "https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg",
      dietary: ["vegetarian", "healthy"],
      available: true
    }
  ],
  3: [
    {
      id: 9,
      name: "Margherita Pizza",
      category: "Pizza",
      price: 22.99,
      description: "Fresh mozzarella, tomato sauce, and basil",
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
      dietary: ["vegetarian"],
      available: true
    },
    {
      id: 10,
      name: "Fettuccine Alfredo",
      category: "Pasta",
      price: 19.99,
      description: "Creamy parmesan sauce with fresh fettuccine",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      dietary: ["vegetarian"],
      available: true
    },
    {
      id: 11,
      name: "Tiramisu",
      category: "Desserts",
      price: 12.99,
      description: "Classic Italian dessert with coffee and mascarpone",
      image: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg",
      dietary: ["vegetarian"],
      available: true
    }
  ]
};

export const DataProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState(mockRestaurants);
  const [realTables, setRealTables] = useState([]); // Store real tables from backend
  const [orders, setOrders] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [cart, setCart] = useState([]);
  
  // Load tables from backend
  const loadTablesFromBackend = async (restaurantId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/restaurants/${restaurantId}/tables`);
      const result = await response.json();
      if (result.success) {
        return result.data;
      }
    } catch (error) {
      console.error('Failed to load tables:', error);
    }
    return [];
  };

  // Get tables for a restaurant (limit to 3 for customer dashboard)
  const getRestaurantTables = async (restaurantId, limit = null) => {
    const tables = await loadTablesFromBackend(restaurantId);
    return limit ? tables.slice(0, limit) : tables;
  };

  // Admin functionality
  const updateRestaurant = (restaurantId, updates) => {
    setRestaurants(prev => prev.map(restaurant => 
      restaurant.id === restaurantId ? { ...restaurant, ...updates } : restaurant
    ));
  };

  const addMenuItem = (restaurantId, menuItem) => {
    // Implementation for adding menu items
  };

  const updateMenuItem = (restaurantId, itemId, updates) => {
    // Implementation for updating menu items
  };

  const deleteMenuItem = (restaurantId, itemId) => {
    // Implementation for deleting menu items
  };

  const addToCart = (item, restaurantId) => {
    setCart(prev => [...prev, { ...item, restaurantId, id: Date.now() }]);
  };

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addBooking = (booking) => {
    setBookings(prev => [...prev, { ...booking, id: Date.now(), status: 'confirmed' }]);
  };

  const updateTableStatus = (restaurantId, tableId, status) => {
    setRestaurants(prev => prev.map(restaurant => {
      if (restaurant.id === restaurantId) {
        return {
          ...restaurant,
          tables: restaurant.tables.map(table => 
            table.id === tableId ? { ...table, status } : table
          )
        };
      }
      return restaurant;
    }));
  };

  const getMenuItems = (restaurantId) => {
    return mockMenuItems[restaurantId] || [];
  };

  const value = {
    restaurants,
    realTables,
    setRealTables,
    getRestaurantTables,
    loadTablesFromBackend,
    orders,
    bookings,
    cart,
    updateRestaurant,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    addToCart,
    removeFromCart,
    clearCart,
    addBooking,
    updateTableStatus,
    getMenuItems
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};