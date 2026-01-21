function animate() {
  const lights = document.querySelector(".lights");
  const dots = Array.from({ length: 15 });
  const refs = dots.map(e => {
    const row = createDotRow();
    lights.appendChild(row);
    return row;
  });

  function createDotRow() {
    const row = document.createElement("div");
    row.classList = "dot-row";
    row.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>`
    return row;
  }

  let prevDot;
  let index = -1;
  let topx = 14;

  function update() {

    if (index === topx) {
      index = 0;
      topx--;
    } else {
      index++;
    }
    if (topx === 0) {
      topx = 15;
    }

    const currentDot = refs[index];
    if (prevDot && topx !== index) {
      prevDot.classList.remove("on");
    }

    currentDot && currentDot.classList.add("on");

    if (topx !== index) {
      prevDot = currentDot;
    }
  }
  setInterval(update, 250);
}

function toggleTabs() {
  let prevActiveTab;

  document.addEventListener("click", event => {
    if (event.target.matches("div.expand-box")) {

      if (prevActiveTab === event.target) {
        prevActiveTab.classList.remove("active");
        prevActiveTab = undefined;
        return;
      }

      prevActiveTab && prevActiveTab.classList.remove("active");
      event.target.classList.add("active");
      prevActiveTab = event.target;
    } else if (prevActiveTab && !prevActiveTab.contains(event.target)) {
      prevActiveTab.classList.remove("active");
      prevActiveTab = undefined;
    }
  });
}

function toggleMenu() {
  const trigger = document.getElementById("menu-trigger");
  const menu = document.getElementById("main-menu");
  const close = document.getElementById("close-button");
  let isOpen = false;

  document.addEventListener("click", event => {
    if (event.target === trigger) {
      trigger.classList.add("hide");
      menu.classList.add("open");
      isOpen = true;
    } else if (event.target === close) {
      trigger.classList.remove("hide");
      menu.classList.remove("open");
      isOpen = false;
    } else if (isOpen && !menu.contains(event.target)) {
      trigger.classList.remove("hide");
      menu.classList.remove("open");
    }
  });
}

