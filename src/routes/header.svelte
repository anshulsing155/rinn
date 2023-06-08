<script>
  import { onMount } from 'svelte';
  import "../app.css";
  

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  // Close the menu when a navigation link is clicked
  onMount(() => {
    const links = document.querySelectorAll('.navbar__link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        isMenuOpen = false;
      });
    });
  });
</script>

<header class="navbar bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
  <div class="font-bold">Logo</div>
  <div class="md:hidden">
    <button class="navbar__menu-button" on:click={toggleMenu}>
      <svg class="h-5 w-5 fill-current" viewBox="0 0 20 20">
        <path
          x-show={!isMenuOpen}
          d="M0 4h20v2H0V4zm0 6h20v2H0v-2zm0 6h20v2H0v-2z"
        ></path>
        <path
          x-show={isMenuOpen}
          d="M0 4h20v2H0V4zm0 6h20v2H0v-2zm0 6h20v2H0v-2z"
        ></path>
      </svg>
    </button>
  </div>
  <div class="hidden md:block">
    <nav
      class="navbar__menu flex space-x-4"
      class:navbar__menu-open={isMenuOpen}
    >
      <a href="/" class="navbar__link">Home</a>
      <a href="/about" class="navbar__link">About</a>
      <a href="/contact" class="navbar__link">Contact</a>
    </nav>
  </div>
</header>

<main>
  <slot></slot>
</main>
