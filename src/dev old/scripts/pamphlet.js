export default function(snapScrollContainer, snapPoints) {

  // ELEMENT REFERENCES ----------------------------------------
  const snapPointPositions = snapPoints.map(snapPoint => {
    return snapPoint.getBoundingClientRect().top;
  });

  // LOCAL STATE -----------------------------------------------
  let currentSnapPoint = 0;
  let scrolling = false;
  let touchStart;

  // FUNCTIONS ----------------------------------------------
  function snap(test1, test2) {
    if (test1 && currentSnapPoint < snapPointPositions.length -1) {
      snapScrollContainer.style.transform = `translateY(-${snapPointPositions[currentSnapPoint + 1]}px)`;
      currentSnapPoint += 1;
    }
    else if (test2 && currentSnapPoint > 0) {
      snapScrollContainer.style.transform = `translateY(-${snapPointPositions[currentSnapPoint - 1]}px)`;
      currentSnapPoint -= 1;
    }
  }

  // EVENTS ////////////////////////////////////////////////////////////
  snapScrollContainer.addEventListener("wheel", e => {
    e.preventDefault();
    if (scrolling === false) {
      scrolling = true;

      snap(e.deltaY > 0, e.deltaY < 0);

      const timerId = setTimeout(()=> {
        scrolling = false;
      }, 500);
    };
  }, {passive: false});

  function handleKey(e) {
    console.log("hi");
    if (e.key === "ArrowUp" || e.key ==="ArrowDown") {
      e.preventDefault();
      if (e.repeat === false) {
        snap(e.key === "ArrowDown", e.key === "ArrowUp");
      }
    }
  }

  document.addEventListener("keydown", e => handleKey(e));

  function cleanUp() {
    document.removeEventListener("keydown", e => handleKey(e));
  }

  snapScrollContainer.addEventListener('touchstart', function (e){
    touchStart = e.touches[0].clientY;
  }, {passive: false});

  snapScrollContainer.addEventListener('touchend', function (e){
    let touchEnd = e.changedTouches[0].clientY;
    snap(touchStart > touchEnd + 5, touchStart < touchEnd - 5);
  }, {passive: false});

  return cleanUp;
}



