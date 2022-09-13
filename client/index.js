const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

const baseURL = 'http://localhost:4004'

form.addEventListener('submit', (event) => {
    event.preventDefault();

   let body = {
    username: username,
    email: email,
    password: password
   }
// let body = {
//     username,
//     email,
//     password
//    }

   //remove base url for hosting
   //.then takes in callback which is response from server that contains data that we pass it and what do I want to do with the data
    if (validateInputs()) {
        axios.post(`${baseURL}/register`, body).then(res => {
            createUser(res.data)
        }).catch(err => {
            console.log(err)
            alert('Your request did not work')
        })
    } 
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters long')
        return false
    }

    if(password2Value !== passwordValue) {
        setError(password2, 'Passwords do not match');
        return false
    } 
    setSuccess(password2);
    return true
}

