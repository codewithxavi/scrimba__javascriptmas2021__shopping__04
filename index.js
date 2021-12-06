const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")
const addItem = document.querySelector(".add")
const delItem = document.querySelector(".del")
const item = document.querySelector(".texto")


// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

for (let i = 0; i < items.length; i++) {
  checklist.innerHTML += `
    <div class="checklist-item">
      <input type="checkbox" id="${items[i]}" value="${items[i]}">
      <label for="${items[i]}" class="strikethrough">${items[i]}</label>
    </div>
  `
}

addItem.addEventListener("click", () => {
  if (item.value != "") {
    checklist.innerHTML += `
      <div class="checklist-item">
        <input type="checkbox" id="${item.value}" value="${item.value}">
        <label for="${item.value}" class="strikethrough">${item.value}</label>
      </div>
    `
  }
  item.value = ""

})

delItem.addEventListener("click", () => {
  checklist.textContent = ""
})

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

