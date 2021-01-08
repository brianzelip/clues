export const people = [
  'Mr. Green',
  'Col. Mustard',
  'Mrs. Peacock',
  'Prof. Plum',
  'Ms. Scarlet',
  'Mrs. White',
];

export const rooms = [
  'Ballroom',
  'Billiard room',
  'Conservatory',
  'Dining room',
  'Hall',
  'Kitchen',
  'Library',
  'Lounge',
  'Study',
];

export const weapons = [
  'Candlestick',
  'Knife',
  'Lead pipe',
  'Pistol',
  'Rope',
  'Wrench',
];

export const cardOrder = ['people', 'rooms', 'weapons'];

export function Cards() {
  function isGroup(card) {
    return people.includes(card)
      ? 'people'
      : rooms.includes(card)
      ? 'rooms'
      : 'weapons';
  }

  [...people, ...rooms, ...weapons].forEach((card) => {
    this[card] = {
      group: isGroup(card),
      id: card,
      displayName:
        isGroup(card) == 'people'
          ? card.split(' ')[1]
          : isGroup(card) == 'rooms'
          ? card.split(' ')[0]
          : card,
      dataCardAttr:
        isGroup(card) == 'people'
          ? `${card.split(' ')[1].toLowerCase()}`
          : isGroup(card) == 'rooms'
          ? `${card.split(' ')[0].toLowerCase()}`
          : `${card.split(' ')[card.split(' ').length - 1].toLowerCase()}`,
      mine: false,
      whodunnitCardState: 0,
      players: [],
    };
  });
}

export function Player(name) {
  this.player = name;
  this.cards = {};
  console.log([...people]);
  [...people, ...rooms, ...weapons].forEach((card) => {
    this.cards[card] = { hasItState: 0, seenMine: false };
  });
}

export function PlayerCards() {}

const player1 = new Player('Player1');

export const players = [player1];

export const _players = [
  {
    player: 'Player1',
    cards: {
      'Mr. Green': { hasItState: 0, seenMine: false },
      'Col. Mustard': { hasItState: 0, seenMine: false },
      'Mrs. Peacock': { hasItState: 0, seenMine: false },
      'Prof. Plum': { hasItState: 0, seenMine: false },
      'Ms. Scarlet': { hasItState: 0, seenMine: false },
      'Mrs. White': { hasItState: 0, seenMine: false },
      Ballroom: { hasItState: 0, seenMine: false },
      'Billiard room': { hasItState: 0, seenMine: false },
      Conservatory: { hasItState: 0, seenMine: false },
      'Dining room': { hasItState: 0, seenMine: false },
      Hall: { hasItState: 0, seenMine: false },
      Kitchen: { hasItState: 0, seenMine: false },
      Library: { hasItState: 0, seenMine: false },
      Lounge: { hasItState: 0, seenMine: false },
      Study: { hasItState: 0, seenMine: false },
      Candlestick: { hasItState: 0, seenMine: false },
      Knife: { hasItState: 0, seenMine: false },
      'Lead pipe': { hasItState: 0, seenMine: false },
      Pistol: { hasItState: 0, seenMine: false },
      Rope: { hasItState: 0, seenMine: false },
      Wrench: { hasItState: 0, seenMine: false },
    },
  },
];

export const clues = {
  'Mr. Green': {
    group: 'people',
    id: 'Mr. Green',
    displayName: 'Green',
    dataCardAttr: 'green',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  'Col. Mustard': {
    group: 'people',
    id: 'Col. Mustard',
    displayName: 'Mustard',
    dataCardAttr: 'mustard',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  'Mrs. Peacock': {
    group: 'people',
    id: 'Mrs. Peacock',
    displayName: 'Peacock',
    dataCardAttr: 'peacock',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  'Prof. Plum': {
    group: 'people',
    id: 'Prof. Plum',
    displayName: 'Plum',
    dataCardAttr: 'plum',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  'Ms. Scarlet': {
    group: 'people',
    id: 'Ms. Scarlet',
    displayName: 'Scarlet',
    dataCardAttr: 'scarlet',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  'Mrs. White': {
    group: 'people',
    id: 'Mrs. White',
    displayName: 'White',
    dataCardAttr: 'white',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  Ballroom: {
    group: 'rooms',
    id: 'Ballroom',
    displayName: 'Ballroom',
    dataCardAttr: 'ballroom',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  'Billiard room': {
    group: 'rooms',
    id: 'Billiard room',
    displayName: 'Billiard',
    dataCardAttr: 'billiard',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  Conservatory: {
    group: 'rooms',
    id: 'Conservatory',
    displayName: 'Conservatory',
    dataCardAttr: 'conservatory',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  'Dining room': {
    group: 'rooms',
    id: 'Dining room',
    displayName: 'Dining',
    dataCardAttr: 'dining',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  Hall: {
    group: 'rooms',
    id: 'Hall',
    displayName: 'Hall',
    dataCardAttr: 'hall',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  Kitchen: {
    group: 'rooms',
    id: 'Kitchen',
    displayName: 'Kitchen',
    dataCardAttr: 'kitchen',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  Library: {
    group: 'rooms',
    id: 'Library',
    displayName: 'Library',
    dataCardAttr: 'library',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  Lounge: {
    group: 'rooms',
    id: 'Lounge',
    displayName: 'Lounge',
    dataCardAttr: 'lounge',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  Study: {
    group: 'rooms',
    id: 'Study',
    displayName: 'Study',
    dataCardAttr: 'study',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  Candlestick: {
    group: 'weapons',
    id: 'Candlestick',
    displayName: 'Candlestick',
    dataCardAttr: 'candlestick',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  Knife: {
    group: 'weapons',
    id: 'Knife',
    displayName: 'Knife',
    dataCardAttr: 'knife',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  'Lead pipe': {
    group: 'weapons',
    id: 'Lead pipe',
    displayName: 'Lead pipe',
    dataCardAttr: 'pipe',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  Pistol: {
    group: 'weapons',
    id: 'Pistol',
    displayName: 'Pistol',
    dataCardAttr: 'pistol',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  Rope: {
    group: 'weapons',
    id: 'Rope',
    displayName: 'Rope',
    dataCardAttr: 'rope',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
  Wrench: {
    group: 'weapons',
    id: 'Wrench',
    displayName: 'Wrench',
    dataCardAttr: 'wrench',
    mine: false,
    seen: [],
    whodunnitCardState: 0,
  },
};
