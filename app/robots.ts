export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://journ.dev/sitemap.xml',
    host: 'https://journ.dev',
  };
}
