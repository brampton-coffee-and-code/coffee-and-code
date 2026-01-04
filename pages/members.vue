<script lang="ts" setup>
const memberDetails = {
  name: "Andrew Judd",
  role: "Community Organizer & Full Stack Developer",
  description: "Passionate about building communities and helping developers grow. Always ready to help with coding challenges!",
  website: "https://judd.dev",
  skills: [
    "15+ Years Experience",
    "Mentoring",
    "Data Analytics",
    "C#",
    "PHP",
    "Python",
    "TDD",
    "Automated Testing",
    "JavaScript/TypeScript",
    "Vue.js",
    "Saas",
    "Server/Infrastructure",
    "Homelabs"
  ]
};

useHead({
  title: 'Members - Coffee \'n\' Code'
});
</script>

<template>
  <div class="cnc">
    <div class="cnc-background" />
    <Navigation />
    <div class="page-container">
      <div class="hero-section">
        <div class="title m-b-md">Our Community</div>
        <div class="sub-title">Meet some of Regulars!</div>
      </div>

      <div class="organizer-section">
        <div class="organizer-card">
          <div class="card-overlay">
            <div class="skills-grid">
              <span v-for="skill in memberDetails.skills" :key="skill" class="skill-tag">{{ skill }}</span>
            </div>
            <a :href="memberDetails.website" target="_blank" class="profile-link">Visit Portfolio</a>
          </div>
          <div class="organizer-avatar">👨‍💻</div>
          <h3>{{ memberDetails.name }}</h3>
          <p class="role">{{ memberDetails.role }}</p>
          <div class="profile-content">
            <p class="default-text">{{ memberDetails.description }}</p>
          </div>
        </div>
      </div>

      <div class="members-grid">
        <div class="member-type-card">
          <div class="member-icon">🌐</div>
          <h4>Full Stack Developers</h4>
          <p>Building end-to-end solutions</p>
        </div>

        <div class="member-type-card">
          <div class="member-icon">🎨</div>
          <h4>Frontend Specialists</h4>
          <p>Creating beautiful user experiences</p>
        </div>

        <div class="member-type-card">
          <div class="member-icon">⚙️</div>
          <h4>Backend Engineers</h4>
          <p>Powering applications behind the scenes</p>
        </div>

        <div class="member-type-card">
          <div class="member-icon">📱</div>
          <h4>Mobile Developers</h4>
          <p>Building apps for iOS and Android</p>
        </div>

        <div class="member-type-card">
          <div class="member-icon">🚀</div>
          <h4>DevOps Engineers</h4>
          <p>Streamlining deployment and infrastructure</p>
        </div>

        <div class="member-type-card">
          <div class="member-icon">🎓</div>
          <h4>Students & Learners</h4>
          <p>Growing their skills and knowledge</p>
        </div>
      </div>

      <div class="join-section">
        <div class="join-card">
          <h3>🎉 Want to Join Our Community?</h3>
          <p>We're always excited to welcome new members! Come as you are, learn, share, and grow with us.</p>
          <a href="/contact" class="cta-button">Get Started</a>
        </div>
      </div>
    </div>
  </div>
</template>

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

.organizer-section {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}

.organizer-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 50px 40px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 400px;
  transition: transform 0.3s ease;
  position: relative;
}

.organizer-card:hover {
  transform: translateY(0);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  padding: 20px;
}

.organizer-card:hover .card-overlay {
  opacity: 1;
  pointer-events: auto;
}

.organizer-avatar {
  font-size: 64px;
  margin-bottom: 20px;
}

.organizer-card h3 {
  color: #333;
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: 600;
}

.role {
  color: #22c55e;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 20px;
}

.organizer-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
}

.profile-link {
  display: inline-block;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.profile-link:hover {
  transform: translateY(-2px);
  color: white;
}

.profile-content {
  position: relative;
  min-height: 80px;
  flex: 1;
}

.default-text {
  margin-bottom: 15px;
  transition: opacity 0.3s ease;
}

.overlay-content {
  position: absolute;
  top: 0;
  left: -40px;
  right: -40px;
  bottom: -100px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 25px;
  padding: 20px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.organizer-card:hover .default-text {
  opacity: 0.3;
}

.organizer-card:hover .overlay-content {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.hover-content {
  transition: all 0.3s ease;
}

.hover-content p {
  margin-bottom: 15px;
}

.card-overlay .skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 15px;
  justify-content: center;
  margin-bottom: 25px;
}

.card-overlay .profile-link {
  z-index: 10;
  position: relative;
}

.skill-tag {
  background: #dcfce7;
  color: #16a34a;
  border: 1px solid #bbf7d0;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
  opacity: 0.8;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-bottom: 60px;
}

.member-type-card:nth-child(5) {
  grid-column: 2;
}

.member-type-card:nth-child(6) {
  grid-column: 3;
}

.member-type-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px 25px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.member-type-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.member-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.member-type-card h4 {
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
}

.member-type-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

.join-section {
  display: flex;
  justify-content: center;
}

.join-card {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(22, 163, 74, 0.9));
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 50px 40px;
  text-align: center;
  color: white;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 500px;
}

.join-card h3 {
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 600;
}

.join-card p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  opacity: 0.95;
}

.cta-button {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  color: white;
}

@media screen and (max-width: 768px) {
  .page-container {
    padding: 100px 20px 40px 20px;
  }

  .members-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .member-type-card:nth-child(5),
  .member-type-card:nth-child(6) {
    grid-column: auto;
  }

  .organizer-card, .join-card {
    padding: 40px 30px;
  }
}
</style>
