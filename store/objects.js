import { people, rooms, weapons } from './state.js';

function Cards() {
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

function Player(name) {
  this.player = name;
  this.cards = new PlayerCards();
}

function PlayerCards() {
  [...people, ...rooms, ...weapons].forEach((card) => {
    this[card] = { hasItState: 0, seenMine: false };
  });
}

export { Cards, Player, PlayerCards };
