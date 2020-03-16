### 视频 Video

```html
<video>
    您的浏览器不支持 video 标签。 // 浏览器不支持时显示这段内容
</video>
```

标签属性：
- autoplay 视频马上开始自动播放，不会等待视频数据加载结束
- controls 显示控件，比如播放按钮、全局按钮等
- loop     循环播放
- preload  视频在页面加载时进行加载，并准备播放，如果添加了 autoplay 则忽略该属性
- src      视频 URL
- width    播放器宽度
- height   播放器高度
- currentTime 以秒为单位的媒体的当前播放位置
- duration 媒体的持续时间(总长度)，以秒为单位（只读）
- muted    默认值为false，设置后，音频初始为静音
- poster   一个海报帧的URL，用于在用户播放或者跳帧之前展示

<VideoDemo />