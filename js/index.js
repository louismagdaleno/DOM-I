const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Update the img src for the logo
let logo = document.getElementById("logo-img").setAttribute('src', siteContent["nav"]["img-src"]);

// Update the img src for the cta-img
let ctaImg = document.getElementById('cta-img').setAttribute('src',siteContent["cta"]["img-src"] );

// Update the img src for the main banner
let middleImg = document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

// Nav - create array of nav children
const navLinks = document.querySelectorAll('a');

// Nav Links - set ID and text content for each nav link
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].setAttribute('id', 'nav-item-'+(i+1));
  navLinks[i].textContent = siteContent['nav'][navLinks[i].getAttribute('id')];
}

// Call to Action - obtain list of children, set textContent for each child
const ctaContent = Array.from(document.querySelector('.cta-text').children);

ctaContent.forEach(element => element.textContent = siteContent['cta'][element.localName]);

// Main Content

// get main container
const topContent = document.querySelector('.top-content');


// get children of main container
let topContent_features = topContent.firstElementChild;
let topContent_about = topContent.lastElementChild;

// set ID's for children of first child
topContent_features.firstElementChild.setAttribute('id', 'features-h4');
topContent_features.lastElementChild.setAttribute('id', 'features-content');

// settext content for children of first child
topContent_features.firstElementChild.textContent = siteContent['main-content'][topContent_features.firstElementChild.id];
topContent_features.lastElementChild.textContent = siteContent['main-content'][topContent_features.lastElementChild.id];

// set ID's for children of last child
topContent_about.firstElementChild.setAttribute('id', 'about-h4');
topContent_about.lastElementChild.setAttribute('id', 'about-content');

// settext content for children of last child
topContent_about.firstElementChild.textContent = siteContent['main-content'][topContent_about.firstElementChild.id];
topContent_about.lastElementChild.textContent = siteContent['main-content'][topContent_about.lastElementChild.id];


topContent_about.setAttribute('id', 'about');







// Contact
const contact = document.querySelector('.contact');

// get contact nodes
let contact_h4 = contact.firstElementChild;
let contact_address = contact_h4.nextElementSibling;
let contact_phone = contact_address.nextElementSibling
let contact_email = contact.lastElementChild;

// setting ID's for children
contact_h4.setAttribute('id', 'contact-h4')
contact_address.setAttribute('id', 'address')
contact_email.setAttribute('id', 'email')
contact_phone.setAttribute('id', 'phone')

// setting text content for children
contact_h4.textContent = siteContent['contact'][contact_h4.id];
contact_address.textContent = siteContent['contact'][contact_address.id];
contact_email.textContent = siteContent['contact'][contact_email.id];
contact_phone.textContent = siteContent['contact'][contact_phone.id];








