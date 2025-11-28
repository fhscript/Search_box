// search.js
let headStyle = document.querySelector("head");
if(!headStyle)headStyle=document.body;
const atlasStyle=document.createElement("link");
atlasStyle.href="https://cdn.jsdelivr.net/gh/fhscript/Search_box@master/assets/styles/atlas.css";
atlasStyle.rel = "stylesheet";
headStyle.appendChild(atlasStyle);
const atlas = {
  search(input, data) {
    const ar = input.trim().split(" ");
    ar.forEach(a => {
      let sec = null;
     sec=data.querySelectorAll("[data-keyword]");
     if(!sec)sec=data.querySelectorAll(".atlas");
     sec.forEach(c => {
        if (!c.dataset.keyword) c.dataset.keyword = "atlas";
        const qc = (c.dataset.keyword + c.textContent);
        qc.trim().split(",").forEach(b => {
          
          if (qc.trim().toUpperCase().includes(a.trim().toUpperCase())) {
            c.style.display = "";
          }
          else {
            c.style.display = "none";
          }
          
          // sample 
        })
      })
    })
  }
}

window.queryAtlas = async function queryAtlas(cont){

const atlasSearchBox=document.querySelectorAll("#atlas-set");

atlasSearchBox.forEach(st  =>{
  const at = document.createElement("div");
  at.className = "search-input-container";
  at.id="atlasSearchBox";
  at.innerHTML =`
  <form>
      <img src="https://cdn.jsdelivr.net/gh/fhscript/Search_box@master/assets/images/20250918_223801.png" loading="lazy" alt="atlas-search-icon">
    <input type="search" id="" ignore="id,class,hidden,data*,area*">
    <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" 
     width="19" height="19" 
     viewBox="0 0 24 24" 
     fill="none" stroke="currentColor" 
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" />
</svg></button>
    </form>
    <div class="result-container">
      <div class="search-result-box"><a href="#">
        <strong>Atlas search </strong></a>
      </div>
   
    
     <div class="search-result-box">
   <a href="#"><strong>atlas page query </strong></a>
 </div>
 
  <div class="search-result-box">
   <a href="#"><strong>This is where great work starts </strong></a>
 </div>
    </div>
  `; 
  st.innerHTML="";
  st.appendChild(at);
const atForm= at.querySelector("form");
atForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  atlas.search(atForm.querySelector("input").value, cont)
})

atForm.querySelector("input").addEventListener("input", e=>{
  atlas.search(e.target.value, cont)
})
})


}||null;
