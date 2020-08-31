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
    document.getElementById('modal').classList.add('hide');

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
                    document.querySelector('.modal-content').innerHTML = `
                    <h2>MeetUp Brazil</h2>
                    <h3>October 14th & October 19th 2020</h3>
                    <p><i class="fas fa-map-marker-alt"></i> <span class="place">Santiago - Chile</span></p>
                    <p><i class="fas fa-calendar-day"></i> Application date 08/20/2020</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa enim, eleifend eu erat et, venenatis lacinia leo. Vivamus placerat fringilla tellus sed posuere. Ut dapibus purus sit amet massa luctus, sit amet aliquam sem facilisis. Nullam non dictum nisi, vel fringilla dui. Suspendisse quis pretium purus. Donec justo metus, rutrum ac hendrerit sit amet, rhoncus sit amet augue. Aenean ornare accumsan nisi, viverra consectetur felis lobortis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec malesuada et nunc ut aliquet. Vestibulum sodales, ante in gravida vestibulum, lorem leo fermentum urna, nec tempor orci orci non ante.</p>`;
                    document.querySelector('.modal-content h2').innerHTML = `${content.title}`;
                    document.querySelector('.modal-content h3').innerHTML = `${content.date}`;
                    document.querySelector('.modal-content .place').innerHTML = `${content.place}`;
                }
            });
        });
    });
}

function applyForEvent() {
    let buttons = document.querySelectorAll('.apply'),
        buttonsArr = Array.prototype.slice.call(buttons);

    const success = `
        <div class="success">
            <i class="far fa-check-circle"></i>
            <h2>Everything went well!</h2>
            <p>Your application has been submitted successfully</p>
        </div>`;

    const premium = `
        <div class="premium">
            <i class="fas fa-crown"></i>
            <h2>Uh-oh! It is a premium-only Webinar</h2>
            <p>You can have more information about how to become a premium user accessing <a href="https://vanhack.com/premium" target="_blank">VanHack Premium</a>.</p>
        </div>`;

    buttonsArr.map(btn =>  {
        btn.addEventListener('click', () => {
            document.getElementById('modal').classList.remove('hide');

            if(btn.classList.contains('premium')) {
                document.querySelector('.modal-content').innerHTML = premium;   
                return false; 
            }

            document.querySelector('.modal-content').innerHTML = success;
            
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