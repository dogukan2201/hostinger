/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'localhost:3000',
    generateRobotsTxt: true, // İsteğe bağlı
    // Diğer konfigürasyon ayarları...
  }