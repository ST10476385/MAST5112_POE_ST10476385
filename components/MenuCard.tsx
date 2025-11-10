import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../types/menu';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{item.dishName}</Text>
        <Text style={styles.price}>R {item.price.toFixed(2)}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.footer}>
        <Text style={styles.course}>{item.course}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E293B',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2D3748',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    marginRight: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F59E0B',
  },
  description: {
    fontSize: 14,
    color: '#94A3B8',
    marginBottom: 12,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  course: {
    fontSize: 12,
    color: '#F59E0B',
    backgroundColor: '#2D3748',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});