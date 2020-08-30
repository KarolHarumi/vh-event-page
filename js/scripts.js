function closeModal() {
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('modal').classList.add('hide');
    });
}

// function openModal() {
//     document.getElementById('modal').classList.remove('hide');
// }

function moreDetails() {
    let buttons = document.querySelectorAll('.more-details'),
        buttonsArr = Array.prototype.slice.call(buttons);

    buttonsArr.map(btn =>  {
        btn.addEventListener('click', () => {
            document.getElementById('modal').classList.remove('hide');
            document.querySelector('.modal-content').classList.remove('hide');
        });
    });
}

function applyForEvent() {
    let buttons = document.querySelectorAll('.apply'),
        buttonsArr = Array.prototype.slice.call(buttons);

        buttonsArr.map(btn =>  {
            btn.addEventListener('click', () => {
                document.getElementById('modal').classList.remove('hide');
                document.querySelector('.success').classList.remove('hide');

                btn.setAttribute('disabled', 'disabled');
                btn.innerHTML = "Applied";
            });
        });
}

function init() {
    closeModal();
    // openModal();
    moreDetails();
    applyForEvent();
}

document.querySelector('body').addEventListener('load', init());