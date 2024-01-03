<template>
  <div class="footer">
    <div class="links">
      <nuxt-link to="/about/"><span>About</span></nuxt-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  margin: 0 auto;

  padding: 0.5rem 1rem;
  background: rgba(27, 28, 31, 0.58);
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-align: center;
    font-family: system-ui;
    font-size: 0.825rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.746rem;
    text-decoration: none;
    color: $linkInactive;

    &:after {
      content: "↗";
      margin-left: 0.25rem;
      opacity: 0;
      transition: opacity 0.2s cubic-bezier(0.04, 0.76, 1, 0.81);
    }

    &:hover {
      &:after {
        opacity: 1;
      }
      span {
        text-decoration: underline;
      }
      color: $linkActive;
    }
  }
}
</style>
<script setup lang="ts"></script>
