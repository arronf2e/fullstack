### 音频 Audio

```html
<audio>
    您的浏览器不支持 audio 标签。 // 浏览器不支持时显示这段内容
</audio>
```

标签属性：
- autoplay 音频马上开始自动播放，不会等待音频数据加载结束
- controls 显示控件，比如播放按钮
- loop     循环播放
- preload  音频在页面加载时进行加载，并准备播放，如果添加了 autoplay 则忽略该属性
- src      音频 URL

<AudioDemo />