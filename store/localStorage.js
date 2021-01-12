export function players() {
  const players = localStorage.getItem('players');

  return JSON.parse(players);
}
export function cards() {
  const cards = localStorage.getItem('cards');

  return JSON.parse(cards);
}

export function hasStoredState(state) {
  if (!storageAvailable()) {
    return false;
  }

  if (!localStorage.getItem(state)) {
    return false;
  }

  if (!localStorage.getItem(state).length >= 2) {
    return false;
  }

  return true;
}

export function setEmptyVals() {
  localStorage.setItem('cards', '');
  localStorage.setItem('players', '');
}

export function resetStorage() {
  localStorage.clear();

  setEmptyVals();
}

export function storageAvailable() {
  /**
   * via https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#testing_for_availability
   *
   * returns boolean
   */
  var storage;
  try {
    storage = window.localStorage;
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

// Subscribe to all mutations via plugins
export const subscribe = (store) => {
  // called when the store is initialized
  if (storageAvailable()) {
    store.subscribe((mutation, state) => {
      if (mutation.type.includes('CARD')) {
        localStorage.setItem('cards', JSON.stringify(state.cards));
        console.log('state.cards was written to localStorage.cards');
      }
      if (mutation.type.includes('PLAYER')) {
        localStorage.setItem('players', JSON.stringify(state.players));
        console.log('state.players was written to localStorage.players');
      }
    });
  }
};
