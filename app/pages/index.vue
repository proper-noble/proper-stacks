<template>
  <main>
    <nav class="nav-links">
      <NuxtLink
        to="/flipper-alternatives"
        class="nav-link"
      >
        🐬 Find Flipper Zero Alternatives
      </NuxtLink>
    </nav>
    <ImageGallery />
    <RedirectsPanel />
    <MessagesPanel />
  </main>
</template>

<style scoped>
.nav-links {
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.nav-link {
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
