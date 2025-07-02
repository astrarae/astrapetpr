export default {
    plugins: {
        '@tailwindcss/postcss': {}, // ✅ correct way in Tailwind v4+
        autoprefixer: {},
        'postcss-nested': {}
    }
};