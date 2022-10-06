## Getting Started

### Development
First, run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production
You can access the production site through these domains:
[dev-test-trungnguyenhoang.vercel.app](dev-test-trungnguyenhoang.vercel.app)
[dev-test-git-main-trungnguyenhoang.vercel.app](dev-test-git-main-trungnguyenhoang.vercel.app)
[dev-test-red.vercel.app](dev-test-red.vercel.app)

There are two pages:
1. `/`: Landing Page
2. `/dashboard`: Dashboard

### Tech Stack
- Framework: [NextJS](https://nextjs.org/) + Typescript
- State Management Library: [Redux Toolkit](https://redux-toolkit.js.org/)
- UI Library: [Mantine](https://mantine.dev/)
- CSS/PostCSS: [Tailwind](https://tailwindcss.com/)
- Deployment: [Vercel](https://vercel.com/)
- CDN: [Amazon CloudFront](https://aws.amazon.com/cloudfront/) implementing [S3](https://aws.amazon.com/s3/)


### Site Functions:
#### Landing Page:
- Responsive on every screen size
- Lazy load images
- Load background image based on device screen (mobile or pc)
- 