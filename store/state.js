/**
 * CARDS       = set of game card names
 * Cards       = set of Card objects
 * Card        = object of card state
 * card        = game card name string used in components
 *
 * Player      = main object of player state
 * PlayerCards = child object of player state
 * players     = set of each Player
 * player      = player name string used in components
 */

// Data
export const CARDS = {
  people: [
    'Mr. Green',
    'Col. Mustard',
    'Mrs. Peacock',
    'Prof. Plum',
    'Ms. Scarlet',
    'Mrs. White'
  ],
  rooms: [
    'Ballroom',
    'Billiard room',
    'Conservatory',
    'Dining room',
    'Hall',
    'Kitchen',
    'Library',
    'Lounge',
    'Study'
  ],
  weapons: ['Candlestick', 'Knife', 'Lead pipe', 'Pistol', 'Rope', 'Wrench']
};

export const cardOrder = ['people', 'rooms', 'weapons'];

// Clue tracker object instances
export const cards = Cards();

export const players = [Player('Player1')];

// Clue tracker object generators
function Card(card, group) {
  return {
    group,
    name: card,
    displayName: displayName(card, group),
    mine: false,
    whodunnitCardState: 0
  };
}

function Cards() {
  const cards = {};

  cardOrder.forEach((group) => {
    CARDS[group].forEach((card) => {
      cards[card] = Card(card, group);
    });
  });

  return cards;
}

export function Player(name) {
  return {
    player: name,
    cards: PlayerCards()
  };
}

function PlayerCards() {
  const playerCards = {};

  // Create a set of cards per user; pretty clear and
  // robust way to track clues, but perhaps a perf issue?
  cardOrder.forEach((group) => {
    CARDS[group].forEach((card) => {
      playerCards[card] = { trackerBtn: 0, seenMine: false };
    });
  });

  return playerCards;
}

// Helpers
function displayName(card, group) {
  return group == 'people'
    ? card.split(' ')[1]
    : group == 'rooms'
    ? card.split(' ')[0]
    : card;
}
