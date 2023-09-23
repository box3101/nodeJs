const express = require('express') // express 라이브러리 사용하겠다는 뜻.
const app = express()

app.listen(8080, () => { // 내 컴퓨터에서 PORT 하나 오픈하는 문법
  console.log('http://localhost:8080 에서 서버 실행중')
})

app.get('/', (요청, 응답) => { // 누가 메인 페이지에 접속 시
  응답.send('반갑다')
})

app.get('/news', (요청, 응답) => { // 누가 이런 URL에 접속 시
  응답.send('오늘 비옴')
})