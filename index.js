const nameEl = document.getElementById('name-input');
const emailEl = document.getElementById('email-input');
const messageEl = document.getElementById('message-input');
const form = document.querySelector('.contact-form');
const error = form.querySelector('small');
// Data storage
form.addEventListener('submit', (event)=>{
    event.preventDefault();    
    let dataObj = [];
    dataObj['name'] = nameEl.value;             
    dataObj['email'] = emailEl.value;
    dataObj['message'] = messageEl.value;
    localStorage.setItem('data', JSON.stringify(dataObj));
    form.submit();
    
})
//Data retrieval on page load 
window.addEventListener('load', ()=>{
    let dataStored = JSON.parse(localStorage.getItem('data'));    
    nameEl.value = dataStored['name'];
    emailEl.value = dataStored['email'];
    messageEl.value = dataStored['message'];    
})




