module.exports = {
    apps: [
        {
            name: "my-app",
            script: "./app.js",
            instances: "max",  // Tận dụng tối đa số lượng CPU
            exec_mode: "cluster",  // Chế độ cluster cho ứng dụng
            env: {
                NODE_ENV: "development",  // Môi trường phát triển
            },
            env_production: {
                NODE_ENV: "production",  // Môi trường sản xuất
            },
        },
    ],
};
