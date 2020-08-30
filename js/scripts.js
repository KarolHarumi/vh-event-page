function closeModal() {
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('modal').classList.add('hide');
    });
}

function openModal() {
    document.getElementById('modal').classList.remove('hide');
}

function moreDetails() {
    let buttons = document.querySelectorAll('.more-details'),
        buttonsArr = Array.prototype.slice.call(buttons);

    buttonsArr.map(btn =>  {
        btn.addEventListener('click', () => {
            document.getElementById('modal').classList.remove('hide');
        });
    });
    
}

function init() {
    closeModal();
    // openModal();
    moreDetails();
}

document.querySelector('body').addEventListener('load', init());