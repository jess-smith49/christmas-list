async function loginFormHandler(event){
    event.preventDefault();

    const username = document.querySelector().value.trim()
    const password = document.querySelector().value.trim()

    if(username && password){
        const response = await fetch( '/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username: username,
                password: password
            }),

            headers:{'Content-Type': 'application/json'}
        });

        if (response.ok){
            console.log('Successful login')
            document.location.replace('/dashboard')
        }
    }
};

document.querySelector('').addEventListener('submit', loginFormHandler);