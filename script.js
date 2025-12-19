document.addEventListener('DOMContentLoaded', ()=>{

    // Botones del menu
    const info = document.querySelector('#info');
    const prod = document.querySelector('#prod');
    const prod2 = document.querySelector('#prod2');
    const about = document.querySelector('#about');
    const account = document.querySelector('#account');

    // Secciones del menu
    const sec_info = document.querySelector('#sec_info');
    const sec_prod = document.querySelector('#sec_prod');
    const sec_about = document.querySelector('#sec_about');
    const sec_account = document.querySelector('#sec_account');

    info.addEventListener('click', ()=>{
        sec_info.classList.remove('hidden');
        sec_prod.classList.add('hidden');
        sec_about.classList.add('hidden');
        sec_account.classList.add('hidden');
    });
    prod.addEventListener('click', ()=>{
        sec_info.classList.add('hidden');
        sec_prod.classList.remove('hidden');
        sec_about.classList.add('hidden');
        sec_account.classList.add('hidden');
    });
    prod2.addEventListener('click', ()=>{
        sec_info.classList.add('hidden');
        sec_prod.classList.remove('hidden');
        sec_about.classList.add('hidden');
        sec_account.classList.add('hidden');
    });
    about.addEventListener('click', ()=>{
        sec_info.classList.add('hidden');
        sec_prod.classList.add('hidden');
        sec_about.classList.remove('hidden');
        sec_account.classList.add('hidden');
    });
    account.addEventListener('click', ()=>{
        sec_info.classList.add('hidden');
        sec_prod.classList.add('hidden');
        sec_about.classList.add('hidden');
        sec_account.classList.remove('hidden');
    });

})