window.addEventListener('DOMContentLoaded', () => {
  //mouseParallax
  let bg = document.querySelectorAll('.header__slider-item');
  window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.forEach(item => {
      item.style.transform = 'translate(-' + x * 0 + 'px, -' + y * 30 + 'px)';
    });
  });

  //Sound
  const btnSound = document.querySelectorAll('.header__visit-sound'),
        songs = document.querySelectorAll('audio'),
        visitInfo = document.querySelectorAll('.header__visit');

  function removeAutoplay(i) {
    songs.forEach(song => {
      song.removeAttribute('autoplay');
      song.pause(i);
    });
  }
  
  function addAutoplay(i = 0) {
    songs[i].setAttribute('autoplay', 'autoplay');
    songs[i].play();
  }

  removeAutoplay();
  addAutoplay();
  
  btnSound.forEach(btn => {
    btn.addEventListener('click', (i) => {
      const btnSoundOn = document.querySelector('.fa-volume-up'),
            btnSoundOff = document.querySelector('.fa-volume-mute');

      if(!btnSoundOn.classList.contains('hide')) {
        btnSoundOn.classList.add('hide');
        btnSoundOff.classList.remove('hide');
        removeAutoplay(i);
      } else {
        btnSoundOn.classList.remove('hide');
        btnSoundOff.classList.add('hide');
        addAutoplay(i);
      }
  });

  });

  //Top Tabs

  const tabs = document.querySelectorAll('.menu__city_link'),
        tabParent = document.querySelector('.menu__city'),
        tabItem = document.querySelectorAll('.menu__city-item'),
        slidesBg = document.querySelectorAll('.header__slider-item');

    function hideTabContent() {
      slidesBg.forEach(slide => {
        slide.classList.add('hide');
      });
        
      visitInfo.forEach(item => {
        item.classList.add('hide');
      });

      tabItem.forEach(tab => {
        tab.classList.remove('menu__city-item_active');
      });

      removeAutoplay();
    }

    function showTabContent(i = 0) {
      slidesBg[i].classList.remove('hide');
      tabItem[i].classList.add('menu__city-item_active');
      visitInfo[i].classList.remove('hide');
      addAutoplay(i);
    }

    tabParent.addEventListener('click', (e)=> {
      const target = e.target;

      if(target && target.classList.contains('menu__city_link')) {
        tabs.forEach((tab, i) => {
          if(target == tab) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });

    hideTabContent();
    showTabContent();


    //Main Slider












});