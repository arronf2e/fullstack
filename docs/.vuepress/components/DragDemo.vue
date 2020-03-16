<template>
    <div class="drag">
        <!-- <div class="check">
            <a-button type="primary" @click="isSupportVideo">检测当前浏览器是否支持 audio </a-button>
        </div> -->
        <div>
            <div 
                id="div1" 
                @drop="dropContainer" 
                @dragover="allowDrop"></div>
            <img 
                id="drag1" 
                src="https://avatars1.githubusercontent.com/u/15780058?s=460&v=4" 
                draggable="true" 
                @dragstart="drag" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
        drag(ev) {
            ev.dataTransfer.setData("imgId", ev.target.id)
        },
        allowDrop(ev) {
            ev.preventDefault()
        },
        dropContainer(ev) {
            ev.preventDefault()
            const data = ev.dataTransfer.getData("imgId")
            console.log(data, 'data')
            ev.target.appendChild(document.getElementById(data))
        }
    }
}
</script>
<style scoped>
#div1 {
    width:198px; 
    height:66px;
    padding:10px;
    border:1px solid #aaaaaa;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#drag1 {
    width: 150px;
    height: 50px;
}
</style>