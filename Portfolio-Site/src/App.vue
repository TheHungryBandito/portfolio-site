<template>
  <section class="spacer layer2">
    <ProfileCard title="Joshua Crews" position="Generalist Software developer" tools="C#/.NET, Python, JavaScript"
      description="Freelancer, available for work" location="Based in Australia" />
  </section>
  <section class="darkblue">
    <h1 class="titlefont">Projects</h1>
    <div id="project-cards">
      <ProjectCard class="item1 layer1" projectName="Portfolio-Site" role="Sole Developer"
        projectDescription="Made to hold projects created by Joshua Crews, the portfolio site itself was created using Node.JS, JavaScript, HTML, CSS, and Vue.JS with source control using GitHub."
        projectThumbnailURL="portfolio-site-thumbnail.png" url="http://localhost:5173/" />
      <ProjectCard class="item2 layer4" projectName="IT Ticketing System" role="Backend Developer / Mentor"
        projectDescription="(Work in progress) A fully featured ticket system for the IT sector. This project is being built using Node.JS, Express.JS, MySQL, Gulp, HTML, CSS, SCSS."
        projectThumbnailURL="" url="https://github.com/RJD27/it_ticketing_system" />
      <ProjectCard class="item3 layer8" projectName="Tower Shuffle" role="Unity Programmer"
        projectDescription="A rogue-lite 2D Tower defense game where towers and abilities are in the form of cards and players can get achievements to unlock more cards. Built with Unity, Shader Graph, C#, GitHub."
        projectThumbnailURL="" url="https://github.com/TheHungryBandito/Tower-Shuffle" />
      <ProjectCard class="item4 layer5" projectName="Social Post Generator" role="Software Developer"
        projectDescription="A social media post generator that integrates the ChatGPT API and DALLE API to create template social media posts about the user specified topic. Built using Python."
        projectThumbnailURL="" />
    </div>
  </section>
  <section class="spacer layer5">
    <h1 class="titlefont" style="margin-top: 60%">Contact</h1>
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