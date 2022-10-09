<!-- SCRIPTS ////////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS -------------------------------------------------
  import page from "../scripts/page.js";

  // IMPORT MODULE COMPONENTS ----------------------------------------
  import SiteHeader from "../modules/SiteHeader.svelte";
  import SiteMenuModal from "../modules/SiteMenuModal.svelte";

  let modalsOpen = {
    siteMenu: false,
  };

  // EVENT HANDLERS ---------------------------------------------------
  function openModal(modal) {
    modalsOpen[modal] = true;
    modalsOpen = modalsOpen;
  };

  function closeModal(modal) {
    modalsOpen[modal] = false;
    modalsOpen = modalsOpen;
  }
</script>

<div>
  <SiteHeader 
    openSiteMenuModal={()=> openModal("siteMenu")}
  />
  <SiteMenuModal
    open={modalsOpen.siteMenu}
    closeModal={()=> closeModal("siteMenu")}
  />
</div>