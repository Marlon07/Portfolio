new kursor({
    type: 1,
    removeDefaultCursor: true,
    color: '#000000'
});

// Obtiene la URL actual
  const currentLocation = window.location.pathname.split("/").pop();
  const menuItems = document.querySelectorAll("nav a");

  menuItems.forEach(item => {
    if(item.getAttribute("href") === currentLocation){
      item.classList.add("active");
    }
  });