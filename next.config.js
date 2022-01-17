module.exports = {
    i18n: {
        locales: ['en', 'zh'],
        defaultLocale: 'en',
        localeDetection: false,
    },
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/' },
            '/shop': { page: '/shop' },
            '/locations': { page: '/locations' },
            '/our-brand': { page: '/our-brands' },
            '/contact-us': { page: '/contact-us' },
            '/checkout': { page: '/checkout' },
            '/product/chocolate-cake': { page: '/product/[pid]', query: { pid: 'hello-nextjs' } },
            '/product/en/chocolate-cake': { page: '/product/[pid]', query: { pid: 'hello-nextjs' } },
            '/product/zh/chocolate-cake': { page: '/product/[pid]', query: { pid: 'hello-nextjs' } },
            '/product/fruit-cheese-souffle': { page: '/product/[pid]', query: { pid: 'fruit-cheese-souffle' } },
            '/product/en/fruit-cheese-souffle': { page: '/product/[pid]', query: { pid: 'fruit-cheese-souffle' } },
            '/product/zh/fruit-cheese-souffle': { page: '/product/[pid]', query: { pid: 'fruit-cheese-souffle' } },
            '/product/gateau-aux-fraises': { page: '/product/[pid]', query: { pid: 'gateau-aux-fraises' } },
            '/product/en/gateau-aux-fraises': { page: '/product/[pid]', query: { pid: 'gateau-aux-fraises' } },
            '/product/zh/gateau-aux-fraises': { page: '/product/[pid]', query: { pid: 'gateau-aux-fraises' } },
            '/product/strawberry-mango-cake': { page: '/product/[pid]', query: { pid: 'strawberry-mango-cake' } },
            '/product/en/strawberry-mango-cake': { page: '/product/[pid]', query: { pid: 'strawberry-mango-cake' } },
            '/product/zh/strawberry-mango-cake': { page: '/product/[pid]', query: { pid: 'strawberry-mango-cake' } },
        }
    },
}
