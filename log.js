
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 
    
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    if ( loginEmail &&loginPassword) {
        alert('تم تسجيل الدخول بنجاح!');
       
        window.location.href = "home.html"; 
    } 
});