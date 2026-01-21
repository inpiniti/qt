
# next.config.js

Next.js 애플리케이션의 설정을 커스터마이징할 수 있습니다.

## 기본 구조

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 설정 옵션
}
 
module.exports = nextConfig
```

## 주요 설정 옵션

### 출력 모드
```javascript
module.exports = {
  output: 'standalone', // 또는 'export'
}
```

### 이미지 최적화
```javascript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}
```

### 리다이렉트 & 리라이트
```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ]
  },
}
```

### 환경 변수
```javascript
module.exports = {
  env: {
    customKey: 'my-value',
  },
}
```

### 페이지 확장자
```javascript
module.exports = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}
```

### 실험적 기능
```javascript
module.exports = {
  experimental: {
    instrumentationHook: true,
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}
```
