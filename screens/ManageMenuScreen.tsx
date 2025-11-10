import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { MenuItem, Course, COURSES } from '../types/menu';

interface ManageMenuScreenProps {
  menuItems: MenuItem[];
  onAddItem: (item: Omit<MenuItem, 'id'>) => void;
  onRemoveItem: (id: string) => void;
}

export default function ManageMenuScreen({ menuItems, onAddItem, onRemoveItem }: ManageMenuScreenProps) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<Course>('Starters');
  const [showCourseList, setShowCourseList] = useState(false);
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    if (!dishName || !description || !price) {
      // You might want to add proper error handling here
      return;
    }

    onAddItem({
      dishName,
      description,
      course,
      price: Number(price)
    });

    // Reset form
    setDishName('');
    setDescription('');
    setCourse('Starters');
    setPrice('');
  };

  const backgroundImage = require('../assets/background.jpeg');
  const bannerImage = require('../assets/banner.jpeg');

  return (
    <ImageBackground source={backgroundImage} style={styles.bg} blurRadius={4}>
      <View style={styles.overlay} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.bannerContainer}>
          <Image source={bannerImage} style={styles.banner} resizeMode="contain" />
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>Add Menu Item</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Dish Name</Text>
            <TextInput
              style={styles.input}
              value={dishName}
              onChangeText={setDishName}
              placeholder="Enter dish name"
              placeholderTextColor="#94A3B8"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={description}
              onChangeText={setDescription}
              placeholder="Enter dish description"
              placeholderTextColor="#94A3B8"
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Course</Text>

            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.selectBox}
              onPress={() => setShowCourseList(prev => !prev)}
            >
              <Text style={styles.selectText}>{course}</Text>
              <Text style={styles.selectChevron}>{showCourseList ? '▴' : '▾'}</Text>
            </TouchableOpacity>

            {showCourseList && (
              <View style={styles.courseList}>
                <ScrollView style={{ maxHeight: 220 }}>
                  {COURSES.map((c) => (
                    <TouchableOpacity
                      key={c}
                      style={styles.courseRow}
                      onPress={() => {
                        setCourse(c);
                        setShowCourseList(false);
                      }}
                    >
                      <Text style={styles.courseRowText}>{c}</Text>
                      {c === course && <Text style={styles.checkMark}>✓</Text>}
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Price (R)</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={setPrice}
              placeholder="Enter price"
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
            <Text style={styles.addButtonText}>Add Item</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuList}>
          <Text style={styles.subtitle}>Current Menu Items</Text>
          {menuItems.map(item => (
            <View key={item.id} style={styles.menuItem}>
              <View style={styles.menuItemInfo}>
                <Text style={styles.dishName}>{item.dishName}</Text>
                <Text style={styles.courseLabel}>{item.course}</Text>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => onRemoveItem(item.id)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  form: {
    padding: 16,
    backgroundColor: '#1E293B',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2D3748',
    borderRadius: 8,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  selectBox: {
    backgroundColor: '#16202B',
    borderRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2D3748',
  },
  selectText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  selectChevron: {
    color: '#94A3B8',
    fontSize: 18,
  },
  courseList: {
    marginTop: 8,
    backgroundColor: '#0F1620',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2D3748',
    padding: 8,
  },
  courseRow: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.03)'
  },
  courseRowText: {
    color: '#E6EEF8',
    fontSize: 16,
  },
  checkMark: {
    color: '#F59E0B',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#F59E0B',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuList: {
    padding: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  menuItemInfo: {
    flex: 1,
  },
  dishName: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  courseLabel: {
    fontSize: 14,
    color: '#94A3B8',
  },
  removeButton: {
    backgroundColor: '#EF4444',
    padding: 8,
    borderRadius: 4,
    marginLeft: 16,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#0F172A',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(6,10,20,0.55)'
  },
  scrollContent: {
    paddingBottom: 48,
  },
  bannerContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  banner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.04)'
  },
});