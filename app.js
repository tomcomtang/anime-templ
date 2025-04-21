const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// 设置静态文件目录
app.use(express.static(path.join(__dirname, './')));

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});