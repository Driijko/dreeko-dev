// IMPORT SCRIPTS --------------------------------------------------
import { writable } from "svelte/store";

// SETTINGS --------------------------------------------------------
const pageExitDuration = 3000;
const resizeDelay = 2000;
const startingPage = "splash";

// RESET COUNT ----------------------------------------------------
function createResetCount() {
  const {subscribe, update} = writable(0);

  return {
    subscribe,
    updateResetCount: ()=> update(n => n + 1),
  }
}

export const resetCount = createResetCount();

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
function createCurrentPage() {
  const { subscribe, set } = writable(startingPage);

  return {
    subscribe,
    setCurrentPage: (currentPage, newPage)=> {
      currentPage.style.opacity = 0;
      const timerId = setTimeout(()=> {
        set(newPage);
        clearTimeout(timerId);
      }, pageExitDuration);
    },
  };
}

export const currentPage = createCurrentPage();