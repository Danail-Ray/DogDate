<template>
    <div>
        <h1>Hello, world!</h1>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            message: 'Welcome to DogDate!',
        };
    },
    methods: {
        greet() {
            console.log(this.message);
        },
    },
    mounted() {
        this.greet();
    },
};
</script>

<style scoped>
h1 {
    color: blue;
}
</style>
