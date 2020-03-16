<template>
    <div class="audio">
        <div class="check">
            <a-button type="primary" @click="isSupportVideo">检测当前浏览器是否支持 audio </a-button>
        </div>
        <audio 
            id="a-demo"
            controls 
            src="http://vali.cp31.ott.cibntv.net/youku/6975a41866b4c71f773f22951/03000801005E5F0BA65675D6BC35513B99CE27-4D66-4D66-B40A-715452048A52.mp4?sid=158372594200010004059_00_Aa741638c080246aba5b0c756841c60e4&sign=925f7339512c30a77f8da30293874b13&ctype=50">
            您的浏览器不支持 audio 标签。
        </audio>
    </div>
</template>
<script>
export default {
    data() {
        return {
            audio: '',
        }
    },
    mounted() {
        this.audio = document.getElementById('a-demo')
    },
    methods: {
        isSupportVideo() {
            alert(!!document.createElement('audio').canPlayType)
        },
    }
}
</script>
<style scoped>
.check {
    margin-bottom: 10px;
}
.controls {
    margin-top: 10px;
}
</style>