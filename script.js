// ===== Loader intro animation =====
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const spinner = loader.querySelector('.loader-icon');
  const logo = loader.querySelector('.loader-logo');

  setTimeout(() => {
    spinner.classList.add('spin-out');
    logo.classList.remove('hidden');
    logo.classList.add('animate-in');

    logo.addEventListener('animationend', () => {
      logo.classList.add('spin-custom');
    }, { once: true });

    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => loader.remove(), 1000);
    }, 2500);
  }, 2500);
});

// ===== Data =====
const services = [
  { title: "Lawncare", short: "$15–50", details: "Includes mowing, weeding, raking. Price depends on complexity.", icon: "fa-leaf" },
  { title: "Trash & Recycling Bin Service", short: "$2–5/week", details: "We'll take your bins to/from the curb weekly or on demand.", icon: "fa-trash" },
  { title: "Dog Walking", short: "$10/day", details: "Let us walk your pup and make sure they get some exercise!", icon: "fa-dog" },
  { title: "Watering Plants", short: "$2 one-time | $5 weekly", details: "Going on vacation? We'll water your plants while you're away.", icon: "fa-seedling" },
  { title: "Car Cleaning & Detailing", short: "$25–125", details: "Exterior wash is $25. Full detail ranges $50–125.", icon: "fa-car" },
  { title: "Tech Help", short: "$0–3", details: "We can help with tech issues like remotes or phones.", icon: "fa-mobile-screen-button" },
  { title: "Mail & Package Pickup", short: "$5/week", details: "Secure collection of mail/packages.", icon: "fa-box" },
  { title: "Custom Greeting Cards", short: "$3–5 each", details: "Hand-made cards for birthdays, holidays, and more.", icon: "fa-credit-card" },
  { title: "SVG and Logo creation", short: "$25-100", details: "Custom SVG's or Logos for you or your company.", icon: "fa-image" },
  { title: "Website & Web App creation", short: "$50-200", details: "Custom Website/App creation.", icon: "fa-code" },
  { title: "Photo digitization", short: "$0.50 ea", details: "Digitize your physical or film photos.", icon: "fa-solid fa-photo-film" },
  { title: "Flyer/poster creation", short: "$10-30", details: "Custom flyer/poster creation.", icon: "fa-solid fa-file" },
  { title: "Sticker creation", short: "$2-10", details: "Custom sticker creation.", icon: "fa-solid fa-note-sticky" },
  { title: "Pressure washing", short: "$30-80", details: "Pressure washing for driveways/decks.", icon: "fa-solid fa-droplet" },
  { title: "Videogame development", short: "$20-50", details: "Basic 2D videogame development.", icon: "fa-solid fa-gamepad" },
  { title: "Language translations", short: "FREE", details: "Translate documents.", icon: "fa-solid fa-language" },
  { title: "Award creation", short: "$10", details: "Custom awards to celebrate any occasion.", icon: "fa-solid fa-award" },
  { title: "POD", short: "$2-30", details: "Print on demand service for small batches.", icon: "fa-solid fa-print" },
  { title: "Code debugging", short: "$25-50", details: "Debug your code.", icon: "fa-solid fa-bug-slash" },
];

