import sneakers from '../../assets/shops.json';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const allCategories = sneakers.map(el => el.category);


let _categories = [];
for (let i = 0; i < allCategories.length; i++) {
    const category = allCategories[i];
    _categories = [..._categories, ...category]
}
_categories = _categories.filter(onlyUnique)

const initialState = {
    sneakers: sneakers,
    selectedSneaker: null,
    categories: _categories.map(el => ({ label: el, value: el })),
    selectedCategories: _categories,
    cart: [],
    showCart: false
};


function shopReducer(state = initialState, action) {
    switch (action.type) {
        case "SelectSneaker":
            return {
                ...state,
                selectedSneaker: { ...action.payload, qty: 1 }
            }
        case "increaseQty":
            const cart = state.cart;
            cart[action.payload] = { ...cart[action.payload], qty: cart[action.payload] + 1 }
            return {
                ...state,
                cart: cart
            }
        case "decreaseQty":
            const _cart = state.cart;
            _cart[action.payload] = { ..._cart[action.payload], qty: _cart[action.payload] + 1 }
            return {
                ...state,
                cart: _cart
            }
        case "removeSneaker":
            return {
                ...state,
                cart: [...state.cart.filter(el => el.id !== action.payload.id)]
            }
        case "SelectCategory":
            const hasIt = state.selectedCategories.find(el => el === action.payload)
            return {
                ...state,
                selectedCategories: hasIt ? [...state.selectedCategories.filter(el => el !== action.payload)] : [...state.selectedCategories, action.payload]
            }

        case "addToCart":
            return {
                ...state,
                cart: [...state.cart.filter(item => item.id !== state.selectedSneaker.id), state.selectedSneaker],
                selectedSneaker: null
            }
        default:
            return state;
    }
}

export default shopReducer;