<template>
  <h1>About keycheck.dev</h1>
  <p>As developers making an app, we have learned the struggle of finding the corrent shortcuts first hand. What shortcut to use to open a new tab? Which one for a new entity? What shortcuts to avoid, as they clash with system, or browser ones?</p>
  <p>One of the ux principles - the Jakob’s Law states: "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know." For that reason, you want to provide them with controls, both visual and keyboard, that are the same as they are used to. Hence, when designing keyboard shortcuts, you want to copy already existing ones as close as possible.</p>
  <p>While designing shortcuts for our app - running both as an electron app on windows, mac, and linux, but also as a web app, we have spent perhaps too much time figuring out the shortcuts. All the while wishing there was some sort of tool that told you which exact shortcuts are the most used for every action. This pain led us to create the shortcut checker, so both we and other developers can design shortcuts faster and better in the future.</p>
  <h2>Features</h2>
  <p>We want shortcuts checker to be as powerful as possible, while keeping it simple to use. Currently we support 2 main jobs: showing all shortcuts from apps for a specific key combination, and browsing the shortcuts of the supported apps.</p>
  <h3>Check key combinations</h3>
  <p>On the main page, press any key combination. If it represents any shortcut of the supported apps, you will get a list of all the shortcuts it matches. You also get partial matches, showing you similar shortcuts.</p>
  <h3>Browse shortcuts by app</h3>
  <p>On the apps page, you can see a list of all supported apps. Clicking any of them, you get the info about the app, and all the shortcuts it implements. Clicking any of the shortcuts takes you to the main screen with the shortcut pre-filled.</p>
  <h3>Future use cases</h3>
  <p>We currently plan on extending the tool with two more use case - browse by shortcut, and generate cheatsheet. You will be able to search all the shortcuts by keys they use, or by their description. Additionally, you will be able to generate cheatsheet in a for of PDF file for any of the supported tools.</p>
  <h2>Open source</h2>
  <p>Contribute to see the tool grow and help fellow developers and designers. It is easy to add more apps and anyone can do it. See contribution guidelines if you are interested.</p>
  <p>TL;DR all you need to do is create a pull request with a single config file containing the shortcuts of your app, some simple info about the app, and an image with the app icon.</p>
  <h2>Feedback</h2>
  <p>If you encounter any bugs, think of an improvement, or have any other feedback, please let us know by opening an issue in the github repo, or contacting us directly at feedback@keycheck.dev</p>
</template>
<script setup lang="ts">
import {WEBSITE} from "~/helpers/constants";

const {$apps} = useNuxtApp();
const title = computed(() => `About | ${WEBSITE}`);
const allShortcuts = computed(() => $apps.$getApps().reduce((acc, app) => ({...acc, ...app.shortcuts}), {}));
const count = computed(() => $apps.$getApps().length);
const description = computed(() => `Learn About keycheck.dev, the Shortcut Checker for Developers and Designers. Currently Containing ${Object.keys(allShortcuts.value).length} Shortcus from ${count.value} Apps.`);
const ogImageOptions = {
  title,
  provider: 'browser'
}

defineOgImage(ogImageOptions)
useSeoMeta({
  description,
  title,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image',
})
</script>
<style lang="scss" scoped>
h1 {
  @include sizer;
  @include h1;
}
h2 {
  @include sizer(1rem);
  @include h2;
  color: $white;
}
h3 {
  @include sizer(1rem);
  @include h3;
  color: $white;
}
p {
  @include sizer(1rem);
  font-family: system-ui;
  font-size: 1.2rem;
  font-style: normal;
  line-height: 2rem;
  color: $white;
  font-weight: 300;

  &:last-of-type {
    margin-bottom: 128px;
  }
}
</style>