import * as ls from './localStorage.js';

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

// State
export const storage = ls.storageAvailable();

export const cards = initState().cards;
export const players = initState().players;

// Helpers
function initState() {
  // Init cards and players state from scratch or localStorage
  let cards;
  let players;

  if (!ls.storageAvailable()) {
    cards = Cards();
    players = [Player('Player1')];
  }

  if (!ls.hasStoredState('cards')) {
    cards = Cards();
    localStorage.setItem('cards', '');
  }
  if (!ls.hasStoredState('players')) {
    players = [Player('Player1')];
    localStorage.setItem('players', '');
  }

  if (ls.hasStoredState('cards')) {
    cards = ls.cards();
  }
  if (ls.hasStoredState('cards')) {
    players = ls.players();
  }

  return { cards, players };
}

function Card(card, group) {
  return {
    group,
    name: card,
    displayName: displayName(card, group),
    mine: false,
    whodunnitCardState: 0
  };
}

export function Cards() {
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

  cardOrder.forEach((group) => {
    CARDS[group].forEach((card) => {
      playerCards[card] = { trackerBtn: 0, seenMine: false };
    });
  });

  return playerCards;
}

function displayName(card, group) {
  return group == 'people'
    ? card.split(' ')[1]
    : group == 'rooms'
    ? card.split(' ')[0]
    : card;
}
