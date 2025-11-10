import { MenuItem, Course } from '../types/menu';

/**
 * Calculate the total number of menu items
 */
export function getTotalMenuItems(items: MenuItem[]): number {
  return items.length;
}

/**
 * Calculate the average price for a specific course
 */
export function getAveragePriceByCourse(items: MenuItem[], course: Course): number {
  const courseItems = items.filter(item => item.course === course);
  
  if (courseItems.length === 0) {
    return 0;
  }
  
  const total = courseItems.reduce((sum, item) => sum + item.price, 0);
  return total / courseItems.length;
}

/**
 * Get all average prices broken down by course
 */
export function getAllAveragePrices(items: MenuItem[]): Record<Course, number> {
  const averages: Record<Course, number> = {} as Record<Course, number>;
  
  for (const course of ['Starters', 'Mains', 'Desserts', 'Appetizers', 'Sides', 'Beverages'] as Course[]) {
    averages[course] = getAveragePriceByCourse(items, course);
  }
  
  return averages;
}

/**
 * Filter menu items by course
 */
export function filterItemsByCourse(items: MenuItem[], course: Course | 'All'): MenuItem[] {
  if (course === 'All') {
    return items;
  }
  return items.filter(item => item.course === course);
}

/**
 * Get count of items per course
 */
export function getItemCountByCourse(items: MenuItem[], course: Course): number {
  return items.filter(item => item.course === course).length;
}

/**
 * Get overall average price across all items
 */
export function getOverallAveragePrice(items: MenuItem[]): number {
  if (items.length === 0) return 0;
  const total = items.reduce((sum, it) => sum + it.price, 0);
  return total / items.length;
}