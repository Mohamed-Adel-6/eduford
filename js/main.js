// start slide comments
let boxes = Array.from(document.querySelectorAll('.comments .box'));
let slide = document.querySelector('.comments .slide');
let reverse = document.querySelector('.comments .reverse');
let next = document.querySelector('.comments .next');
let left = 0;
slide.style.left = `${left}px`;
next.onclick = function () {
  left += -(boxes[0].offsetWidth + 68);
  slide.style.left = `${left}px`;
  if (left !== 0) {
    reverse.style.display = "flex"
  };

  if (boxes[1].offsetWidth > 350) {
    if (left === -((boxes[0].offsetWidth + 68) * (boxes.length - 2))) {
      next.style.display = "none"
    };
  }
  else if (boxes[1].offsetWidth > 300) {
    if (left === -((boxes[0].offsetWidth + 68) * (boxes.length - 3))) {
      next.style.display = "none"
    };
  }
  else if (boxes[1].offsetWidth < 300) {
    if (left === -((boxes[0].offsetWidth + 68) * (boxes.length - 1))) {
      next.style.display = "none"
    };
  };
};
reverse.onclick = function () {
  left += (boxes[0].offsetWidth + 68);
  slide.style.left = `${left}px`;
  if (left === 0) {
    reverse.style.display = "none"
  };
  if (boxes[1].offsetWidth > 350) {
    if (left !== -((boxes[0].offsetWidth + 68) * (boxes.length - 2))) {
      next.style.display = "flex"
    };
  } else if (boxes[1].offsetWidth > 300) {
    if (left !== -((boxes[0].offsetWidth + 68) * (boxes.length - 3))) {
      next.style.display = "flex"
    };
  } else if (boxes[1].offsetWidth < 300) {
    if (left !== -((boxes[0].offsetWidth + 68) * (boxes.length - 1))) {
      next.style.display = "flex"
    };
  };
};
// end slide comments