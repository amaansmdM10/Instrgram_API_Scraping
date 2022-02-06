const m=document.getElementById('search');
const n=document.getElementById('button');
const form = document.getElementById('form');


const url="https://instagram-profile1.p.rapidapi.com/getprofile/"

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    handleEvents();
})

function handleEvents(){
    if(window.navigator.onLine){
        const title= m.value;
        if(title){
            showMovies(url+title);
            m.value= ""
        }
    }
}
function showMovies(url){
fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "instagram-profile1.p.rapidapi.com",
		"x-rapidapi-key": "82ee915b92msh20fbe0c905becc4p15d8a2jsn51e4682c9c2c"
	}
})
.then(response => response.json())
.then(instra => {
    const bio=instra.bio;
    const img=instra.profile_pic_url_hd_proxy;
    const followers=instra.followers;
    const following=instra.following;
    const fullname=instra.full_name;
    const username=instra.username;
    const count=instra.lastMedia.count;
    console.log(instra);
    const inst=`
    <div class="container">
    <div style="display: flex; justify-content: center;">
    <img src="${img}" style="border-radius:50%; border-style:groove;" alt="picture">
    </div>
    <div style="font-size: 40px;">
    <strong style="display: flex; justify-content: center;">${fullname}</strong>
    
    </div>
    &nbsp
    &nbsp
    <div class="row">
    <div class=" offset-2 col">
     <strong>${username}</strong>
    </div>
    <div class="col">
       
      <strong>${followers}&nbspfollowers</strong>
    </div>
    <div class="col">
      <strong>${following}&nbspfollowing</strong>
    </div>
    </div>
    &nbsp
     <div class=" offset-2 col-3" style="font-size: 18px;">
      <strong>${bio}<strong>
     </div>
    <div class="offset-2 col-12">______________________________________________________________________________________________________________________________</div>
    </div>
    ` 
    if(count==0 && media!=0){
        const f=`
            &nbsp
            &nbsp
            &nbsp
            <div style="display: flex; justify-content: center;" class="py-5" >
                  <strong style="font-size: 50px">NO POSTS</strong>
            </div>
        `
        document.querySelector(' .new').innerHTML = f;
    }
    else if(count>=0 && media==0){
        const f=`
        &nbsp
        &nbsp
        &nbsp
        <div style="display: flex; justify-content: center;" class="py-5" >
              <strong style="font-size: 50px">Account Private</strong>
        </div>
        `
        document.querySelector(' .new').innerHTML = f;
    }
    else if(count>=1 && media!=0){
        const f=`
        &nbsp
        &nbsp
        &nbsp
        <div style="display: flex; justify-content: center;" class="py-5" >
              <strong style="font-size: 50px">Under Construction</strong>
        </div>
        `
        document.querySelector(' .new').innerHTML = f;
    }
    document.querySelector(' .instragram').innerHTML = inst;
    
   
    

})
    

.catch(err => {
	console.error(err);
}); 
}
