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
- [dev-test-trungnguyenhoang.vercel.app](https://dev-test-trungnguyenhoang.vercel.app/)
- [dev-test-git-main-trungnguyenhoang.vercel.app](https://dev-test-git-main-trungnguyenhoang.vercel.app/)
- [dev-test-red.vercel.app](https://dev-test-red.vercel.app/)

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
- Search for vehicle based on *price range*. I do not have information regarding *New/Used* or *Vehicle Type* so the search function will not base on those metrics. 

#### Dashboard:
- Responsive on every screen size
- Hide and show menu
- Other menu besides *Car Brand* can also be selected.
- Sort brands list based on property (Last Update/Brand Name/Number of Models)
- Search car brand
- View details
- **Only on local**: Add/Update brand. You can observe that the json file (`server/car-brand.json`) is updated when a new brand is updated or added. The reason this is not viable in production is Vercel only allow read access.