const categoryEl = document.querySelector('#categories');  
console.log('Number of categories:', categoryEl.childElementCount);


const firstItemEl = categoryEl.children[0];

console.log('Category:', firstItemEl.firstElementChild.textContent);
console.log('Elements:', firstItemEl.lastElementChild.childElementCount);

const secondItemEl = categoryEl.children[1];

console.log('Category:', secondItemEl.firstElementChild.textContent);
console.log('Elements:', secondItemEl.lastElementChild.childElementCount);

const thirdItemEl = categoryEl.children[2];
console.log('Category:', thirdItemEl.firstElementChild.textContent);
console.log('Elements:', thirdItemEl.lastElementChild.childElementCount);