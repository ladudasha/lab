
// плавный скролл

let anchors = document.querySelectorAll("a[href*='#']")
// console.log(anchors);
for(let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault()
    
    let blockID  = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


// показать банер

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

// скрыть баннер

let showBanner  = document.querySelector('.banner')

window.addEventListener("scroll", function () {
  if (window.scrollY > 1500) {
    showBanner.style.display = 'block'
  } else {
    showBanner.style.display = 'none' 
  }
})