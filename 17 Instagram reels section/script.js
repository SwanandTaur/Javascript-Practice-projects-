let reels = document.querySelectorAll(".reel");
let reelSection = document.querySelector("section");
let flag = 0;

let reelsObj = [
  {
    reel: "./vids/reel1.mp4",
    profileImg:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww",
    profileName: "funny_place04",
    isFollow: true,
    caption: "The day with laugh...",
    isLiked: false,
    likeCounts: 1200,
    commentCounts: 45,
    shareCounts: 18,
  },
  {
    reel: "./vids/reel2.mp4",
    profileImg:
      "https://images.unsplash.com/photo-1655629917507-a3104d1cac77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    profileName: "forest_life_24",
    isFollow: false,
    caption: "King is not in the mood ha ha ha.",
    isLiked: true,
    likeCounts: 980,
    commentCounts: 30,
    shareCounts: 12,
  },
  {
    reel: "./vids/reel3.mp4",
    profileImg:
      "https://images.unsplash.com/photo-1719782622525-89a6e1eb8610?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    profileName: "tourism_fun",
    isFollow: true,
    caption: "Trying this new plays for next place for tour!",
    isLiked: false,
    likeCounts: 1500,
    commentCounts: 62,
    shareCounts: 25,
  },
  {
    reel: "./vids/reel4.mp4",
    profileImg:
      "https://images.unsplash.com/photo-1548382131-e0ebb1f0cdea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtaWxlfGVufDB8fDB8fHww",
    profileName: "love_guru",
    isFollow: false,
    caption: "Lets meet new friends!",
    isLiked: true,
    likeCounts: 2300,
    commentCounts: 80,
    shareCounts: 40,
  },
  {
    reel: "./vids/reel5.mp4",
    profileImg:
      "https://images.unsplash.com/photo-1542596594-649edbc13630?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcHklMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    profileName: "daily_doodles",
    isFollow: true,
    caption: "Sketching all day, every day 🎨",
    isLiked: false,
    likeCounts: 890,
    commentCounts: 20,
    shareCounts: 10,
  },
  {
    reel: "./vids/reel6.mp4",
    profileImg:
      "https://media.istockphoto.com/id/2096137422/photo/woman-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=WSJCa8WtOBFDhJf27HIzR9nI-IC2amDONgLXa-nFt8k=",
    profileName: "pet_lovers_unite",
    isFollow: true,
    caption: "This Baby Just Stole Everyone’s Heart 😍👶",
    isLiked: true,
    likeCounts: 3000,
    commentCounts: 105,
    shareCounts: 50,
  },
  {
    reel: "./vids/reel7.mp4",
    profileImg:
      "https://images.unsplash.com/photo-1542353436-312f0e1f67ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fHww",
    profileName: "music_vibes",
    isFollow: false,
    caption:
      "Just an average girl with big dreams⛰️🍃..#travel #trending #viral #nature #mountains",
    isLiked: false,
    likeCounts: 750,
    commentCounts: 18,
    shareCounts: 7,
  },
  {
    reel: "./vids/reel8.mp4",
    profileImg:
      "https://media.istockphoto.com/id/2165434647/photo/portrait-of-adult-young-women-stand-and-smile-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=w7mv7qCIzCdbEHHSpU8uqaky68H_1rNBYaSHz4DCxTo=",
    profileName: "makeup_magic",
    isFollow: true,
    caption: "OFFROAD ADVENTURES AWAITS IN  4x4 #shorts #4x4",
    isLiked: true,
    likeCounts: 2100,
    commentCounts: 95,
    shareCounts: 32,
  },
  {
    reel: "./vids/reel9.mp4",
    profileImg:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    profileName: "coding_corner",
    isFollow: false,
    caption:
      "I love dark vibes and weathers🔥 #harleydavidson #darksouls #harleylife #bikelife”",
    isLiked: false,
    likeCounts: 680,
    commentCounts: 14,
    shareCounts: 5,
  },
  {
    reel: "./vids/reel10.mp4",
    profileImg:
      "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    profileName: "biker_shots",
    isFollow: true,
    caption:
      "Sportster was great. #harleydavidson #sportster883 #bikelover #sunset #bikers",
    isLiked: true,
    likeCounts: 2600,
    commentCounts: 120,
    shareCounts: 60,
  },
];

function fetchReels() {
  let sum = "";
  reelsObj.forEach(function (reel, idx) {
    sum += `<div data-index="${idx}" class="reel">
     <video class="vid" autoPlay loop
          src="${reel.reel}"
        > </video> 
        <i class="ri-heart-3-fill animated"></i>
        <div class="reelInfo">
          <div class="profileInfo">
            <div class="up">
              <div class="profileImg">
                <img
                  src="${reel.profileImg}"
                />
              </div>
              <div class="profileName">${reel.profileName}</div>
              <div id="${idx}" class="isFollowed">${
      reel.isFollow ? "Unfollow" : "Follow"
    }</div>
            </div>
            <div class="caption">
              ${reel.caption}
            </div>
          </div>
        </div>
        <div class="right">
          <div id="${idx}" class="like elem">
            <i class="${
              reel.isLiked
                ? "ri-heart-3-fill love likeIcon"
                : "ri-heart-3-line likeIcon"
            }"></i>
            <div class="likeCount">${reel.likeCounts}</div>
          </div>
          <div class="comment elem">
            <i class="ri-chat-3-line"></i>
            <div class="commentCount">${reel.commentCounts}</div>
          </div>
          <div class="share elem">
            <i class="ri-share-forward-line"></i>
            <div class="shareCount">${reel.shareCounts}</div>
          </div>
          <div class="info elem">
            <i class="ri-more-2-fill"></i>
          </div>
        </div>
      </div>`;
  });
  reelSection.innerHTML = sum;
}

fetchReels();

reelSection.addEventListener("click", function (dets) {
  // console.log(dets.target);

  if (dets.target.className === "like elem") {
    if (!reelsObj[dets.target.id].isLiked) {
      reelsObj[dets.target.id].isLiked = true;
      reelsObj[dets.target.id].likeCounts++;
    } else {
      reelsObj[dets.target.id].isLiked = false;
      reelsObj[dets.target.id].likeCounts--;
    }
    fetchReels();
  }

  if (dets.target.className === "isFollowed") {
    if (!reelsObj[dets.target.id].isFollow) {
      reelsObj[dets.target.id].isFollow = true;
    } else {
      reelsObj[dets.target.id].isFollow = false;
    }
    fetchReels();
  }
});

reelSection.addEventListener("dblclick", function (dets) {
  let reel = dets.target.closest(".reel");
  if (!reel) return;

  let id = reel.dataset.index;
  if (id === undefined) return;

  let heart = reel.querySelector(".animated");
  // let heart = document.querySelector(".reel>i");

  heart.style.opacity = 1;
  heart.style.transform = "translate(-50%, -50%) scale(1)";
  
  setTimeout(() => {
    heart.style.opacity = 0;
  }, 600);

  setTimeout(() => {
    heart.style.transform = "translate(-50%, -50%) scale(0)";
  }, 700);

  if (!reelsObj[id].isLiked) {
    reelsObj[id].isLiked = true;
    reelsObj[id].likeCounts++;
    setTimeout(() => {
      fetchReels();
    }, 750);  
  }
});
