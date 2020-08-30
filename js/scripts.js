const contentModal = [
    {
        "id": "meet_brazil",
        "title": "MeetUp Brazil",
        "place": "Sao Paulo - Brazil",
        "date": "October 14th & October 19th 2020"
    },
    {
        "id": "meet_chile",
        "title": "MeetUp Chile",
        "place": "Santiago - Chile",
        "date": "October 14th & October 19th 2020"
    },
    {
        "id": "meet_colombia",
        "title": "MeetUp Colombia",
        "place": "Medellin - Colombia",
        "date": "October 14th & October 19th 2020"
    },
    {
        "id": "meet_argentina",
        "title": "MeetUp Argentina",
        "place": "Rosario - Argentina",
        "date": "October 14th & October 19th 2020"
    },
    {
        "id": "leap_brazil",
        "title": "Sao Paulo Leap",
        "place": "Sao Paulo - Brazil",
        "date": "October 14th & October 19th 2020"
    },
    {
        "id": "mission_colombia",
        "title": "Medellin Recruiting Mission",
        "place": "Medellin - Colombia",
        "date": "October 14th & October 19th 2020"
    },
    {
        "id": "hack_chile",
        "title": "Santiago VanHackathon",
        "place": "Santiago - Chile",
        "date": "October 14th & October 19th 2020"
    },
    {
        "id": "webinar_brazil",
        "title": "Brazil Webinar",
        "place": "-",
        "date": "October 14th & October 19th 2020"
    },
    {
        "id": "webinar_chile",
        "title": "Chile Webinar",
        "place": "-",
        "date": "October 14th & October 19th 2020"
    }
]

function closeModal() {
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('modal').classList.add('hide');
    });
}

function moreDetails() {
    let buttons = document.querySelectorAll('.more-details'),
        buttonsArr = Array.prototype.slice.call(buttons);

    buttonsArr.map(btn =>  {
        btn.addEventListener('click', () => {
            document.getElementById('modal').classList.remove('hide');
            document.querySelector('.modal-content').classList.remove('hide');

            contentModal.filter((content) => {    
                if(content.id === btn.getAttribute('data-event')) {
                    document.querySelector('.modal-content h2').innerHTML = `${content.title}`;
                    document.querySelector('.modal-content h3').innerHTML = `${content.date}`;
                    document.querySelector('.modal-content .place').innerHTML = `${content.place}`;
                }
            
            })

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
    moreDetails();
    applyForEvent();
}

document.querySelector('body').addEventListener('load', init());