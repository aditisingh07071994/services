// context/AuthContext.js
import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // (Auth State is unchanged)
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // (Cart State is unchanged)
  const [cart, setCart] = useState([]);
  
  // (Modal State is unchanged)
  const [serviceToConfigure, setServiceToConfigure] = useState(null);

  useEffect(() => {
    // (This useEffect is unchanged)
    const storedCart = localStorage.getItem('demo_cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    
    async function fetchUser() {
      try {
        const response = await axios.get('/api/me');
        if (response.data.user) {
          setUser(response.data.user);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  const logout = async () => {
    // (logout function is unchanged)
    try {
      await axios.post('/api/logout');
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // --- Cart Functions (Updated) ---
  const updateLocalStorage = (cartItems) => {
    localStorage.setItem('demo_cart', JSON.stringify(cartItems));
  };

  // --- THIS FUNCTION IS NOW SIMPLER ---
  const promptForServiceDetails = (svc) => {
    // Check if the service has fields and the array is not empty
    if (svc.requiredFields && svc.requiredFields.length > 0) {
      setServiceToConfigure(svc);
    } else {
      // If no details needed, add directly with empty details
      addServiceToCart(svc, {});
    }
  };

  const cancelServiceConfiguration = () => {
    setServiceToConfigure(null);
  };

  const addServiceToCart = (service, details) => {
    // (This function is unchanged)
    setCart(prev => {
      const newCartItem = {
        ...service,
        cartItemId: `${service.id}_${Date.now()}`,
        details: details 
      };
      
      const newCart = [...prev, newCartItem];
      updateLocalStorage(newCart);
      cancelServiceConfiguration();
      return newCart;
    });
  };

  const removeFromCart = (cartItemId) => {
    // (This function is unchanged)
    setCart(prev => {
      const newCart = prev.filter(p => p.cartItemId !== cartItemId);
      updateLocalStorage(newCart);
      return newCart;
    });
  };

  const clearCart = () => {
    // (This function is unchanged)
    setCart([]);
    localStorage.removeItem('demo_cart');
  };

  const value = {
    // (The returned value object is unchanged)
    user,
    setUser,
    logout,
    loading,
    isAuthenticated: !!user,
    cart,
    removeFromCart,
    clearCart,
    serviceToConfigure,
    promptForServiceDetails,
    cancelServiceConfiguration,
    addServiceToCart
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};