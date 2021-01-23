
// Action Constants
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Creators
export function actionIncrement() {
    return {
        type: INCREMENT
    }
}

export function actionDecrement() {
    return {
        type: DECREMENT
    }
}