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
    categories: _categories,
    selectedCategories: []
};


function shopReducer(state = initialState, action) {
    switch (action.type) {
        case "SelectSneaker":
            return {
                ...state,
                selectedSneaker: action.payload
            }
        case "SelectCategory":
            const hasIt = state.selectedCategories.find(el => el === action.payload)
            return {
                ...state,
                selectedCategories: hasIt ? [...state.selectedCategories.filter(el => el !== action.payload)] : [...state.selectedCategories, action.payload]
            }
        default:
            return state;
    }
}

export default shopReducer;