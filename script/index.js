function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data )=> displayCategories(data.categories));
}
function loadVideoCard()
{
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
  .then(Response=>Response.json())
  .then(data=>displayVideo(data.videos));
}

function displayCategories(categories) {
  const categoriesButton=document.getElementById("categories-button");
     for(let cot of categories)
     {
      console.log(cot)
      const categoriesDiv=document.createElement('div');
      categoriesDiv.innerHTML=`
        <button class="btn btn-sm mr-5  hover:bg-red-800 hover:text-white">${cot.category}</button>
      `
      categoriesButton.appendChild(categoriesDiv);

     }

}
function displayVideo(videos)
{
  const videoCard=document.getElementById("video-card");
 // console.log(videos);
 //{category_id: '1003', video_id: 'aaae', thumbnail: 'https://i.ibb.co/Yc4p5gD/inside-amy.jpg', title: 'Inside Amy Schumer', authors: Array(1), …}
  for(let video of videos)
  {
    console.log(video);
    const videoDiv=document.createElement("div");
    
    videoDiv.innerHTML=`
       <div class="card bg-base-100 m-5 shadow-sm">
        <figure>
          <img
            src="${video.thumbnail}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${video.title}</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    `
    videoCard.appendChild(videoDiv);
  }
  
}
loadCategories();
loadVideoCard();
