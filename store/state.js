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

// Should we write state to localStorage?
export const storage = ls.storageAvailable();

// Clue tracker object instances for game play
// populate players via INIT_STATE mutation committed via App.vue
//
// should all this (localstorage check and sync to state,
// or new default player) be done in state?!

let _cards;
let _players;

if (!storage) {
  _cards = Cards();
}
if (storage && !ls.hasStoredState('cards')) {
  _cards = Cards();
  localStorage.setItem('cards', '');
}
if (storage && ls.hasStoredState('cards')) {
  _cards = ls.cards();
}

if (!storage) {
  _players = [Player('Player1')];
}
if (storage && !ls.hasStoredState('players')) {
  _players = [Player('Player1')];
  localStorage.setItem('players', '');
}
if (storage && ls.hasStoredState('cards')) {
  _players = ls.players();
}

export const cards = _cards;
export const players = _players;

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

// Helpers
function displayName(card, group) {
  return group == 'people'
    ? card.split(' ')[1]
    : group == 'rooms'
    ? card.split(' ')[0]
    : card;
}
