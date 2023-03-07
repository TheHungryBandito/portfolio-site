<template>
    <div id="thank-you-container">
        <div class="darkblue glow">
            <h1 class="titlefont">Thank You</h1>
            <h3>Your contact request has been submitted successfully.</h3>
        </div>
        <div>
            <button class="glow darkblue" @click="home">Home</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThankYouCard',
    mounted() {
        this.scrollToElement();
    },
    methods: {
        home() {
            this.$router.push({ path: '/' });
            document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
        },
        scrollToElement() {
            const container = document.getElementById("thank-you-container");
            if (container) {
                container.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>