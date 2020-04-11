const email = document.querySelector('input[type="text"]')
const submitBtn = document.querySelector('button')
const error = document.querySelector('.error')
const errorImage = document.querySelector('.error-img')
const emailPattern =  /[a-zA-Z0-9\_]+\@[a-zA-Z0-9\_]+\.[a-zA-Z]{2,20}/g
//Email validation
submitBtn.addEventListener('click', (e) => {
  if( !email.value.match(emailPattern)) {
    e.preventDefault()
    error.classList.remove('hide')
    errorImage.classList.remove('hide')
  }
})
email.addEventListener('input', () => {
  if (!error.classList.contains('hide')) {
    error.classList.add('hide')
  }
  if(!errorImage.classList.contains('hide')) {
    errorImage.classList.add('hide')
  }
})

