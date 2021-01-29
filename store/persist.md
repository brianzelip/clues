# Persistent vuex with localStorage

There are two main events to check in with localStorage:

1. On initial page load
2. After vuex state is mutated

## On initial page load

On page load, if `localStorage.cards` and `localStorage.players` exist, init vuex state with them, then render out the rest of the app.

On page load, if `localStorage.cards` and `localStorage.players` do not exist, create them, then init default vuex state, then render out the rest of the app.

## After vuex state mutation

When a vuex mutation occurs, replace localStorage state with vuex state.

If a `cards` mutation occurs, replace `localStorage.cards`.

If a `players` mutation occurs, replace `localStorage.players`.
