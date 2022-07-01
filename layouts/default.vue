<template>
  <div class="cnc">
    <div class="cnc-background" />
    <div class="flex-center position-ref full-height">
      <div class="content">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Brampton Coffee and Code",
    };
  },
};
</script>

<style>
html,
body,
.cnc {
  background-color: #fff;
  color: #636b6f;
  font-family: "Nunito", sans-serif;
  font-weight: 100;
  height: 100vh;
  margin: 0;
}

.full-height {
  height: 100vh;
}

.cnc-background {
  background-image: url("~assets/coffee-n-code.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.3;
  height: 100%;
  position: absolute;
  width: 100%;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

.position-ref {
  position: relative;
}

.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.content {
  text-align: center;
}

.title {
  font-size: 84px;
}

.sub-title {
  font-size: 60px;
}

.sub-sub-title {
  font-size: 40px;
}

.m-10 {
  margin: 10px;
}

a {
  color: #636b6f;
  text-decoration: none;
}

.links > a {
  color: #636b6f;
  padding: 0 25px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
}

.m-b-md {
  margin-bottom: 30px;
}
</style>
