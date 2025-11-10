import { MenuItem } from '../types/menu';

export const INITIAL_MENU_ITEMS: Omit<MenuItem, 'id'>[] = [
  // Starters
  {
    dishName: 'Truffle-Infused Cauliflower Soup',
    description: 'A silky cauliflower purée infused with black truffle oil, finished with a hint of cream and micro herbs.',
    course: 'Starters',
    price: 195
  },
  {
    dishName: 'Caviar-Topped Blini with Crème Fraîche',
    description: 'Mini pancakes topped with delicate sturgeon caviar and a dollop of crème fraîche.',
    course: 'Starters',
    price: 285
  },
  {
    dishName: 'Seared Scallops with Champagne Foam',
    description: 'Golden seared scallops resting on a bed of pea purée, finished with airy Champagne foam.',
    course: 'Starters',
    price: 245
  },

  // Mains
  {
    dishName: 'Wagyu Beef Tenderloin with Truffle Jus',
    description: 'Premium Wagyu beef grilled to perfection, served with truffle-infused jus and potato fondant.',
    course: 'Mains',
    price: 485
  },
  {
    dishName: 'Pan-Seared Sea Bass with Lemon Beurre Blanc',
    description: 'Fresh sea bass fillet, seared crisp and topped with lemon butter sauce and capers.',
    course: 'Mains',
    price: 365
  },
  {
    dishName: 'Roasted Duck Breast with Cherry Glaze',
    description: 'Tender duck breast glazed with a cherry reduction, paired with parsnip purée.',
    course: 'Mains',
    price: 395
  },

  // Desserts
  {
    dishName: 'Dark Chocolate Fondant with Gold Dust',
    description: 'Warm molten chocolate center encased in rich sponge, dusted with edible gold flakes.',
    course: 'Desserts',
    price: 165
  },
  {
    dishName: 'Raspberry Soufflé with Vanilla Bean Ice Cream',
    description: 'Fluffy soufflé baked to perfection, paired with creamy vanilla bean ice cream.',
    course: 'Desserts',
    price: 155
  },
  {
    dishName: 'Pistachio Panna Cotta with Berry Coulis',
    description: 'Smooth pistachio cream topped with tart mixed-berry coulis and mint.',
    course: 'Desserts',
    price: 145
  },

  // Appetizers
  {
    dishName: 'Smoked Salmon Roulade',
    description: 'Thinly sliced salmon rolled with herbed cream cheese and a touch of lemon zest.',
    course: 'Appetizers',
    price: 135
  },
  {
    dishName: 'Mini Crab Cakes with Aioli',
    description: 'Crispy crab cakes served with a delicate garlic and lemon aioli.',
    course: 'Appetizers',
    price: 175
  },
  {
    dishName: 'Goat Cheese and Fig Crostini',
    description: 'Toasted baguette slices topped with creamy goat cheese and caramelized figs.',
    course: 'Appetizers',
    price: 125
  },

  // Sides
  {
    dishName: 'Truffle Mashed Potatoes',
    description: 'Creamy mashed potatoes enhanced with black truffle oil.',
    course: 'Sides',
    price: 85
  },
  {
    dishName: 'Grilled Asparagus with Lemon Butter',
    description: 'Tender asparagus spears lightly grilled and finished with lemon butter.',
    course: 'Sides',
    price: 75
  },
  {
    dishName: 'Sautéed Wild Mushrooms',
    description: 'A medley of wild mushrooms sautéed in garlic and fresh herbs.',
    course: 'Sides',
    price: 95
  },

  // Beverages
  {
    dishName: 'Dom Pérignon Vintage Champagne',
    description: 'A luxurious sparkling wine with notes of almond, brioche, and honey.',
    course: 'Beverages',
    price: 2850
  },
  {
    dishName: 'Sauvignon Blanc – Cloudy Bay',
    description: 'Crisp and aromatic white wine from New Zealand with citrus and tropical fruit notes.',
    course: 'Beverages',
    price: 650
  },
  {
    dishName: 'Pinot Noir – La Crema',
    description: 'Elegant red wine featuring cherry and spice notes with a smooth finish.',
    course: 'Beverages',
    price: 750
  }
];