const storeItems = [
  { name: "Nerf Elite 2.0 cs-10 blaster", price: "$35", image: "https://m.media-amazon.com/images/I/51D6jTaSWNL._AC_UF894,1000_QL80_.jpg" },
  { name: "2x Nerf Elite Disruptor", price: "$25", image: "https://i.mmo.cm/is/image/mmoimg/bp-product-max/nerf-elite-disruptor-2x-pack--142713-1.jpg" },
  { name: "Bluetooth Wireless speaker", price: "$25", image: "https://m.media-amazon.com/images/I/718BUKFjwpL._AC_UF894,1000_QL80_.jpg" },
  { name: "'War Machine' by Andy Remic", price: "$10", image: "https://i5.walmartimages.com/asr/93161983-44c9-4f61-b599-801bd1ef21eb.5a6ffec79dd4c0eb5930c8eef09e420b.jpeg" },
  { name: "4-in-1 Nerf Metamorph blaster", price: "$30", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQww4ck52075ypX3z-5mlVEwp5mH-rHSdOVtQ&s" },
  { name: "Nerf DragonPower SkyBlaze bow", price: "$35", image: "https://i5.walmartimages.com/asr/9733e14e-173d-4265-b8eb-07337ceffcb7.5e4910d9e3f14d5c7147406e4cd4cb3f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" },
  { name: "'Brillancies' by Yasser Seirawan", price: "$15", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSm6gzQ3749q3XehLnXX9OpOG6Xlumk-ZReUkauuQ7iR0DyDoGC" },
  { name: "Coding projects in scratch", price: "$15", image: "https://m.media-amazon.com/images/I/61GQZ9QQh8L._AC_UF1000,1000_QL80_.jpg" },
  { name: "Coding games in scratch", price: "$15", image: "https://images.penguinrandomhouse.com/cover/9781465495020" },
  { name: "Wooden crossbow toy", price: "$20", image: "https://www.kroger.com/product/images/large/front/0084347912553" },
  { name: "Hovering RC helicopter toy", price: "$10", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRfMz0_AVZctp9d3gsXiOLDqN1LXTb7FjtdFxxwXJO2ClS_zaymSxwtlfCQbImg7GOkxyjtp0uRgyttPPNG0VA4uXnxtg4mGtdSy5WpejK-dQ0PSBMo6oMzVQ" },
  { name: "Mongoose Spectra - REQUIRES WORK", price: "$50 OBO", image: "https://c.shld.net/rpx/i/s/i/spin/image/spin_prod_761153212" },
  { name: "King Arthur and his knights of the round table", price: "$10", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXfmuDRvurncu3EsSPMR5zwU7odQ566Ch2QAQt8UTv_qdne47x_Srjietm9gEjQWLSE84EFFKS3NPnA1TW778TzW3N76xy5P6KimcafmLC_d-LKimzCo19" },
  { name: "Tales of the Greek heroes", price: "$10", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQWkLliy9j1CG1vPgcbqAn64tpCqFSHLCRu1uSUh-ea8CWrmr7-TOKs3P7xS7iKjxuUooTdqZ2O63s4Ey0CnfBFoOxhmn7FWYmxT5OG6HAiu-sTCYdl3SZ2" },
  { name: "The adventures of Robin Hood", price: "$10", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvm-NM2KDIZIJaK-6CK3j1spq25Kjm3OaRHxdlTqV_eV7Tqel4tCxNyQWf5aKDZkugGX8PlTew9NxP_Rn-n3vajkKxeb9wbdI0pVgBnlq2RdvhbKi9SueNsA" },
  { name: "SpyX Lazer alarm trap", price: "$20", image: "https://shop.spyscape.com/cdn/shop/products/laser1.png?v=1587097632" },
];

// ===== Holiday coupon logic =====
function isCouponDay() {
  const today = new Date();
  const holidays = [
    { name: "New Year's Day", match: d => d.getMonth() === 0 && d.getDate() === 1 },
    { name: "MLK Jr. Day", match: d => d.getMonth() === 0 && d.getDate() >= 15 && d.getDate() <= 21 },
    { name: "Washington's Birthday", match: d => d.getMonth() === 1 && d.getDate() >= 15 && d.getDate() <= 21 },
    { name: "Memorial Day", match: d => d.getMonth() === 4 && d.getDate() >= 25 && d.getDate() <= 31 },
    { name: "Juneteenth", match: d => d.getMonth() === 5 && d.getDate() === 19 },
    { name: "Independence Day", match: d => d.getMonth() === 6 && d.getDate() === 4 },
    { name: "Labor Day", match: d => d.getMonth() === 8 && d.getDate() >= 1 && d.getDate() <= 7 },
    { name: "Columbus Day", match: d => d.getMonth() === 9 && d.getDate() >= 8 && d.getDate() <= 14 },
    { name: "Veterans Day", match: d => d.getMonth() === 10 && d.getDate() === 11 },
    { name: "Thanksgiving", match: d => d.getMonth() === 10 && d.getDate() >= 22 && d.getDate() <= 28 },
    { name: "Christmas Day", match: d => d.getMonth() === 11 && d.getDate() === 25 },
  ];
  return holidays.find(h => h.match(today));
}

function getDiscountedText(text) {
  const holiday = isCouponDay();
  if (!holiday) return text;
  const match = text.match(/\$(\d+(\.\d+)?)/);
  if (!match) return text;
  const original = parseFloat(match[1]);
  if (original <= 10) return text;
  const discounted = (original - 5).toFixed(2);
  return `${text} <br><span style="color:green;font-weight:bold;">Today: $${discounted} with $5 off!</span>`;
}

function showCouponIfApplicable() {
  const holiday = isCouponDay();
  const alert = document.getElementById('couponAlert');
  if (!alert) return;
  if (holiday && location.hash === '#home') {
    alert.textContent = `🎉 Happy ${holiday.name}! Enjoy $5 off all services over $10 today only!`;
    alert.style.display = 'block';
  } else {
    alert.style.display = 'none';
  }
}

// ===== Hash router (single source of truth — was duplicated) =====
function showPage(hash) {
  document.querySelectorAll('main > section').forEach(sec => sec.style.display = 'none');

  if (hash.startsWith('#service/')) {
    const title = decodeURIComponent(hash.split('/')[1]);
    const service = services.find(s => s.title === title);
    const section = document.getElementById('servicePage');
    section.innerHTML = service ? `
      <h2><i class="fas ${service.icon}"></i> ${service.title}</h2>
      <p><strong>Price:</strong> ${getDiscountedText(service.short)}</p>
      <p>${service.details}</p>
      <p style="font-size:75%">Prices subject to change.</p>
      <button class="btn-book" onclick="bookService('${service.title}')">Book Service</button><br>
      <a href="#home" class="btn-back">← Return to Services</a>
    ` : `<p>Service not found.</p>`;
    section.style.display = 'block';
    return;
  }

  const id = hash.replace('#', '') || 'home';
  const section = document.getElementById(id);
  if (section) {
    section.style.display = 'block';
    showCouponIfApplicable();
  }
}

function initRouter() {
  window.addEventListener('hashchange', () => showPage(location.hash));
  showPage(location.hash);
}

// ===== Services grid =====
function initServices() {
  const grid = document.getElementById('serviceGrid');
  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="icon"><i class="fas ${service.icon}"></i></div>
      <div>
        <div class="card-title">${service.title}</div>
        <div class="card-short">${getDiscountedText(service.short)}</div>
      </div>
    `;
    if (service.title.toLowerCase() === "lawncare") {
      card.onclick = () => window.location.href = "https://andrew-gardner22.github.io/rrlawncare/";
    } else {
      card.onclick = () => location.hash = `#service/${encodeURIComponent(service.title)}`;
    }
    grid.appendChild(card);
  });
}

function bookService(serviceName) {
  location.hash = '#contact';
  setTimeout(() => {
    const messageBox = document.querySelector('.contact-form textarea');
    if (messageBox) messageBox.value = `I'm interested in booking: ${serviceName}`;
  }, 100);
}

// ===== Store (was rendered twice — once here, once in a leftover loop) =====
function initStore() {
  const grid = document.getElementById('storeGrid');
  grid.innerHTML = '';
  storeItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'storecard';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="100%">
      <h1>${item.name}</h1>
      <p class="price">${item.price}</p>
      <p><button onclick="buyProduct('${item.name}', '${item.price}')">Buy</button></p>
    `;
    grid.appendChild(card);
  });
}

function buyProduct(name, price) {
  location.hash = '#contact';
  setTimeout(() => {
    const messageBox = document.querySelector('.contact-form textarea');
    if (messageBox) messageBox.value = `I would like to buy ${name} for ${price}.`;
  }, 200);
}

// ===== Contact form =====
function initForm() {
  const form = document.querySelector('.contact-form');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', () => {
    status.textContent = "Sending...";
    setTimeout(() => {
      status.textContent = "Message sent! We'll be in touch soon.";
      form.reset();
    }, 1500);
  });
}

// ===== Footer donate modal =====
function initDonateModal() {
  const modal = document.getElementById("modal");
  const btn = document.getElementById("openModal");
  const span = document.querySelector(".modal-close");

  btn.onclick = () => modal.style.display = "block";
  span.onclick = () => modal.style.display = "none";
  window.onclick = (event) => {
    if (event.target === modal) modal.style.display = "none";
  };
}

// ===== Store-disabled overlay route guard =====
function checkStoreHash() {
  const overlay = document.getElementById('store-disabled-overlay');
  if (!overlay) return;
  if (window.location.hash === '#store') {
    overlay.classList.add('active');
    document.body.style.pointerEvents = 'none';
    overlay.style.pointerEvents = 'auto';
  } else {
    overlay.classList.remove('active');
    document.body.style.pointerEvents = 'auto';
  }
}

function handleStoreBackBtn() {
  if (document.referrer || window.history.length > 1) {
    window.history.back();
  } else {
    window.location.hash = '#home';
  }
  setTimeout(() => {
    if (window.location.hash === '#store') window.location.hash = '#home';
  }, 100);
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  initServices();
  initStore();
  initRouter();
  initForm();
  initDonateModal();
  checkStoreHash();
});
window.addEventListener('hashchange', checkStoreHash);
