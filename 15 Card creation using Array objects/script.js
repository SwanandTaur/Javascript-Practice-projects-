let cards = document.querySelector(".cards");

let arr = [
  {
    pic: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    name: "Kanazawa Grand Inn Hotel",
    rent: "48",
    rating: "4.8",
    goodness: "Excellent Location",
    offer: "28%",
    tags: {
      Stars: {
        tag: "3-star Hotel",
        icon: `<i class="ri-medal-line"></i>`,
      },
      needs: {
        need1: "Free Wifi",
        need1Icon: `<i class="ri-wifi-line"></i>`,
        need2: "Parking",
        need2Icon: `<i class="ri-roadster-line"></i>`,
        need3: "Food",
        need3Icon: `<i class="ri-cake-3-line"></i>`,
      },
    },
  },
  {
    pic: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
    name: "The Sanraku Hotel",
    rent: "80",
    rating: "4.2",
    goodness: "Good Location",
    offer: "31%",
    tags: {
      Stars: {
        tag: "4-star Hotel",
        icon: `<i class="ri-medal-line"></i>`,
      },
      needs: {
        need1: "Parking",
        need1Icon: `<i class="ri-roadster-line"></i>`,
        need2: "Food",
        need2Icon: `<i class="ri-cake-3-line"></i>`,
        need3: "Accessible",
        need3Icon: `<i class="ri-wheelchair-line"></i>`,
      },
    },
  },
  {
    pic: "https://media.istockphoto.com/id/472899538/photo/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab.webp?a=1&b=1&s=612x612&w=0&k=20&c=jfUTbBOKjcleOom-Wv2v1mBrI84-5qEQK4nuuygpGFk=",
    name: "Onyado Nono Natural Spirit",
    rent: "41",
    rating: "4.1",
    goodness: "Average Location",
    offer: "41%",
    tags: {
      Stars: {
        tag: "3-star Hotel",
        icon: `<i class="ri-medal-line"></i>`,
      },
      needs: {
        need1: "Free Wifi",
        need1Icon: `<i class="ri-wifi-line"></i>`,
        need2: "Bar",
        need2Icon: `<i class="ri-goblet-2-fill"></i>`,
        need3: "Parking",
        need3Icon: `<i class="ri-roadster-line"></i>`,
      },
    },
  },
];

let sum = "";

arr.forEach(function (val) {
  sum += `<div class="card">
          <img
            src=${val.pic}
          />
          <div class="info">
            <div class="top">
              <div class="hotelName">${val.name}</div>
              <div class="rent">$${val.rent}</div>
            </div>
            <div class="about">
              <div class="aboutHotel">
                <div class="rating"><i class="ri-bard-fill"></i>4.8</div>
                <div class="goodness">${val.goodness}</div>
              </div>
              <div class="offer">${val.offer} less than usual</div>
            </div>
            <div class="tags">
              <div class="tag">${val.tags.Stars.icon}${val.tags.Stars.tag}</div>
              <div class="tag">${val.tags.needs.need1Icon}${val.tags.needs.need1}</div>
              <div class="tag">${val.tags.needs.need2Icon}${val.tags.needs.need2}</div>
              <div class="tag">${val.tags.needs.need3Icon}${val.tags.needs.need3}</div>
            </div>
            <div class="bottom">
              <div class="like"><i class="ri-heart-3-line"></i></div>
              <!--<i class="ri-heart-3-fill"></i>-->
              <div class="bookmark"><i class="ri-bookmark-line"></i></div>
              <!--<i class="ri-bookmark-fill"></i>-->
              <div class="book">
                Book Now <i class="ri-book-marked-line"></i>
              </div>
            </div>
          </div>
        </div>`;
});

cards.innerHTML = sum;
