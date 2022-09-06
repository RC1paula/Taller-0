const openModal = document.querySelector('.temycon');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('.cerrar-modal');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('#modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('#modal--show');
});