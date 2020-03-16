### HTML5新特性总结

#### 1. 新的语义和结构元素
<br />
header
<br />
footer 
<br />
nav 
<br />
section
<br />
progress
<progress value="22" max="100"></progress>

#### 2. canvas
<br />
canvas 是一个可以使用脚本(通常为JavaScript)来绘制图形的 HTML 元素。
<br />
<pre style="background: #FFF;">
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect (10, 10, 55, 50);
ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect (30, 30, 55, 50);
</pre>
<canvas id="tutorial" width="150" height="150">
    current stock price: $3.15 +0.15
</canvas>
<script>
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect (10, 10, 55, 50);
ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect (30, 30, 55, 50);
</script>

#### 3. 新多媒体元素
<h4>audio</h4>
<br />
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  您的浏览器不支持 audio 元素。
</audio>
<br />
<h4>video</h4>
<video width="320" height="240" src="https://vdept.bdstatic.com/6e78496367336736566e66534646394e/335936356e6e4879/e5783067134c0650aadf71deb53bed34b29cf77b6b2a347ca0a9a8e2d0119876d3a7941b9f1f6f08315ab255c5a2b994.mp4?auth_key=1583686288-0-0-e1badec1e209d463c715a4c3ad26f7e8" controls>
    您的浏览器不支持 video 标签。
</video>


#### 4. 新表单元素
<h4>上传图片</h4>
<br />
<input type="file" />


#### 5. 拖放 drap drop
<br />
<img draggable="true" src="https://avatars1.githubusercontent.com/u/15780058?s=460&v=4"/>