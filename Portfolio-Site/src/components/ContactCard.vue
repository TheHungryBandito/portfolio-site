<template >
    <h1 class="titlefont contact-header">Contact</h1>
    <div class="layer4" id="contact-container">
        <form action="https://formsubmit.co/51a174c8c04694af89f28c99d2845746 " method="POST" @submit="getThankYouURL">
            <input type="text" name="name" id="name" placeholder="Enter your name..." required>
            <input type="email" name="email" id="email" placeholder="Enter your email..." required>
            <input type="tel" name="phone" id="phone" pattern="([0-9]{4}[0-9]{3}[0-9]{3})|([0-9]{4}-[0-9]{3}-[0-9]{3})"
                placeholder="Enter your phone number..." required>
            <input type="hidden" name="_subject" value="New Portfolio Email!">
            <input type="hidden" name="_next" id="thankYouURL" value="">
            <textarea name="message" id="message" rows="4" placeholder="How can I help you?" required></textarea>
            <button class="glow" type="submit">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ContactCard',
    methods:
    {
        getThankYouURL() {
            document.getElementById('thankYouURL').value = window.location.origin + "/portfolio-site/#/thank-you";
        }
    }
} 
</script>