<template>
  <div class="flipper-alternatives">
    <header class="header">
      <h1>🐬 Flipper Zero Alternatives</h1>
      <p class="subtitle">
        Discover open-source alternatives to Flipper Zero on GitHub
      </p>
    </header>

    <main class="main-content">
      <div
        v-if="pending"
        class="loading"
      >
        <p>Loading alternatives...</p>
      </div>

      <div
        v-else-if="error"
        class="error"
      >
        <p>Error loading alternatives: {{ error.message }}</p>
      </div>

      <div
        v-else-if="data"
        class="results"
      >
        <div class="stats">
          <p>Found <strong>{{ data.total }}</strong> Flipper Zero alternatives</p>
        </div>

        <div class="alternatives-grid">
          <article
            v-for="alt in data.alternatives"
            :key="alt.url"
            class="alternative-card"
          >
            <div class="card-header">
              <h2 class="repo-name">
                <a
                  :href="alt.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ alt.name }}
                </a>
              </h2>
              <div class="meta">
                <span class="owner">by {{ alt.owner }}</span>
                <span
                  v-if="alt.stars > 0"
                  class="stars"
                >⭐ {{ alt.stars }}</span>
              </div>
            </div>

            <p
              v-if="alt.description"
              class="description"
            >
              {{ alt.description }}
            </p>

            <div class="card-footer">
              <span
                v-if="alt.language"
                class="language"
              >
                <span
                  class="language-dot"
                  :style="{ backgroundColor: getLanguageColor(alt.language) }"
                />
                {{ alt.language }}
              </span>
              <div
                v-if="alt.topics && alt.topics.length > 0"
                class="topics"
              >
                <span
                  v-for="topic in alt.topics.slice(0, 3)"
                  :key="topic"
                  class="topic"
                >
                  {{ topic }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Flipper Zero Alternatives - GitHub',
  description: 'Discover open-source alternatives to Flipper Zero on GitHub',
})

interface Alternative {
  name: string
  owner: string
  description: string
  stars: number
  language: string | null
  url: string
  topics: string[]
}

interface AlternativesResponse {
  total: number
  alternatives: Alternative[]
}

const { data, pending, error } = await useFetch<AlternativesResponse>('/api/flipper-alternatives')

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    'HTML': '#e34c26',
    'C++': '#f34b7d',
    'Python': '#3572A5',
    'C': '#555555',
    'Shell': '#89e051',
    'JavaScript': '#f1e05a',
    'TypeScript': '#2b7489',
  }
  return colors[language] || '#858585'
}
</script>

<style scoped>
.flipper-alternatives {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.header {
  text-align: center;
  color: white;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
}

.loading,
.error {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

.error {
  background: #fee;
  color: #c00;
}

.stats {
  background: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stats strong {
  color: #667eea;
  font-size: 1.2rem;
}

.alternatives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.alternative-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.alternative-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.repo-name {
  font-size: 1.3rem;
  margin: 0;
}

.repo-name a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
}

.repo-name a:hover {
  text-decoration: underline;
}

.meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 0.9rem;
  color: #666;
}

.owner {
  color: #555;
}

.stars {
  color: #f59e0b;
  font-weight: 500;
}

.description {
  color: #444;
  line-height: 1.5;
  flex-grow: 1;
  margin: 0;
}

.card-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  margin-top: auto;
}

.language {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.85rem;
  color: #666;
}

.language-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.topic {
  background: #f0f0f0;
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .flipper-alternatives {
    padding: 1rem;
  }

  .header h1 {
    font-size: 2rem;
  }

  .alternatives-grid {
    grid-template-columns: 1fr;
  }
}
</style>
