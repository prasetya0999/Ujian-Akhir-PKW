const TugasButton = document.getElementById('tugasButton');
const DolanButton = document.getElementById('dolanButton');
const submit = document.getElementById('save');

const InputItemName = document.getElementById('itemName');
const InputValue = document.getElementById('tanggal');

const TotalTugas = document.getElementById('totalTugas');
const TotalDolan = document.getElementById('totalDolan');

const TugasItemWrapper = document.getElementById('TugastemWrapper');
const DolanItemWrapper = document.getElementById('DolanItemWrapper');

const TugasValue = document.getElementsByClassName('tugasValue')

Array.from(TugasValue).map(el => {
    console.log(el.innerText);
})


// Create ItemName and ItemValue Div
const CreateItemDivs = () => {
    const Item = document.createElement('div')
    Item.classList.add('item')
    const ItemName = document.createElement('div')
    ItemName.classList.add('item-description');

    const ItemValue = document.createElement('div');
    ItemValue.classList.add('item-value')
    ItemValue.innerText = `${InputValue.value}`

    ItemName.innerText = `${InputItemName.value}`
    Item.appendChild(ItemName)
    Item.appendChild(ItemValue)

    EnterTugas(Item)
}

let Operation = 'add';
const ToggleOperation = (event) => {
    Operation = event.target.value
}

const EnterTugas = (Item) => {
    if (Operation === 'add') {
        TugasItemWrapper.appendChild(Item)
    } else {
        DolanItemWrapper.appendChild(Item);
    }
}

submit.addEventListener('click', CreateItemDivs);
TugasButton.addEventListener('click', ToggleOperation);
DolanButton.addEventListener('click', ToggleOperation);



