const Koa = require('koa');
const app = new Koa();

// Middleware: Rota kontrolleri
app.use((ctx) => {
    const path = ctx.path.toLowerCase();
  // Rota: Ana sayfa
  if (ctx.path === '/') {
    ctx.body = '<h1>Hoş Geldiniz!</h1><p>Bu, ana sayfamız.</p>';
  }
  // Rota: Hakkımda sayfası
  else if (ctx.path === '/about') {
    ctx.body = '<h1>Hakkımda</h1>';
  }
  else if (ctx.path === '/contact') {
    ctx.body = '<h1>İletişim</h1>';
  }
  // Diğer sayfalar için 404
  else {
    ctx.status = 404;
    ctx.body = '<h1>404</h1><p>Sayfa bulunamadı.</p>';
  }
});

// Sunucuyu başlat
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
