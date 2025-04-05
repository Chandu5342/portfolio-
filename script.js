function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function showTab(tabId, event) {
  console.log(tabId)
  // Hide all content
  document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
  });

  // Remove active class from all buttons
  document.querySelectorAll('.tab').forEach(btn => {
      btn.classList.remove('active');
  });

  // Show the selected tab
  document.getElementById(tabId).classList.add('active');

  // Highlight the clicked button
  event.currentTarget.classList.add('active');
}
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('active');
}
