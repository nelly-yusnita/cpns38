// ===== SHOW MENU ===== //
const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close');

const headerOverlay = document.querySelector('.header__overlay');

if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
		headerOverlay.classList.add('show-header-overlay')
	})
}

if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
		headerOverlay.classList.remove('show-header-overlay')
	})
}
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('nav-menu')

	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ===== end remove menu mobile ===== //

// ===== SCROLL SECTIONS ACTIVE LINK ===== //
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
				sectionTop = current.offsetTop - 58,
				sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active link ===== //

// ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const header = document.getElementById('header')

	if(this.scrollY >= 50) header.classList.add('bg-header'); else header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

// ===== QUESTIONS ACCORDION ===== //
const accordionItems = document.querySelectorAll('.questions__item');

accordionItems.forEach((item) =>{
	const accordionHeader = item.querySelector('.questions__header');

	accordionHeader.addEventListener('click', () =>{
		const openItem = document.querySelector('.accordion-open');

		toggleItem(item)

		if(openItem && openItem !== item){
			toggleItem(openItem)
		}
	})
})

const toggleItem = (item) =>{
	const accordionContent = item.querySelector('.questions__content')

	if(item.classList.contains('accordion-open')){
		accordionContent.removeAttribute('style')
		item.classList.remove('accordion-open')
	}else{
		accordionContent.style.height = accordionContent.scrollHeight + 'px'
		item.classList.add('accordion-open')
	}
}
// ===== end questions accordion ===== //

// ===== MODAL ===== //
const modal = document.getElementById('modal'),
		modalContent = document.getElementById('modal-content'),
		closeModal = document.getElementById('close-modal');

function openModal(){
	setTimeout(() =>{
		modal.style.visibility = 'visible';
		modal.style.opacity = 1;
		modalContent.style.transform = 'scale(1) translateY(0)';
	}, 5500)

	closeModal.addEventListener('click', ()=>{
		modal.style.display = 'none';
	})
}
window.addEventListener('scroll', openModal);
// ===== end modal ===== //

// ===== SCROLL UP ===== //
function scrollUp(){
	const scrollUp = document.getElementById('scrollup');

	if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// ===== end scroll up ===== //

// ===== SCROLL REVEAL ANIMATION ==== //
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true// animation repeat //
})

sr.reveal(`.home__blob, .section__title, .footer__container`)
sr.reveal(`.home__data`, {delay: 100})
sr.reveal(`.services__card`, {interval: 100})
sr.reveal(`.questions__container`, {delay: 50})
sr.reveal(`.banner__border`, {origin: 'left'})
sr.reveal(`.banner__data`, {origin: 'right'})
// ===== end scroll reveal animation ===== //