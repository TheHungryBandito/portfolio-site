<template>
    <header>
        <div id="title-container">
            <h1 id="title">{{ title }}</h1>
            <h2 id="subtitle">{{ position }}</h2>
            <h2 id="subtitle">{{ tools }}</h2>
            <p id="text">
                {{ description }}
                <br>
                {{ location }} 
            </p>
        </div>
    </header>
</template>

<script>
export default {
    name: 'MainHeader',
    props: {
        title: String,
        position: String,
        tools: String,
        description: String,
        location: String,
    }
}
</script>