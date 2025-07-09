# AWS를 이용한 시스템 설계 및 구축과 배포

## 🏁 단일 서버
**소스코드**: Node Express (REST) 소스코드

---

## 📖 프로젝트 소개
이 저장소에는 Node Express를 활용한 REST API 애플리케이션 샘플 소스코드를 포함하고 있습니다.  
강의를 통해 AWS 환경에 시스템을 설계, 구축, 배포하는 과정을 단일 서버(하나의 머신)에서의 실행 방식을 체험할 수 있습니다.

---

## 🛠️ 사용 기술
- Node 22.16.0
- express 5.1.0
- bcrypt 6.0.0
- jsonwebtoken 9.0.2
- mongoose 8.16.0
- dotenv 16.5.0
- MongoDB

---

## 🚀 빌드 및 실행
1. 저장소 클론  
```bash
git clone https://github.com/DXers-edu/single-server-rest-express.git
cd single-server-rest-express
```

2. 애플리케이션 실행  
```bash
npm run start
```

---

## ⚙️ 설정 변경 (중요!)

`.env` 파일

```properties
PORT=4000
MONGO_URI=mongodb://prd_user:StrongP!ssw0rd@localhost:27017/single_server?authSource=single_server
JWT_SECRET=qwertyuioplkjhgfdsazxcvbnm1234567890
JWT_EXPIRES_IN=1h
BCRYPT_SALT_ROUNDS=10
```

`ecosystem.config.js` 파일

```javascript
module.exports = {
   apps : [{
        name: 'single-server-rest-express',
        script: 'node single-server-rest-express/src/server.js',
        watch: 'single-server-rest-express',
        env: {
            PORT: 4000,
            MONGO_URI: 'mongodb://prd_user:StrongP!ssw0rd@localhost:27017/single_server?authSource=single_server',
            JWT_SECRET: 'qwertyuioplkjhgfdsazxcvbnm1234567890',
            JWT_EXPIRES_IN: '1h',
            BCRYPT_SALT_ROUNDS: 10
        }
   }]
};
```

---

## 📜 라이선스
MIT License  
