<template>
  <button class="menu-btn" popovertarget="menu">
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="">
  <span class="sr-only">Open menu</span>
</button>

<nav popover id="menu">
  <button class="close-btn" popovertarget="menu" popovertargetaction="hide">
    <span aria-hidden="true">❌</span>
    <span class="sr-only">Close menu</span>
  </button>
  <ul>
    <li><a href="#">Typography</a></li>
    <li><a href="#">Foundations</a></li>
    <li><a href="#">Color</a></li>
    <li><a href="#">Interactions</a></li>
    <li><a href="#">Components</a></li>
    <li><a href="#">Responsive</a></li>
  </ul>
</nav>

<h1>JS-Free hamburger menu demo</h1>
<h2>With the Popover API</h2>
<p>Click open the hamburger menu to see a demo of JavaScript-free interaction handling! By using the <code>popover</code> attribute, you can allow the browser to handle the keyboard management (including navigation via <code>esc</code>, <code>spacebar</code>, and <code>enter</code>), optional light-dismiss (clicking outside the boundaries of the popover), and click handlers such as on the open and close buttons.</p>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@800&display=swap");

/* Animation */

#menu {
  width: 250px;
  height: 100%;

  /*  undo popover styles  */
  border: none;
  padding: 0;
  margin: 0;
  left: auto;

  /*  animate  */
  transition: translate 0.5s ease-out, display 0.5s ease-out allow-discrete,
    overlay 0.5s ease-out allow-discrete;
  translate: 250px 0;

  &::backdrop {
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.5s;
  }

  &:popover-open {
    translate: 0 0;

    &::backdrop {
      opacity: 1;
    }

    @starting-style {
      translate: 250px 0;

      &::backdrop {
        opacity: 0;
      }
    }
  }
}

/* Other styles */

@property --col-2 {
  syntax: "<color>";
  inherits: false;
  initial-value: #5f1dff;
}

@property --col-1 {
  syntax: "<color>";
  inherits: false;
  initial-value: #ff20a3;
}

.menu-btn {
  position: fixed;
  top: 50px;
  right: 250px;
  background: none;
  border: none;
  filter: drop-shadow(2px 2px 0 #ff6dee);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  filter: grayscale(1) drop-shadow(2px 2px 0 #ff6dee);
}

ul {
  display: grid;
  gap: 1rem;
  padding: 0;
  margin: 3.5rem 0 0 2rem;
}

li {
  list-style: none;
}

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

code,
kbd {
  background: lavender;
  border: 1px solid #7f1afc;
  border-radius: 0.5rem;
  padding: 0 0.25rem;
}

h1,
h2,
a {
  font-family: "Alegreya Sans SC";
  margin: 0;
}

h1,
a {
  background: linear-gradient(45deg in oklch, var(--col-2), var(--col-1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

a {
  transition: --col-2 0.25s;

  &:hover {
    --col-2: var(--col-1);
  }
}

h2 {
  color: #7f1afc;
}

p {
  max-width: 40ch;
  line-height: 1.5;
  font-size: 1.25rem;
}

body {
  font-size: 1.5rem;
  font-family: system-ui;
  overflow-x: hidden;
  padding: 2rem;
}
</style>
