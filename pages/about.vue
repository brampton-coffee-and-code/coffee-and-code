<template>
  <div class="cnc">
    <div class="cnc-background" />
    <Navigation />
    <div class="page-container">
      <div class="hero-section">
        <div class="title m-b-md">About Coffee 'n' Code</div>
        <div class="sub-title">Where developers connect, learn, and grow together</div>
      </div>
      
      <div class="content-grid">
        <div class="feature-card">
          <div class="feature-icon">💡</div>
          <h3>Learn & Share</h3>
          <p>Exchange ideas, get help with coding challenges, and discover new technologies in a supportive environment.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🤝</div>
          <h3>Network</h3>
          <p>Meet like-minded developers and build lasting professional relationships that extend beyond our meetups.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Collaborate</h3>
          <p>Work on open source projects, start new ventures, or find your next coding partner in our community.</p>
        </div>
      </div>
      
      <div class="info-section">
        <div class="info-card">
          <h3>📅 When & Where</h3>
          <p>{{ monthName }} {{ eventDate.day }}, {{ eventDate.year }}<br>11:00 AM - 1:00 PM EST<br><a href="https://www.bramptonlibrary.ca/your-library/branches/springdale-library-branch" target="_blank" style="color: white; text-decoration: underline;">Springdale Library, Brampton</a></p>
          <a href="https://bit.ly/2UZMeks" class="cta-button">Join Our Discord</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { eventDate, monthName } = useNextEvent();

useHead({
  title: 'About - Coffee \'n\' Code',
  meta: [
    { name: 'description', content: 'Learn about Coffee \'n\' Code, a welcoming developer community in Brampton where programmers of all skill levels come together to learn, share knowledge, and collaborate on projects.' },
    { name: 'keywords', content: 'about coffee n code, developer community, programming meetup, Brampton tech, coding collaboration' }
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

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
}

.feature-card h3 {
  color: #333;
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 600;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
  font-size: 16px;
}

.info-section {
  display: flex;
  justify-content: center;
}

.info-card {
  background: linear-gradient(135deg, rgba(99, 107, 111, 0.9), rgba(99, 107, 111, 0.7));
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  color: white;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.info-card h3 {
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 600;
}

.info-card p {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 30px;
}

.location-button {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  margin-right: 15px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.location-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  color: white;
}

.location-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  color: white;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  color: white;
}

@media screen and (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .feature-card {
    padding: 30px 20px;
  }
  
  .info-card {
    padding: 30px 20px;
  }
}
</style>