<template>
    <div id="social-links">
        <a id="social-link" :href="linkedInURL">in</a>
        <a id="social-link" :href="gitHubURL">gh</a>
    </div>
</template>

<script>
export default {
    name: "SocialLinks",
    props: {
        linkedInURL: String,
        gitHubURL: String, 
    }
}
</script>