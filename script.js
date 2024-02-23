const toDoInput = document.querySelector("input");
const addBtn = document.querySelector("button");
const itemBox = document.querySelector(".items");
const todoItems = document.querySelector(".todo-item");

addBtn.addEventListener("click", function () {
  if (toDoInput.value) {
    if (itemBox.querySelector(".empty")) {
      itemBox.querySelector(".empty").remove();
    }
    itemBox.innerHTML += `<div class="todo-item">
  <div class="item">${toDoInput.value}</div>
  <div>
      <button onclick="updateBtn(this)" class="updateBtn">Edit</button> 
      <button onclick="deleteBtn()" class="deleteBtn">X</button>
  </div>
  </div>`;
    toDoInput.value = "";
  }
});


function deleteBtn() {
    if (itemBox.querySelectorAll('.todo-item').length === 1) {
        itemBox.innerHTML = '<h1 class="empty">Please Add ToDo</h1>';
    } else {
        itemBox.querySelector('.todo-item').remove();
    }
}


function updateBtn(currElem) {
  const todoItems = currElem.closest('.todo-item');
  const item = todoItems.querySelector('.item');
  const updateBtn = todoItems.querySelector('.updateBtn');

  if (updateBtn.textContent === 'Save') {
    updateBtn.textContent = 'Edit';
    const currInput = todoItems.querySelector('input');
    const currText = document.createElement('div');
    currText.className = 'item';
    currText.textContent = currInput.value;
    todoItems.replaceChild(currText, currInput);
  } else {
    updateBtn.textContent = 'Save';
    const currInput = document.createElement('input');
    currInput.type = 'text';
    currInput.className = 'form-control';
    currInput.style.fontSize = '25px';
    currInput.value = item.textContent;
    todoItems.replaceChild(currInput, item);
  }
}
