// 1) When pressing on Load Images button, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your query
function loadImages(searchQuery) {
  fetch("http://www.splashbase.co/api/v1/images/search?query=" + searchQuery)
    .then(function(response) {
      return response.json();
    })
    .then(pictures => {
      console.log(pictures);
      var row = document.querySelector("#picturesContainer");
      row.innerHTML = "";
      pictures.images.forEach(img => {
        row.innerHTML += `
      <div class="col-md-4">
     <div class="card mb-4 shadow-sm">
       <img src="${img.url}" width="100%"
         class="bd-placeholder-img card-img-top"
         width="100%"
         height="225"
         xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="xMidYMid slice"
         focusable="false"
         role="img"
         aria-label="Placeholder: Thumbnail"
       >
         <title>Placeholder</title>
         <rect width="100%" height="100%" fill="#55595c" />
         <text x="50%" y="50%" fill="#eceeef" dy=".3em">
           Thumbnail
         </text>
       
       <div class="card-body">
         <p class="card-text">
           This is a wider card with supporting text below as a natural
           lead-in to additional content. This content is a little bit
           longer.
         </p>
         <div
           class="d-flex justify-content-between align-items-center"
         >
           <div class="btn-group">
             <button
               type="button"
               class="btn btn-sm btn-outline-secondary"
             >
               View
             </button>
             <button
               type="button"
               class="btn btn-sm btn-outline-secondary"
             >
               Edit
             </button>
           </div>
           <small class="text-muted">${img.id}</small>
         </div>
       </div>
     </div>
   </div>
   
        `;
      });
    });
}

function searchNow() {
  var searchItem = document.querySelector("#searchText").value;
  loadImages(searchItem);
}
