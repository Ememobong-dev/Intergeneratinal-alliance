const loginForm = document.getElementById('admin_forms');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new formData(this)

    fetch('http://127.0.0.1:5000/api/login', {
        method: 'post',
        body: FormData
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
        console.error(error);
        
    })
    
})
