const images=[
{url:"https://picsum.photos/id/1018/900/650",title:"Mountain Escape",cat:"nature"},
{url:"https://picsum.photos/id/1015/900/650",title:"River Valley",cat:"nature"},
{url:"https://picsum.photos/id/1011/900/650",title:"Forest Lake",cat:"nature"},
{url:"https://picsum.photos/id/1031/900/650",title:"City Architecture",cat:"city"},
{url:"https://picsum.photos/id/1048/900/650",title:"Urban Street",cat:"city"},
{url:"https://picsum.photos/id/1067/900/650",title:"Travel Road",cat:"travel"},
{url:"https://picsum.photos/id/1036/900/650",title:"Adventure",cat:"travel"},
{url:"https://picsum.photos/id/1043/900/650",title:"Coastal Journey",cat:"travel"}
];
const gallery=document.getElementById("gallery"), box=document.getElementById("lightbox"), img=document.getElementById("lightboxImg"), cap=document.getElementById("caption");
let current=0, filtered=images;
function render(cat="all"){filtered=cat==="all"?images:images.filter(x=>x.cat===cat);gallery.innerHTML=filtered.map((x,i)=>`<article class="card" data-i="${i}"><img src="${x.url}" alt="${x.title}" loading="lazy"><span>${x.title}</span></article>`).join("");document.querySelectorAll(".card").forEach(c=>c.onclick=()=>open(+c.dataset.i))}
function open(i){current=i;img.src=filtered[current].url;cap.textContent=filtered[current].title;box.classList.add("show")}
function move(step){current=(current+step+filtered.length)%filtered.length;open(current)}
document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelector(".active").classList.remove("active");b.classList.add("active");render(b.dataset.filter)});
document.getElementById("close").onclick=()=>box.classList.remove("show");
document.getElementById("prev").onclick=()=>move(-1);document.getElementById("next").onclick=()=>move(1);
document.addEventListener("keydown",e=>{if(!box.classList.contains("show"))return;if(e.key==="Escape")box.classList.remove("show");if(e.key==="ArrowLeft")move(-1);if(e.key==="ArrowRight")move(1)});
render();