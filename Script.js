const reviews = [
  {
    srcimg: "./image/icons/Picture-1.png",
    srcstar: "./image/icons/star-1.png",
    title: "King's Head, Little Marlow",
    date: "Sunday, 1st Dec 2024",
    description:
      "I've been using Cadre Crew's services for over a year now, and I couldn't be happier. Their 100% uptime guarantee has been a game-changer for my business. Knowing that......",
    time: "1:25 PM",
    rating: 5,
    srclogo: "./image/icons/review-star-1.png",
    srcbtn1: "./image/icons/edit-btn 1.png",
    srcbtn2: "./image/icons/play-circle-btn 2.png",
    srcstarimg: "./image/icons/stars.png",
  },
  {
    srcimg: "./image/icons/Picture-2.png",
    srcstar: "./image/icons/star-2.png",
    title: "King's Head, Little Marlow",
    date: "Sunday, 1st Dec 2024",
    description:
      "I've been using Cadre Crew's services for over a year now, and I couldn't be happier. Their 100% uptime guarantee has been a game-changer for my business. Knowing that......",
    time: "1:25 PM",
    rating: 5,
    srclogo: "./image/icons/google.png",
    srcbtn1: "./image/icons/edit-btn 1.png",
    srcbtn2: "./image/icons/play-circle-btn 2.png",
    srcstarimg: "./image/icons/stars.png",
  },
  {
    srcimg: "./image/icons/Picture-1.png",
    srcstar: "./image/icons/star-1.png",
    title: "King's Head, Little Marlow",
    date: "Sunday, 1st Dec 2024",
    description:
      "I've been using Cadre Crew's services for over a year now, and I couldn't be happier. Their 100% uptime guarantee has been a game-changer for my business. Knowing that......",
    time: "1:25 PM",
    rating: 5,
    srclogo: "./image/icons/review-star-1.png",
    srcbtn1: "./image/icons/edit-btn 1.png",
    srcbtn2: "./image/icons/play-circle-btn 2.png",
    srcstarimg: "./image/icons/stars.png",
  },
  {
    srcimg: "./image/icons/Picture-2.png",
    srcstar: "./image/icons/star-2.png",
    title: "King's Head, Little Marlow",
    date: "Sunday, 1st Dec 2024",
    description:
      "I've been using Cadre Crew's services for over a year now, and I couldn't be happier. Their 100% uptime guarantee has been a game-changer for my business. Knowing that......",
    time: "1:25 PM",
    rating: 5,
    srclogo: "./image/icons/google.png",
    srcbtn1: "./image/icons/edit-btn 1.png",
    srcbtn2: "./image/icons/play-circle-btn 2.png",
    srcstarimg: "./image/icons/stars.png",
  },
  {
    srcimg: "./image/icons/Picture-1.png",
    srcstar: "./image/icons/star-1.png",
    title: "King's Head, Little Marlow",
    date: "Sunday, 1st Dec 2024",
    description:
      "I've been using Cadre Crew's services for over a year now, and I couldn't be happier. Their 100% uptime guarantee has been a game-changer for my business. Knowing that......",
    time: "1:25 PM",
    rating: 5,
    srclogo: "./image/icons/review-star-1.png",
    srcbtn1: "./image/icons/edit-btn 1.png",
    srcbtn2: "./image/icons/play-circle-btn 2.png",
    srcstarimg: "./image/icons/stars.png",
  },
  {
    srcimg: "./image/icons/Picture-2.png",
    srcstar: "./image/icons/star-2.png",
    title: "King's Head, Little Marlow",
    date: "Sunday, 1st Dec 2024",
    description:
      "I've been using Cadre Crew's services for over a year now, and I couldn't be happier. Their 100% uptime guarantee has been a game-changer for my business. Knowing that......",
    time: "1:25 PM",
    rating: 5,
    srclogo: "./image/icons/google.png",
    srcbtn1: "./image/icons/edit-btn 1.png",
    srcbtn2: "./image/icons/play-circle-btn 2.png",
    srcstarimg: "./image/icons/stars.png",
  },
  {
    srcimg: "./image/icons/Picture-1.png",
    srcstar: "./image/icons/star-1.png",
    title: "King's Head, Little Marlow",
    date: "Sunday, 1st Dec 2024",
    description:
      "I've been using Cadre Crew's services for over a year now, and I couldn't be happier. Their 100% uptime guarantee has been a game-changer for my business. Knowing that......",
    time: "1:25 PM",
    rating: 5,
    srclogo: "./image/icons/review-star-1.png",
    srcbtn1: "./image/icons/edit-btn 1.png",
    srcbtn2: "./image/icons/play-circle-btn 2.png",
    srcstarimg: "./image/icons/stars.png",
  },
  {
    srcimg: "./image/icons/Picture-2.png",
    srcstar: "./image/icons/star-2.png",
    title: "King's Head, Little Marlow",
    date: "Sunday, 1st Dec 2024",
    description:
      "I've been using Cadre Crew's services for over a year now, and I couldn't be happier. Their 100% uptime guarantee has been a game-changer for my business. Knowing that......",
    time: "1:25 PM",
    rating: 5,
    srclogo: "./image/icons/google.png",
    srcbtn1: "./image/icons/edit-btn 1.png",
    srcbtn2: "./image/icons/play-circle-btn 2.png",
    srcstarimg: "./image/icons/stars.png",
  },
];

const reviewSection = document.getElementById("review-section");

// Generate review cards dynamically
reviews.forEach((review) => {
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("review-card");

  reviewCard.innerHTML = `
  
       <div class="review-header">
       <div class="profile-image">
                        <img src="${review.srcimg}"alt="">
                        </div>
                        <div class="review-title">
                        <p>${review.title}</p>
                         <p>${review.date}</p>
                        </div>
                        <img src="${review.srcstar}"alt="">
                    </div> 
                    <div class="review-body">
                    <p>${review.description}</p>
                    </div>
                    <div class="review-star">
                    <div class="rating">
                        <img clas="srclogo" src="${review.srclogo}" alt="">
                       <img clas="starimg" src="${review.srcstarimg}" alt="">
                    </div>
                        <p>${review.time}</p>
                    </div>
                   
                    <div class="buttons">
                        <button> <img src="${review.srcbtn1}" alt="Edit-btn"> Edit Details</button>
                        <button> <img src="${review.srcbtn2}" alt="Play-btn"> Play Review</button>
                    </div>

    `;

  reviewSection.appendChild(reviewCard);
});
