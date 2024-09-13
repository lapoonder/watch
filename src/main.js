(() => {
  const mob_menu = {
    // Додати атрибут mobile-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-mobile-modal-open]'),
    // Додати атрибут mobile-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-mobile-modal-close]'),
    // Додати атрибути на лінки в меню
    closeModalHrefHome: document.querySelector('[data-mobile-modal-menu-home]'),
    closeModalHrefAb: document.querySelector(
      '[data-mobile-modal-menu-about_us]'
    ),
    closeModalHrefCat: document.querySelector(
      '[data-mobile-modal-menu-catalog]'
    ),
    closeModalHref: document.querySelector('[data-mobile-modal-menu-sale]'),
    closeModalHref2: document.querySelector('[data-mobile-modal-menu-rewiew]'),
    closeModalHrefCu: document.querySelector(
      '[data-mobile-modal-menu-contact_us]'
    ),
    // Додати атрибут mobile-menu-window на бекдроп модалки
    modal: document.querySelector('[data-mobile-menu-window]'),
    modal_body: document.querySelector('[data-mobile-menu-body-block]'),
  };

  mob_menu.openModalBtn.addEventListener('click', toggleModal);
  mob_menu.closeModalBtn.addEventListener('click', toggleModal);
  mob_menu.closeModalHref.addEventListener('click', toggleModal);
  mob_menu.closeModalHrefHome.addEventListener('click', toggleModal);
  mob_menu.closeModalHrefAb.addEventListener('click', toggleModal);
  mob_menu.closeModalHrefCat.addEventListener('click', toggleModal);
  mob_menu.closeModalHrefCu.addEventListener('click', toggleModal);
  mob_menu.closeModalHref2.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    mob_menu.modal.classList.toggle('is-open');
    mob_menu.modal_body.classList.toggle('mobile-menu-active');
  }
})();
