import{a as h,S as y,i as n}from"./assets/vendor-C4-ZuMk8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const p="46142789-99b5e0e53b7f0f17aff330ecb",L="https://pixabay.com/api/";async function w(e,o=1){const a={key:p,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:15};try{return(await h.get(L,{params:a})).data}catch{throw new Error("Failed to fetch data")}}function E(e){const o=document.getElementById("gallery"),a=e.map(r=>`
    <a href="${r.largeImageURL}" class="gallery-item">
        <div class="wrapper">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        </div>
        <ul class="info">
            <li>Likes: ${r.likes}</li>
            <li>Views: ${r.views}</li>
            <li>Comments: ${r.comments}</li>
            <li>Downloads: ${r.downloads}</li>
        </ul>
    </a>
`).join("");o.insertAdjacentHTML("beforeend",a)}const b=document.getElementById("search-form"),m=document.getElementById("gallery"),i=document.getElementById("load-more"),u=document.getElementById("loader");let v=new y(".gallery-item"),d="",l=1,f=0;b.addEventListener("submit",async e=>{if(e.preventDefault(),d=e.target.elements.searchQuery.value.trim(),l=1,m.innerHTML="",i.classList.add("hidden"),!d){n.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}await g()});i.addEventListener("click",async()=>{l+=1,await g()});async function g(){try{u.classList.remove("hidden");const e=await w(d,l);if(f=e.totalHits,e.hits.length===0&&l===1){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}E(e.hits),v.refresh(),f>m.childElementCount?i.classList.remove("hidden"):(i.classList.add("hidden"),n.info({message:"We're sorry, but you've reached the end of search results."})),I()}catch(e){n.error({message:e.message})}finally{u.classList.add("hidden")}}function I(){const e=m.firstElementChild;if(e){const{height:o}=e.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
