// init sidenav //
  const sideNav = document.querySelector(".sidenav");
  	M.Sidenav.init(sideNav, {});

// init slider //
  const slider = document.querySelector(".slider");
    M.Slider.init(slider, {
      indicators: false,
      height: 500,
      transition: 500,
      interval: 6000
  });

// init auto-complete //
  const aComplete = document.querySelector(".autocomplete");
    M.Autocomplete.init(aComplete, {
      data: {
        Hawaii: null,
        Stockholm: null,
        London: null,
        Paris: null,
        Dubai: null,
        Berlin: null,
        "New York": null,
        Barcelona: null,
        Australia: null
      }
  });

// init carousel //
  document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelectorAll(".carousel");
      M.Carousel.init(carousel, {
        dist: 0,
        fullWidth: true,
        indicators: true,
        interval: 200
      });
  });

// init collapsible //
  document.addEventListener("DOMContentLoaded", function() {
    const collap = document.querySelectorAll(".collapsible");
      M.Collapsible.init(collap);
  });

// init select //
  document.addEventListener("DOMContentLoaded", function() {
    const sSelect = document.querySelectorAll("select");
    	M.FormSelect.init(sSelect, {});
  });

// Material boxed //
  const matBox = document.querySelectorAll(".materialboxed");
  	M.Materialbox.init(matBox, {});

// Scrollspy //
  const scrSpy = document.querySelectorAll(".scrollspy");
  	M.ScrollSpy.init(scrSpy, {});


// FAB Return Home //
  document.addEventListener('DOMContentLoaded', function() {
    const fabfab = document.querySelectorAll('.fixed-action-btn');
      M.FloatingActionButton.init(fabfab, {
        direction: 'top',
        hoverEnabled: false
      });
  });


      