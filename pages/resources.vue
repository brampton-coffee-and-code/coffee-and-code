<template>
  <div class="cnc">
    <div class="cnc-background" />
    <Navigation />
    <div class="page-container">
      <div class="hero-section">
        <div class="title m-b-md">Developer Resources</div>
        <div class="sub-title">Curated tools and learning materials for your coding journey</div>
      </div>
      
      <div class="resources-section">
        <h3 class="section-title">📚 Learning Platforms</h3>
        <div class="resource-grid">
          <a href="https://developer.mozilla.org" target="_blank" class="resource-card">
            <div class="resource-icon">📜</div>
            <h4>MDN Web Docs</h4>
            <p>Comprehensive web development documentation and tutorials</p>
            <span class="resource-tag">Documentation</span>
          </a>
          
          <a href="https://www.freecodecamp.org" target="_blank" class="resource-card">
            <div class="resource-icon">🎓</div>
            <h4>freeCodeCamp</h4>
            <p>Free coding bootcamp with hands-on projects and certifications</p>
            <span class="resource-tag">Learning</span>
          </a>
          
          <a href="https://www.w3schools.com" target="_blank" class="resource-card">
            <div class="resource-icon">🎯</div>
            <h4>W3Schools</h4>
            <p>Easy-to-follow tutorials and references for web technologies</p>
            <span class="resource-tag">Tutorials</span>
          </a>
        </div>
      </div>
      
      <div class="resources-section">
        <h3 class="section-title">🔧 Development Tools</h3>
        <div class="resource-grid">
          <a href="https://code.visualstudio.com" target="_blank" class="resource-card">
            <div class="resource-icon">💻</div>
            <h4>VS Code</h4>
            <p>Popular code editor with powerful extensions and debugging</p>
            <span class="resource-tag">Editor</span>
          </a>
          
          <a href="https://github.com" target="_blank" class="resource-card">
            <div class="resource-icon">🔀</div>
            <h4>GitHub</h4>
            <p>Version control, collaboration, and project hosting platform</p>
            <span class="resource-tag">Version Control</span>
          </a>
          
          <a href="https://www.postman.com" target="_blank" class="resource-card">
            <div class="resource-icon">🚀</div>
            <h4>Postman</h4>
            <p>API development, testing, and documentation made simple</p>
            <span class="resource-tag">API Testing</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Resources - Coffee \'n\' Code',
  meta: [
    { name: 'description', content: 'Discover curated developer resources including learning platforms like MDN Web Docs, freeCodeCamp, development tools like VS Code, GitHub, and more programming resources.' },
    { name: 'keywords', content: 'developer resources, programming tools, MDN Web Docs, freeCodeCamp, VS Code, GitHub, Postman, coding tutorials' }
  ]
});
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
}

.hero-section {
  text-align: center;
  margin-bottom: 60px;
}

.resources-section, .community-section {
  margin-bottom: 60px;
}

.section-title {
  font-size: 32px;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 600;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.resource-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 35px 30px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.resource-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s;
}

.resource-card:hover::before {
  left: 100%;
}

.resource-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.resource-icon {
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
}

.resource-card h4 {
  color: #333;
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 600;
  text-align: center;
}

.resource-card p {
  color: #666;
  line-height: 1.6;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
}

.resource-tag {
  display: block;
  background: #f0fdf4;
  color: #16a34a;
  border: 1px solid #bbf7d0;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.8;
  text-align: center;
  margin: 0 auto;
  width: fit-content;
}

.community-card p {
  color: #666;
  line-height: 1.5;
  font-size: 15px;
}

@media screen and (max-width: 768px) {
  .resource-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .community-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .resource-card {
    padding: 30px 25px;
  }
}
</style>