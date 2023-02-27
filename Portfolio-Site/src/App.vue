<template>
  <section class="spacer layer2">
    <ProfileCard title="Joshua Crews" position="Generalist Software developer" tools="C#/.NET, Python, JavaScript"
      description="Freelancer, available for work" location="Based in Australia" />

    <div id="social-links-container">
      <SocialLink name="LinkedIn" url="https://www.linkedin.com/in/joshua-crews-hb23/"
        imageSrc="./assets/In-White-40-┬«.png" />
      <SocialLink name="GitHub" url="https://github.com/TheHungryBandito" imageSrc="./assets/In-White-40-┬«.png" />
    </div>
  </section>
  <section class="darkblue">
    <h1>Projects</h1>
    <ProjectCard projectName="Porfolio-Site" role="Sole Developer" projectDescription="Site to hold my portfolio." />
  </section>
  <section class="spacer layer5">
    <h1 style="margin-top: 60%">Section 3</h1>
  </section>
</template>

<script>
import ProfileCard from './components/ProfileCard.vue';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',
  components: {
    ProfileCard,
    ProjectCard,
  }
}
</script>