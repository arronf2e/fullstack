<template>
    <div class="video">
        <div class="check">
            <a-button type="primary" @click="isSupportVideo">检测当前浏览器是否支持 video </a-button>
        </div>
        <video 
            id="v-demo"
            width="500" 
            height="240"
            controls 
            muted
            src="http://vali.cp31.ott.cibntv.net/youku/6975a41866b4c71f773f22951/03000801005E5F0BA65675D6BC35513B99CE27-4D66-4D66-B40A-715452048A52.mp4?sid=158372594200010004059_00_Aa741638c080246aba5b0c756841c60e4&sign=925f7339512c30a77f8da30293874b13&ctype=50">
            您的浏览器不支持 video 标签。
        </video>
        <div class="controls">
            <a-button type="primary" size="small" @click="play">播放</a-button>
            <a-button type="primary" size="small" @click="pause">暂停</a-button>
            <a-button type="primary" size="small" @click="reset">重置</a-button>
            <a-button type="primary" size="small" @click="speed(0.5)">0.5倍速</a-button>
            <a-button type="primary" size="small" @click="speed(1)">正常速度</a-button>
            <a-button type="primary" size="small" @click="speed(2)">2倍数</a-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            video: '',
        }
    },
    mounted() {
        this.video = document.getElementById('v-demo')
        console.log(this.video.playbackRate, 'this.video')
    },
    methods: {
        isSupportVideo() {
            alert(!!document.createElement('video').canPlayType)
        },
        play() {
            if(this.video.paused) {
                this.video.play()
            }
        },
        pause() {
            this.video.pause()
        },
        reset() {
            this.video.pause()
            this.video.currentTime = 0
        },
        speed(s) {
            this.video.play()
            this.video.playbackRate = s
        }
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