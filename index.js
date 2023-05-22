//grab user input
const userInput = document.querySelector('#item-enter');
const button = document.querySelector('button.description');
const p = document.querySelector('p.description');
let listItem = document.querySelectorAll('li');

//allow user to add new items
const addItemInput = document.querySelector('.item-enter');
const addItemButton = document.querySelector('button.item-confirm');

//Remove Item
const removeItemButton = document.querySelector('button.remove-item');

//list items
const listItems = document.getElementsByTagName('li');

//add item
addItemButton.addEventListener('click', () => {
    let list = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    // check if item is empty
    if (li.textContent === ''){
        console.log('Empty string!');
    } else {
        let appendedItem = list.appendChild(li);
        addItemInput.value = '';
        // update item count
        let itemCount = document.getElementById("items").getElementsByTagName("li").length;
        document.getElementById("count").textContent= itemCount;
    }
    });

//remove last item
removeItemButton.addEventListener('click', () => {
    let list = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    list.removeChild(li);;
     // update item count
     let itemCount = document.getElementById("items").getElementsByTagName("li").length;
     document.getElementById("count").textContent= itemCount;
  });

