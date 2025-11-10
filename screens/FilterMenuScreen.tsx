import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { MenuItem, Course, COURSES } from '../types/menu';
import { filterItemsByCourse } from '../utils/menuUtils';
import { MenuCard } from '../components/MenuCard';

interface FilterMenuScreenProps {
  menuItems: MenuItem[];
}

export default function FilterMenuScreen({ menuItems }: FilterMenuScreenProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | 'All'>('All');

  const filteredItems = filterItemsByCourse(menuItems, selectedCourse);
  const backgroundImage = require('../assets/background.jpeg');
  const bannerImage = require('../assets/banner.jpeg');

  return (
    <ImageBackground source={backgroundImage} style={styles.bg} blurRadius={4}>
      <View style={styles.overlay} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.bannerContainer}>
          <Image source={bannerImage} style={styles.banner} resizeMode="contain" />
        </View>

        <View style={styles.filterButtons}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedCourse === 'All' && styles.filterButtonActive
            ]}
            onPress={() => setSelectedCourse('All')}
          >
            <Text style={[
              styles.filterButtonText,
              selectedCourse === 'All' && styles.filterButtonTextActive
            ]}>
              All
            </Text>
          </TouchableOpacity>

          {COURSES.map((course) => (
            <TouchableOpacity
              key={course}
              style={[
                styles.filterButton,
                selectedCourse === course && styles.filterButtonActive
              ]}
              onPress={() => setSelectedCourse(course)}
            >
              <Text style={[
                styles.filterButtonText,
                selectedCourse === course && styles.filterButtonTextActive
              ]}>
                {course}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.menuList}>
          <Text style={styles.resultsText}>
            {filteredItems.length} {selectedCourse === 'All' ? 'total' : selectedCourse} items
          </Text>

          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
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
  filterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 8,
    backgroundColor: '#1E293B',
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#2D3748',
    marginBottom: 8,
  },
  filterButtonActive: {
    backgroundColor: '#F59E0B',
  },
  filterButtonText: {
    color: '#94A3B8',
    fontSize: 14,
    fontWeight: '500',
  },
  filterButtonTextActive: {
    color: '#FFFFFF',
  },
  menuList: {
    padding: 16,
  },
  resultsText: {
    fontSize: 16,
    color: '#94A3B8',
    marginBottom: 16,
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