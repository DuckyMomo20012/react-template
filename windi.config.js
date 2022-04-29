export default {
  alias: {
    // ...
  },
  attributify: true,
  extract: {
    exclude: ['node_modules', '.git', '.next/**/*'],
    include: ['**/*.{jsx,css}'],
  },
  plugins: [
    // Other plugins
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
  ],
  shortcuts: {
    // ...
  },
  theme: {
    colors: { white: '#F5F5F5', black: '#333' },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Roboto Slab', 'ui-serif', 'Georgia'],
        mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular'],
        heading: ['Barlow'],
      },
    },
  },
};
