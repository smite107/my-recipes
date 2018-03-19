start /min cmd /k "npm run server"
start /min cmd /k "npm start"
timeout /t 10
start cmd /k "npm run watch"