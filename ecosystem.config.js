module.exports = {
    apps: [
        {
            name: "Efficiency",
            script: "./dist/server.js",
            watch: false,
            env: {
                "PORT": "9001",
                "NODE_ENV": "production",
                "MONGO_URL": "mongodb://127.0.0.1:27017/jan-planning",
                "COMPANY_NAME": "janatics",
                "ORACLE_URL": "oracle://192.168.0.10:1522/prod",
                "ORACLE_PASSWORD": "Jansfp123",
                "ORACLE_DATABASE": "prod",
                "ORACLE_USER": "jan_sfp",
                "ENV": 'prod'
            }
        }
    ]
}