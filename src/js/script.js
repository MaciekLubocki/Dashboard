/* Chart section*/
var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [
      {
        // 4
        label: 'Signups',
        // 5
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        // 7
        hidden: true,
      },
    ],
  },
});

/*Modal*/

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});


function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelector('#myBtn').addEventListener('click', function () {
  openModal('#myModal');
});


/*sidebar */

const sideBar = document.querySelector('.section-statistic');
const sideBar2 = document.querySelector('.section-statistic2');
const container = document.querySelector('.container-content');
const container2 = document.querySelector('.container-content2');
const circle = document.querySelector('.circ-s');

const menuToggle = document.querySelector('#menu-toggle');

var jmediaquery = window.matchMedia('(min-width: 1000px)');
if (jmediaquery.matches) {

  menuToggle.addEventListener('click', function () {
    this.classList.toggle('active');
    sideBar.classList.toggle('active');
    sideBar2.classList.toggle('active');
    container.classList.toggle('active');
    container2.classList.toggle('active');
    circle.classList.toggle('movie-circ');

    document.querySelector('.manager img').classList.toggle('move-img');
    document.querySelector('.manager h3').classList.toggle('text-transparent');
    document.querySelector('.side-picture a').classList.toggle('none');
    document.querySelector('.sidebar-container').classList.toggle('vanish');

    document.querySelectorAll('.p-move').forEach(function (x) {
      x.classList.toggle('hide');
    });

    document.querySelectorAll('.sidebar-svg').forEach(function (x) {
      x.classList.toggle('move');
    });
  });
}
else {
  menuToggle.addEventListener('click', function () {
    this.classList.toggle('active-other-media');
    sideBar.classList.toggle('active-other-media');
    sideBar2.classList.toggle('active-other-media');
    container.classList.toggle('active-other-media');
    container2.classList.toggle('active-other-media');
    circle.classList.toggle('movie-circ');


    document.querySelector('.manager img').classList.toggle('move-img');
    document.querySelector('.manager h3').classList.toggle('text-transparent');
    document.querySelector('.side-picture a').classList.toggle('none');
    document.querySelector('.sidebar-container').classList.toggle('vanish-other-media');
    document.querySelector('.sidebar').classList.toggle('sidebar-other-media');

    document.querySelectorAll('.p-move').forEach(function (x) {
      x.classList.toggle('hide-other-media');
    });

    document.querySelectorAll('.sidebar-svg').forEach(function (x) {
      x.classList.toggle('move-other-media');
    });
  });






}