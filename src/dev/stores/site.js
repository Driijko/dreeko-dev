// IMPORT SCRIPTS --------------------------------------------------
import { writable, get } from "svelte/store";

// SETTINGS --------------------------------------------------------
const pageExitDuration = 3000;
const resizeDelay = 2000;
const startingPageName = "home";

// RESET COUNT ----------------------------------------------------
function createResetCount() {
  const {subscribe, update} = writable(0);

  return {
    subscribe,
    updateResetCount: ()=> update(n => n + 1),
  }
}

export const resetCount = createResetCount();

// CURRENT PAGE --------------------------------------------------------
export const currentPage = writable(null);
export const currentPageName = writable(startingPageName);
export function pageExit(destinationPageName) {
  get(currentPage).style.opacity = 0;
  const timerId = setTimeout(()=> {
    clearTimeout(timerId);
    currentPageName.set(destinationPageName);
  }, pageExitDuration);
};

// CURRENT PAGE NAME --------------------------------------------------
// function createCurrentPageName() {
//   const {subscribe, set} = writable(startingPageName);

//   return {
//     subscribe,
//     setCurrentPageName: pageName => {
//       get(currentPage).style.opacity = 0;
//       const timerId = setTimeout(()=> {
//         clearTimeout(timerId);
//         set(pageName);
//       },pageExitDuration);
//     },
//   }
// }

// export const currentPageName = createCurrentPageName();

// SETUP ----------------------------------------------------------
export function setUp() {

  // CSS Variables
  document.documentElement.style.setProperty("--page-exit-duration", `${pageExitDuration}ms`);
  document.documentElement.style.setProperty("--viewport-height", `${window.innerHeight}px`);

  // RESIZE
  let resizeReady = false;
  window.addEventListener("resize", ()=> {
    if (resizeReady === false) {
      resizeReady = true;
      const timerId = setTimeout(()=> {
        document.documentElement.style.setProperty("--viewport-height", `${window.innerHeight}px`);
        resetCount.updateResetCount();
        clearTimeout(timerId);
        resizeReady = false;
      }, resizeDelay);
    };
  });
}

// CURRENT PAGE -----------------------------------------------------
// with page exit design included
