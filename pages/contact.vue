<template>
  <div class="cnc">
    <div class="cnc-background" />
    <Navigation />
    <div class="page-container">
      <div class="hero-section">
        <div class="title m-b-md">Join Our Community</div>
        <div class="sub-title">Ready to connect with amazing developers? Here's how to get started!</div>
      </div>

      <div class="steps-section">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3>💬 Join Discord</h3>
            <p>Connect with our community on Discord for real-time chat, announcements, and to continue conversations after meetups.</p>
            <a href="https://bit.ly/2UZMeks" target="_blank" class="discord-button">
              👾 Join Discord Server
            </a>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3>📅 Attend at the Library</h3>
            <p>Join us in person at Springdale Library in Brampton - no RSVP required! Just show up and start coding with us.</p>
            <div class="session-info">
              <span>🕰️ Every other Saturday</span>
              <span>⏰ 11:00 AM - 1:00 PM EST</span>
              <span>📍 <a href="https://www.bramptonlibrary.ca/your-library/branches/springdale-library-branch" target="_blank" style="color: #333; text-decoration: underline;">Springdale Library, Brampton</a></span>
            </div>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3>🚀 Start Coding</h3>
            <p>Bring your projects, questions, or just curiosity to learn. We're here to help and collaborate!</p>
            <div class="bring-list">
              <span>💻 Your laptop</span>
              <span>🤔 Questions or ideas</span>
              <span>🛠️ A project</span>
              <span>☕ Enthusiasm (we provide the coffee!)</span>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-section">
        <div class="contact-card">
          <h3>📧 Get In Touch</h3>
          <p>Have questions? Want to suggest a topic? Reach out to our organizer!</p>
          <a href="https://judd.dev" target="_blank" class="contact-button">
            Contact Andrew Judd
          </a>
        </div>
      </div>

      <div class="faq-section">
        <h3 class="section-title">❓ Frequently Asked Questions</h3>
        <div class="faq-grid">
          <div class="faq-card">
            <h4>Do I need to be an experienced developer?</h4>
            <p>Not at all! We welcome developers of all skill levels, from complete beginners to seasoned experts. Everyone has something to learn and teach.</p>
          </div>

          <div class="faq-card">
            <h4>What should I bring to sessions?</h4>
            <p>Just bring your laptop and enthusiasm to learn. We'll provide a welcoming community, great conversations, and coffee!</p>
          </div>

          <div class="faq-card">
            <h4>Is there a cost to attend?</h4>
            <p>Absolutely free! Coffee 'n' Code is a community-driven meetup with no fees or hidden costs. Just show up and enjoy!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Contact - Coffee \'n\' Code'
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

.steps-section {
  margin-bottom: 60px;
}

.step-card {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 40px 35px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.step-card:hover {
  transform: translateX(10px);
}

.step-number {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 24px;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(34, 197, 94, 0.3);
}

.step-content {
  flex: 1;
  text-align: center;
}

.step-content h3 {
  color: #333;
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 600;
}

.step-content p {
  color: #666;
  line-height: 1.6;
  font-size: 16px;
  margin-bottom: 20px;
}

.discord-button {
  display: inline-block;
  background: #22c55e;
  color: white;
  padding: 15px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(34, 197, 94, 0.3);
}

.discord-button:hover {
  background: #16a34a;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(22, 163, 74, 0.4);
  color: white;
}

.session-info, .bring-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px;
  justify-content: center;
}

.session-info span, .bring-list span {
  background: rgba(34, 197, 94, 0.1);
  color: #333;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.contact-section {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}

.contact-card {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(22, 163, 74, 0.9));
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 40px;
  text-align: center;
  color: white;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 500px;
}

.contact-card h3 {
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 600;
}

.contact-card p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  opacity: 0.95;
}

.contact-button {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 15px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.contact-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  color: white;
}

.faq-section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 32px;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 600;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
}

.faq-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px 25px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.faq-card:hover {
  transform: translateY(-5px);
}

.faq-card h4 {
  color: #333;
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
}

.faq-card p {
  color: #666;
  line-height: 1.6;
  font-size: 15px;
}

@media screen and (max-width: 768px) {
  .step-card {
    flex-direction: column;
    text-align: center;
    gap: 20px;
    padding: 30px 25px;
  }

  .session-info, .bring-list {
    justify-content: center;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }

  .contact-card {
    padding: 30px 25px;
  }
}
</style>
