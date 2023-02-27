<template>
  <MainHeader 
  title="Joshua Crews" 
  position="Generalist Software developer" 
  tools="C#/.NET, Python, JavaScript" 
  description="Freelancer, available for work"
  location="Based in Australia"/>
  
  <SocialLinks 
  linkedInURL="https://www.linkedin.com/in/joshua-crews-hb23/" 
  gitHubURL="https://github.com/TheHungryBandito"/>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import SocialLinks from './components/SocialLinks.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    SocialLinks,
  }
}
</script>