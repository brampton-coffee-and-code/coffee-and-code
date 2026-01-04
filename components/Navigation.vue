<template>
  <nav class="nav">
    <NuxtLink to="/" class="nav-link">Home</NuxtLink>
    <NuxtLink to="/about" class="nav-link">About</NuxtLink>
    <NuxtLink to="/members" class="nav-link">Members</NuxtLink>
    <NuxtLink to="/resources" class="nav-link">Resources</NuxtLink>
    <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
  </nav>
</template>

<style scoped>
.nav {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
}

.nav-link {
  color: #636b6f;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
}

.nav-link:hover {
  color: #333;
}

.router-link-active {
  color: #333;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    background: rgba(255, 255, 255, 0.95);
    padding: 10px;
    margin: 0;
    border-radius: 0;
    z-index: 20;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .nav-link {
    display: inline-block;
    padding: 8px 12px;
    margin: 3px;
    font-size: 11px;
    background: rgba(99, 107, 111, 0.1);
    border-radius: 15px;
    position: relative;
    z-index: 11;
  }
}
</style>