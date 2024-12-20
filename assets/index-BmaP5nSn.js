(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const c=a=>`
    <div class="card shadow p-0">
        <div class="card-header text-start d-flex justify-content-between align-items-center w-100">
            <span>
                ${a.titleCard}
            </span>
            <span>
                <button class="btn btn-primary updateButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                </button>
                <button class="btn btn-secondary deleteButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </button>
            </span>
        </div>
        <div class="card-body text-start">
            <p class="card-text">${a.descCard}</p>
        </div>
    </div>
    `,n=(a=[])=>`
        <section id="cardsContainer" class="w-100">
            <div class="d-flex justify-content-center flex-wrap gap-3">
                ${a.join("")}
            </div>
        </section>
    `,d=()=>`
    <form class="my-5">
        <div class="mb-3 text-start">
            <label for="titleForm" class="form-label">Card Title</label>
            <input type="text" class="form-control" id="titleForm" aria-describedby="emailHelp" required>
        </div>
        <div class="mb-3 text-start">
            <label for="descForm" class="form-label">Card description</label>
            <input type="text" class="form-control" id="descForm" required>
        </div>
        <div class="text-end">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
    `,l=a=>`<h1>${a}</h1>`;class u{constructor(e,r){this.titleCard=e,this.descCard=r}}class h{constructor(){this.title=document.querySelector("#titleForm"),this.desc=document.querySelector("#descForm"),this.container=document.querySelector("#cardsContainer"),this.storageCads=localStorage.getItem("cards"),this.cards=this.storageCads?JSON.parse(this.storageCads):[],this.readCard(),this.renderFunctions()}submitForm(){document.querySelector("form").addEventListener("submit",r=>{r.preventDefault(),this.createCard(),this.cleanForm()})}cleanForm(){this.title.value="",this.title.focus(),this.desc.value=""}setLocalStorage(e){const r=JSON.stringify(e);localStorage.setItem("cards",r)}renderFunctions(){this.updateCard(),this.deleteCard()}renderCards(e){this.container.innerHTML=n(e.map(r=>c(r)))}createCard(){console.log("Create");const e=new u(this.title.value,this.desc.value);this.cards.push(e),this.renderCards(this.cards),this.renderFunctions(),this.setLocalStorage(this.cards)}readCard(){if(console.log("Read"),this.storageCads){const e=JSON.parse(this.storageCads);this.renderCards(e)}}updateCard(){document.querySelectorAll(".updateButton").forEach((r,o)=>{r.addEventListener("click",()=>{console.log("Update");const t=prompt("Alterar título",this.cards[o].titleCard),s=prompt("Alterar descrição",this.cards[o].descCard);this.cards[o].titleCard=t,this.cards[o].descCard=s,this.renderCards(this.cards),this.renderFunctions(),this.setLocalStorage(this.cards)})})}deleteCard(){document.querySelectorAll(".deleteButton").forEach((r,o)=>{r.addEventListener("click",()=>{console.log("Delete"),this.cards.splice(o,1),this.renderCards(this.cards),this.renderFunctions(),this.setLocalStorage(this.cards)})})}}document.querySelector("#app").innerHTML=`
    ${l("CRUD Vanilla")}
    ${d()}
    ${n()}
`;const m=new h;m.submitForm();
