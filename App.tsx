import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Image, Dimensions, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MenuItem } from './types/menu';
import { INITIAL_MENU_ITEMS } from './data/initialMenu';
import HomeScreen from './screens/HomeScreen';
import ManageMenuScreen from './screens/ManageMenuScreen';
import FilterMenuScreen from './screens/FilterMenuScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

// Initialize menu with pre-populated items
const initializeMenu = (): MenuItem[] => {
  return INITIAL_MENU_ITEMS.map((item, index) => ({
    ...item,
    id: `initial-${index}-${Date.now()}`
  }));
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initializeMenu());

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ImageBackground
        source={require('./assets/background.jpeg')}
        style={styles.splashContainer}
        blurRadius={3}
      >
        <View style={styles.overlay} />
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>Christoffel</Text>
          <Text style={styles.subtitleText}>PRIVATE CHEF</Text>
        </View>
      </ImageBackground>
    );
  }

  // Global function to add a menu item
  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = {
      ...item,
      id: Date.now().toString() + Math.random().toString(36)
    };
    setMenuItems(prevItems => [...prevItems, newItem]);
  };

  // Global function to remove a menu item
  const removeMenuItem = (id: string) => {
    setMenuItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#F59E0B',
          tabBarInactiveTintColor: '#94A3B8',
          headerStyle: styles.header,
          headerTintColor: '#FFFFFF',
        }}
      >
        <Tab.Screen 
          name="Menu" 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={24} color={color} />
            ),
          }}
        >
          {(props) => <HomeScreen {...props} menuItems={menuItems} />}
        </Tab.Screen>
        
        <Tab.Screen 
          name="Manage" 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="cog" size={24} color={color} />
            ),
          }}
        >
          {(props) => (
            <ManageMenuScreen 
              {...props} 
              menuItems={menuItems}
              onAddItem={addMenuItem}
              onRemoveItem={removeMenuItem}
            />
          )}
        </Tab.Screen>
        
        <Tab.Screen 
          name="Filter" 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="filter" size={24} color={color} />
            ),
          }}
        >
          {(props) => <FilterMenuScreen {...props} menuItems={menuItems} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1E293B',
    borderTopColor: '#F59E0B',
    borderTopWidth: 1,
  },
  header: {
    backgroundColor: '#1E293B',
  },
  splashContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 48,
    color: '#F59E0B',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 20,
    color: '#FFFFFF',
    letterSpacing: 4,
    textAlign: 'center',
  },
});