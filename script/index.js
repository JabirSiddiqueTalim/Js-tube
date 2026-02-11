function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data )=> displayCategories(data.categories));
}
function loadVideoCard()
{
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
  .then(Response=>Response.json())
  .then(data=>
    {
      document.getElementById("all-btn").classList.add('active');
      displayVideo(data.videos)
});
}
function removeActiveBtn()
{
  const activeBtn=document.getElementsByClassName('active');
  console.log(activeBtn);
  for(let act of activeBtn )
  {
    act.classList.remove('active');
  }
}
const loadCategoriesVideo=(id)=>
{
   console.log(id);
   const url =`https://openapi.programming-hero.com/api/phero-tube/category/${id}`
   console.log(url)
   fetch(url)
   .then((res)=>res.json())
   .then((data)=>
    {
      removeActiveBtn();
      const clickedBtn=document.getElementById(`btn-${id}`)
      console.log(clickedBtn);
      clickedBtn.classList.add("active");
      displayVideo(data.category);

    })
}


function displayCategories(categories) {
  const categoriesButton=document.getElementById("categories-button");
     for(let cot of categories)
     {
      console.log(cot)
      const categoriesDiv=document.createElement('div');
      categoriesDiv.innerHTML=`
        <button id="btn-${cot.category_id}" onclick="loadCategoriesVideo(${cot.category_id})" class="btn btn-sm mr-5  hover:bg-red-800 hover:text-white">${cot.category}</button>
      `
      categoriesButton.appendChild(categoriesDiv);

     }

}
function displayVideo(videos)
{
  const videoCard=document.getElementById("video-card");
 // console.log(videos);
 //{category_id: '1003', video_id: 'aaae', thumbnail: 'https://i.ibb.co/Yc4p5gD/inside-amy.jpg', title: 'Inside Amy Schumer', authors: Array(1), …}
 //
 videoCard.innerHTML="";
   if(videos.length==0)
   {
    console.log("innnnn");
    videoCard.innerHTML=`
      <div class="flex flex-col justify-center items-center p-30  col-span-full">
       <img class="w-[120px]" src="./Icon.png" alt="">
       <h1 class="text-2xl font-bold text-center">Oops!! Sorry, There is no content here</h1>
    </div>

    `
    return;
      
   }
  for(let video of videos)
  {
    console.log(video);
    const videoDiv=document.createElement("div");
    
    videoDiv.innerHTML=`
    <div class="card bg-base-100 m-5">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Shoes" />
          <span
            class="absolute bottom-2 right-2 text-sm rounded text-white bg-black px-2"
            >3hrs 56 min ago</span
          >
        </figure>

        <div class="flex gap-3 px-0 py-5">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>

          <div class="intro">
            <h2 class="text-sm font-semibold">Midnight Serenade</h2>
            <p class="text-sm text-gray-400 flex gap-1">
               ${video.authors[0].profile_name}
              <img
                class="w-5 h-5"
                src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png"
                alt=""
              />
            </p>
            <p class="text-sm text-gray-400">${video.others.views} view</p>
          </div>
        </div>
      </div>
    `
    videoCard.appendChild(videoDiv);
  }
  
}
loadCategories();


// category_id: '1001', category: 'Music