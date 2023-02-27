<template>
    <a id="project-container" :href="url">
        <img src="../assets/portfolio-site-thumbnail.png" alt="">
        <div id="project-header">
            <h2>{{ projectName }}</h2>
            <h3>{{ role }}</h3>
        </div>
        <p>{{ projectDescription }}</p>
    </a>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        projectName: String,
        projectDescription: String,
        projectThumbnailURL: String,
        role: String,
        achievements: String,
        url: String,
    }
}
</script>