<template>
  <div class="footer">
    Made with 🤍 from devs at
    <a href="https://acreom.com" target="_blank"><span>acreom</span></a>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;

  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  color: #d7d7d7;

  font-family: system-ui;
  text-align: center;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 155.2%;

  a {
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
