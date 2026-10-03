import { startTunnel } from 'untun';

process.env.UNTUN_ACCEPT_CLOUDFLARE_NOTICE = '1';

console.log('Establishing Cloudflare Tunnel to http://localhost:5173...');

try {
  const tunnel = await startTunnel({
    port: 5173,
    hostname: 'localhost',
  });

  const url = await tunnel.getURL();
  console.log('====================================');
  console.log('🚀 Cloudflare Tunnel URL:');
  console.log(url);
  console.log('====================================');
} catch (err) {
  console.error('Tunnel error:', err);
}
