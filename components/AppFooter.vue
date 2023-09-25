<template>
  <div class="footer">
    <nuxt-link to="https://acreom.com" target="_blank">made by acreom</nuxt-link>
    <div class="links">
      <nuxt-link to="/contribute">This tool is open-source. How to contribute?</nuxt-link>
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
    font-family: Inter;
    font-size: 0.825rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.746rem;
    text-decoration: none;
    color: $linkInactive;

    &:hover {
      color: $linkActive;
    }
  }

}
</style>
