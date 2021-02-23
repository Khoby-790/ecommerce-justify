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