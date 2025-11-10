import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { MenuItem, Course, COURSES } from '../types/menu';
import { getTotalMenuItems, getAllAveragePrices, filterItemsByCourse, getOverallAveragePrice } from '../utils/menuUtils';
import { MenuCard } from '../components/MenuCard';

interface HomeScreenProps {
  menuItems: MenuItem[];
}

export default function HomeScreen({ menuItems }: HomeScreenProps) {
  const totalItems = getTotalMenuItems(menuItems);
  const averagePrices = getAllAveragePrices(menuItems);
  const overallAverage = getOverallAveragePrice(menuItems);

  const backgroundImage = require('../assets/background.jpeg');
  const bannerImage = require('../assets/banner.jpeg');

  return (
    <ImageBackground source={backgroundImage} style={styles.bg} blurRadius={4}>
      <View style={styles.overlay} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.bannerContainer}>
          <Image source={bannerImage} style={styles.banner} resizeMode="contain" />
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>Christoffel's Menu</Text>
          <Text style={styles.subtitle}>Curated Culinary Experience • Total Items: {totalItems}</Text>
        </View>

        <View style={styles.averagePrices}>
          <Text style={styles.sectionTitle}>Average Prices by Course</Text>
          <View style={styles.priceRow}>
            <Text style={[styles.courseText, styles.overallLabel]}>Overall Average</Text>
            <Text style={[styles.priceText, styles.overallValue]}>R {overallAverage.toFixed(2)}</Text>
          </View>
          {Object.entries(averagePrices).map(([course, price]) => (
            <View key={course} style={styles.priceRow}>
              <Text style={styles.courseText}>{course}</Text>
              <Text style={styles.priceText}>R {price.toFixed(2)}</Text>
            </View>
          ))}
        </View>

        <View style={styles.menuList}>
          {COURSES.map((course: Course) => {
            const itemsForCourse = filterItemsByCourse(menuItems, course);
            if (itemsForCourse.length === 0) return null;

            return (
              <View key={course} style={styles.courseSection}>
                <Text style={styles.courseHeading}>{course.toUpperCase()}</Text>
                {itemsForCourse.map(item => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </View>
            );
          })}
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
  header: {
    padding: 16,
    backgroundColor: '#1E293B',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#94A3B8',
  },
  averagePrices: {
    padding: 16,
    backgroundColor: '#1E293B',
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#2D3748',
  },
  courseText: {
    color: '#94A3B8',
    fontSize: 16,
  },
  priceText: {
    color: '#F59E0B',
    fontSize: 16,
    fontWeight: '600',
  },
  overallLabel: {
    fontWeight: '700',
    color: '#FFFFFF',
  },
  overallValue: {
    color: '#FFD28A',
    fontSize: 16,
  },
  menuList: {
    padding: 16,
  },
  courseSection: {
    marginBottom: 24,
  },
  courseHeading: {
    fontSize: 20,
    color: '#F59E0B',
    textAlign: 'center',
    fontWeight: '700',
    marginVertical: 12,
    letterSpacing: 4,
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
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.04)'
  },
});