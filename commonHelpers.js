import{a as v,i as u,S as L}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const b=o=>o.reduce((t,{tags:r,webformatURL:a,largeImageURL:e,likes:s,views:i,comments:y,downloads:g})=>t+`<li class="photo-container zoom-on-hover">
    <a href=${e} class="card-link js-card-link">
        <img class="photo " src="${a}" alt="${r}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${s}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${i}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${y}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${g}</span>
        </div>
    </div>
</li>
    `,""),S="44058599-8264f26cc64fdb07aa6105d22",w="https://pixabay.com/api/",E=async(o,t)=>(await v(w,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data,f=document.querySelector(".gallery"),P=document.querySelector(".search-form"),l=document.querySelector(".loader"),n=document.querySelector(".photo-btn");let d=1,q=15,m="";function M(){n.classList.remove("is-hidden-btn")}function h(){n.classList.add("is-hidden-btn")}async function p(o,t){l.classList.remove("is-hidden");try{const r=await E(o,t);r.hits.length===0?(u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),h(),n.removeEventListener("click",c)):(f.innerHTML+=b(r.hits),new L(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),t*q>=r.totalHits?(h(),n.removeEventListener("click",c),u.info({message:"We're sorry, but you've reached the end of search results."})):M())}catch(r){console.log(r)}finally{l.classList.add("is-hidden")}}async function c(){d++,await p(m,d),B()}async function $(o){o.preventDefault();const t=o.target.elements.searchKeyword.value.trim();if(f.innerHTML="",t==="")return h(),n.removeEventListener("click",c),u.error({message:"Sorry, there are no images matching your search query. Please try again!"});m=t,l.classList.remove("is-hidden");try{d=1,await p(t,d),n.removeEventListener("click",c),n.addEventListener("click",c)}catch(r){console.log(r)}finally{o.target.reset(),l.classList.add("is-hidden")}}P.addEventListener("submit",$);function B(){const{height:o}=document.querySelector(".photo-container").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
