<template>
  <main>
    <div class="header-section">
      <h1>NuxtHub Starter Template</h1>
      <p class="nav-link-wrapper">
        <NuxtLink
          to="/zerobro-alternatives"
          class="zerobro-link"
        >
          → View Top 2 Alternatives to ZeroBro Project
        </NuxtLink>
      </p>
    </div>
    <ImageGallery />
    <RedirectsPanel />
    <MessagesPanel />
  </main>
</template>

<style scoped>
.header-section {
  padding: 2rem;
  text-align: center;
}

.nav-link-wrapper {
  margin: 1rem 0;
}

.zerobro-link {
  color: #667eea;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

.zerobro-link:hover {
  text-decoration: underline;
}
</style>
