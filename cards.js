const getCreateCard = document.getElementById("cardHolderDiv");
const getText = document.getElementById("text");
const getCreate = document.getElementById("create");


function cardString() {
	let newCards = "";
	newCards += `<div class="deleteButtonCard">`
	newCards += `<p>${getText.value}</p>`
	newCards += `<button class="delete" id="delete">Delete this Card</button>`
	newCards += `</div>`
	getCreateCard.innerHTML += newCards;
	console.log(newCards);
};


function addDeleteButton(DnC) {
	if(DnC.target.className === "delete"){
		DnC.target.parentElement.remove();
	}
	console.log(DnC);
};



getCreate.addEventListener('click', cardString);
document.body.addEventListener('click', addDeleteButton);