### <!DOCTYPE>

#### 1. 为什么需要它？  
<br>
对 HTML 文件来说，浏览器使用文件开头的 DOCTYPE 来决定用怪异模式或标准模式处理，所以为了确保页面可以正确地按照标准模式渲染，必须添加 DOCTYPE 声明。
<br>

#### 2. 定义与用法 
<br>
<!DOCTYPE>声明必须是 HTML 文档的第一行，放在 html 标签之前

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

#### 3. HTML 4.01 与 HTML5之间的差异
<br>
因为 HTML 4.01 基于 <a href="https://zh.wikipedia.org/wiki/SGML" target="_blank">SGML</a>，DTD 规定了标记语言的规则，所以需要引入 <a href="https://www.w3school.com.cn/dtd/dtd_intro.asp" target="_blank">DTD</a> 使浏览器正确的渲染内容。

```html
html4.01:
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

html5:
<!DOCTYPE html>
```