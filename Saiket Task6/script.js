const viewBtn = document.getElementById('viewMenuBtn');
const closeBtn = document.getElementById('closeMenuBtn');
const menuSection = document.getElementById('menuSection');
const menuHint = document.getElementById('menuHint');
const navToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Mobile menu
navToggle.onclick = () => navLinks.classList.toggle('show');

// MAIN TASK 6 FEATURE: View Menu toggles hidden menu
viewBtn.onclick = () => {
  menuSection.classList.add('show');
  menuHint.textContent = 'Menu is now visible - JavaScript toggled hidden section';
  viewBtn.textContent = 'Menu Open ✓';
  viewBtn.style.background = '#FFC700';
  viewBtn.style.color = '#111';
  menuSection.scrollIntoView({ behavior: 'smooth' });
};

closeBtn.onclick = () => {
  menuSection.classList.remove('show');
  menuHint.textContent = 'Click "View Menu" above to display menu';
  viewBtn.textContent = 'View Menu →';
  viewBtn.style.background = '#111';
  viewBtn.style.color = 'white';
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Order form - extra JS interactivity
document.getElementById('orderForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('custName').value.trim();
  const order = document.getElementById('custOrder').value.trim();
  const status = document.getElementById('orderStatus');

  if(name.length < 2){
    status.style.color='red';
    status.textContent='Enter valid name';
    return;
  }
  status.style.color='green';
  status.textContent=`Thanks ${name}! Your order "${order}" is being prepared.`;
  this.reset();
  setTimeout(()=> status.textContent='', 5000);
});