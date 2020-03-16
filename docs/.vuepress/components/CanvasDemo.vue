<template>
    <div class="canvas">
        <canvas id="c-demo"></canvas>
        <div>
            <a-button type="primary" size="small" @click="rect">点击画图</a-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            canvas: ''
        }
    },
    mounted() {
        this.canvas = document.getElementById('c-demo')
    },
    methods: {
        rect() {
            const ctx = this.canvas.getContext('2d')
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            ctx.fillStyle = color
            ctx.fillRect(10, 10, 150, 100)
        }
    }
}
</script>
<style scoped>

</style>