import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  {
    path: '/',
    title: 'PredictMarkets Crypto Presale | Prediction Market Token',
    description: 'Join the $PREDICT presale, a decentralized prediction market that shares platform revenue in USDT with token holders. Buy before public launch.',
  },
  {
    path: '/how-to-buy',
    title: 'How to Buy $PREDICT | PredictMarkets Presale Guide',
    description: 'Step-by-step guide to buying $PREDICT in the presale. Connect a wallet, pay with crypto or card, and claim your tokens after launch.',
  },
  {
    path: '/referral',
    title: 'Referral Program | Earn $PREDICT | PredictMarkets',
    description: 'Share your PredictMarkets referral link and earn 10% of every qualifying purchase in $PREDICT. Your buyers get a 30% token bonus too.',
  },
  {
    path: '/win-250k',
    title: '$250K Giveaway | PredictMarkets Presale',
    description: 'Presale $PREDICT buyers can enter the PredictMarkets $250K giveaway. See how to take part and read the full terms and conditions.',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service | PredictMarkets',
    description: 'Read the PredictMarkets terms of service covering use of the presale, $PREDICT token sale, eligibility, and user responsibilities.',
  },
  {
    path: '/cookie-management',
    title: 'Cookie Management | PredictMarkets',
    description: 'Manage your cookie preferences for PredictMarkets and learn how cookies are used across the site.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | PredictMarkets',
    description: 'Read how PredictMarkets collects, uses, and protects your personal data when you use the presale platform.',
  },
];

const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

for (const route of routes) {
  let html = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description"[^>]*\/>/, `<meta name="description" content="${route.description}" />`);

  if (route.path === '/') {
    // Already written as dist/index.html — overwrite with correct tags
    fs.writeFileSync(path.join(distDir, 'index.html'), html);
    console.log(`✓ /`);
  } else {
    const dir = path.join(distDir, route.path);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    console.log(`✓ ${route.path}`);
  }
}

console.log('\nMeta injection complete.');
