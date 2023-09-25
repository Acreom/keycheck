<template>
  <div class="small-key">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.small-key {
  width: 100%;
  height: 100%;
  max-width: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-variant-numeric: tabular-nums;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.014rem;
  color: $blueGrey50;
  font-size: 1.398rem;
  line-height: 1.75rem;
  border-radius: 4px;
  background: rgba(241, 241, 241, 0.10);
  box-shadow: 0px 0.38741591572761536px 0px 0px rgba(0, 0, 0, 0.05), 0px 0.9310142993927002px 0px 0px rgba(0, 0, 0, 0.07), 0px 1.7530173063278198px 0.5364286303520203px 0px rgba(0, 0, 0, 0.08), 0px 3.1270833015441895px 3.2195169925689697px 0px rgba(0, 0, 0, 0.09), 0px 5.848865509033203px 9.389363288879395px 0px rgba(0, 0, 0, 0.10), 0px 14px 27px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 1px #303948 inset;
}
</style>