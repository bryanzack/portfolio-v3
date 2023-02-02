import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initDeck = (): number[] => {
    let deck: number[] = [];
    for (let i = 1; i <= 52; i++)
        deck.push(i);
    return deck;
}
    type DeckState = {
    numCards: number,
    cards: number[],
}

const initialState: DeckState = {
    numCards: 52,
    cards: initDeck(),
}

export const deckSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
        shuffle: (state, action: PayloadAction<void>) => {
            for (let i = state.cards.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let tmp = state.cards[i];
                state.cards[i] = state.cards[j];
                state.cards[j] = tmp;
            }
        },
    }
})