const express = require('express');
const path = require('path');
const app = express();

// Cấu hình Express để phục vụ tệp build React
app.use(express.static(path.join(__dirname, 'client/build')));

// Route để phục vụ ứng dụng React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Khởi động server trên cổng 80
app.listen(80, () => {
  console.log('Server is running on http://nhungbui.io.vn');
});
