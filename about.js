console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const img = document.querySelector('img')

img.addEventListener('mouseover', () => {
    alert('You found the secret!')
})