<template>
    <div id="contact-container">
        <form>
            <input type="text" id="name" placeholder="Enter your name..." required>
            <input type="text" id="email" placeholder="Enter your email..." required>
            <input type="text" id="phone" placeholder="Enter your phone number..." required>
            <textarea id="message" rows="4" placeholder="How can I help you?" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ContactCard',
    props: {
    }
}
</script>