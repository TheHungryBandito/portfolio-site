<template>
    <header>
        <div id="profile-container">
            <div id="about-container">
                <h1 id="title">{{ title }}</h1>
                <h2 id="subtitle">{{ position }}</h2>
                <h2 id="subtitle">{{ tools }}</h2>
                <p id="text">
                    {{ description }}
                    <br>
                    {{ location }} 
                </p>
            </div>
            <div id="social-links-container">
                <a id="social-link" href="https://www.linkedin.com/in/joshua-crews-hb23/">
                    <img src="../assets/In-White-40-┬«.png" alt="">
                    <h2>LinkedIn</h2>
                </a>
                <a id="social-link" href="https://github.com/TheHungryBandito">
                    <img src="../assets/github-mark-white.png" alt="">
                    <h2>GitHub</h2>
                </a>
            </div>
        </div>
        
    </header>
</template>

<script>
export default {
    name: 'ProfileCard',
    props: {
        title: String,
        position: String,
        tools: String,
        description: String,
        location: String,
    }
}
</script>