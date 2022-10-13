//const key = "AIzaSyBY4OcyxGFm0-OALj8kJNJRhzMhdMCrqyY"


const Search = async() => {
    try{
       
        const vid = document.getElementById("query").value
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${vid}&key=AIzaSyCEJo5nfULHnuHcDmFAoWiNKirMX7ZC_Es`);
        const data = await res.json();
        appendVideos(data.items)
        console.log(data.items)
    }
    catch(err){
        console.log(err)
    }
} 

const appendVideos = (videos) =>{

    let show_videos = document.getElementById("show_videos");

    show_videos.innerHTML = null;

    videos.forEach(({id:{videoId},snippet:{title},snippet:{thumbnails}}) => {
      
        let div = document.createElement("div");
        div.style.cursor ="pointer"

        let iframe = document.createElement("img")
        iframe.src = thumbnails.high.url;

        let name = document.createElement("h4")
        name.innerText = title;
        
        div.addEventListener("click",() => {
            Playvideo(videoId,title);
        })
        div.append(iframe,name);

        show_videos.append(div);
        const q = document.getElementById("query").value = null;
    });
}

let arr=[];

function Playvideo(videoId,title){


    let obj = {
        video : videoId,
        name : title,
    }
    arr.push(obj);
    localStorage.setItem("ytvideo",JSON.stringify(arr))
    window.location.href = "video.html"
}

fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=$most popular videos in India&key=AIzaSyCEJo5nfULHnuHcDmFAoWiNKirMX7ZC_Es`).then((data)=> {
    return data.json();
}).then((data) => {
    console.log(data)
    Others(data.items)
})
.catch((err) => {
    console.log(err)
})

function Others(data){
    let show_videos = document.getElementById("show_videos");

    show_videos.innerHTML = null;

    data.forEach(({id:{videoId},snippet:{title},snippet:{thumbnails}}) => {
      
        let div = document.createElement("div")
        div.style.cursor = "pointer"

        let iframe = document.createElement("img");
        iframe.src = thumbnails.high.url;

        let name = document.createElement("h4")
        name.innerText = title;

        div.addEventListener("click",() =>{
             
            Playvideo(videoId,title);
        })
        div.append(iframe,name)

        show_videos.append(div);
    })
}