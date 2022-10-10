// IMPORT SCRIPTS --------------------------------------------------
import { writable } from "svelte/store";

// SETTINGS --------------------------------------------------------
const pageExitDuration = 3000;
const resizeDelay = 2000;

// SETUP ----------------------------------------------------------
export function setUp() {
  // CSS Variables
  document.documentElement.style.setProperty("--page-exit-duration", `${pageExitDuration}ms`);
  document.documentElement.style.setProperty("--viewport-height", `${window.innerHeight}px`);

  // RESIZE
  window.addEventListener("resize", ()=> {
    const timerId = setTimeout(()=> {
      document.documentElement.style.setProperty("--viewport-height", `${window.innerHeight}px`);
      clearTimeout(timerId);
    }, resizeDelay);
  });
}

// CURRENT PAGE -----------------------------------------------------
// with page exit design included
function createCurrentPage() {
  const { subscribe, set } = writable("loading-screen");

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

// RESIZE