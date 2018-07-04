// // Sticky Nav Scroll //
  ready(function() {
    const navBar = document.querySelector("#navbar");

    let origOffsetY = navBar.offsetTop;

    function scroll() {
      if (window.scrollY >= origOffsetY) {
        navBar.classList.add("sticky");
      } else {
        navBar.classList.remove("sticky");
      }
    }
    document.onscroll = scroll;
  });

// MOBILE NAV //
  ready(function() {
    const arrowUp = document.querySelector(".fa-angle-up");
    const mobUl = document.querySelector(".mobile-nav-ul");
    arrowUp.style.display = "none";

    document.querySelector(".open-close-btn .fa-angle-down").onclick = function() {
      this.style.display = "none";
      document.querySelector(".open-close-btn .fa-angle-up").style.display = "block";
      mobUl.classList.add("mobile-active");
    };

    document.querySelector(".open-close-btn .fa-angle-up").onclick = function() {
      this.style.display = "none";
      document.querySelector(".open-close-btn .fa-angle-down").style.display = "block";
      mobUl.classList.remove("mobile-active");
    };
  
 // CLOSE MENU WHEN LINK CLICKED //
  mobUl.onclick = function() {
    this.classList.toggle("mobile-active");
    arrowUp.style.display = "none";
    document.querySelector(".open-close-btn .fa-angle-down").style.display = "block";
  };
});

//************FUNCTIONS************//

// DOMisReady //
function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === "complete"
      : document.readyState !== "loading"
  ) {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
