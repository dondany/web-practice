
const hiddenItemHtml = `<li class="to-do-item hidden-hard" onClick="checkItem(this)">
<div class="check-btn hidden">
    <i class='bx bxs-check-circle'></i>
</div>
<span></span>
<button class="delete-btn" onClick="deleteItem(event, this)">
    <i class='bx bx-x'></i>
</button>
</li>`;

document.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        addNew();
    }
});

function checkItem(item) {
    const check = item.getElementsByClassName('check-btn')[0];
    check.classList.toggle('hidden');
}

function deleteItem(event, item) {
    event.stopPropagation();
    event.preventDefault();

    item.parentElement.classList.toggle('hidden');
    item.parentElement.style.transform = 'translateX(-50%)';
    setTimeout(() => item.parentElement.remove(), 250);
}

function addNew() {
    const text = document.getElementById("add-item-input").value;

    console.log("dsd");
    if (!text) {
        return;
    }

    //Show the hidden element, this way it will be animated
    const newItem = document.getElementsByClassName("hidden-hard")[0];
    newItem.classList.toggle("hidden-hard");
    newItem.querySelector('span').innerHTML = text;

    //Add a new hidden element so it's possible to add another one
    let item = document.createElement('div');
    item.innerHTML = hiddenItemHtml;
    document.getElementById("to-do-list").appendChild(item.firstChild);

    document.getElementById("add-item-input").value = null;
}