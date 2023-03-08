var firstListItem = document.querySelector("ul li");
console.log(firstListItem);
//<li><i class="fas fa-check"></i>Build websites and web applications</li>

firstListItem.style.textTransform = "uppercase";
//<li style="text-transform: uppercase;">…</li>

var moreReasons = document.querySelector(".more-reasons");
console.log(moreReasons);
//<h3 class="more-reasons">You'd like some more reasons?</h3>

moreReasons.style.fontSize = "2.5em";
//<h3 class="more-reasons" style="font-size: 2.5em;">You'd like some more reasons?</h3>

var whyJS = document.querySelector(".intro h3");
console.log(whyJS);
//<h3>Why learn JavaScript?</h3>

whyJS.innerHTML = `Why learn <span class="highlight">JavaScript</span>?`;
console.log(whyJS);
//h3>Why learn <span class="highlight">JavaScript</span>?</h3>

var highlight = document.querySelector(".highlight");
highlight.style.background = "#ffff82";
//<h3>Why learn <span class="highlight" style="background: rgb(255, 255, 130);">JavaScript</span>?</h3>

var mainImage = document.querySelector(".js-image img");
console.log(mainImage);
//<img src="img/js-icon-1.png" alt="JavaScript Logo"></img>

mainImage.src = "img/js-code.png";
mainImage.alt = "JavaScript code example";
console.log(mainImage);
//<img src="img/js-code.png" alt="JavaScript code example"></img>
