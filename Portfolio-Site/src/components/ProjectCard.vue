<template>
    <header>
        <div id="project-container">
            <img :src="projectThumbnail" alt="No Image Available">
            <h2>{{ projectName }}</h2>
            <h3>{{ role }}</h3>
            <p>{{ projectDescription }}</p>
        </div>
    </header>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        projectName: String,
        projectDescription: String,
        projectThumbnail: String,
        role: String,
        achievements: String,
        url: String,
    }
}
</script>