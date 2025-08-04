$(".slider").slick({
  dots: true,
  infinite: true, //if TRUE slides will keep moving and will return to first slide otheriwse it will not move after showing all slides
  speed: 300,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 800,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 928,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// FASHION SLIDER
$(".fashion-slider").slick({
  dots: true,
  infinite: true, //if TRUE slides will keep moving and will return to first slide otheriwse it will not move after showing all slides
  speed: 300,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 800,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1530,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 928,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

// BRAND CAROUSEL

$(".brand-slide").slick({
  dots: true,
  infinite: true, //if TRUE slides will keep moving and will return to first slide otheriwse it will not move after showing all slides
  speed: 300,
  slidesToShow: 9,
  autoplay: true,
  autoplaySpeed: 800,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1530,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 928,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

// LEFT-CAROUSEL SLIDE

$(".hero-slide").slick({
  dots: true,
  infinite: true, //if TRUE slides will keep moving and will return to first slide otheriwse it will not move after showing all slides
  speed: 300,
  autoplay: true,
  autoplaySpeed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 928,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

//Protect Dashboard Using JWT
document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    // alert("Access denied. Please log in first.");
    // If no token, redirect after 3 seconds
    // setTimeout(() => {
    // window.location.href = "../login/index.html";
    // }, 3000);
    window.location.href = "../login/index.html";
    return;
    //stops further execution of code
  }
  //sends token to backend
  try {
    const res = await fetch("http://localhost:3000/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Unauthorized");
    }

    const data = await res.json();
    console.log("Dashboard Data:", data);
  } catch (err) {
    console.error("Error:", err);
    // alert("Session expired or unauthorized access!");

    //Silent Redirection to login page after 3s
    setTimeout(() => {
      console.log("Session expired or unauthorized access");
    }, 300000);

    // here 1s=1000ms and 3k is not working as token expiry is set to 30m
    window.location.href = "../login/index.html";
  }
});

//Logout Functionality: Delete token from localStorage and Redirect user to login page.
document.querySelector(".logoutbtn").addEventListener("click", () => {
  localStorage.removeItem("token");
  // console.log("Token removed");
  window.location.href = "../login/index.html";
});
