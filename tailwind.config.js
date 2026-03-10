module.exports = {
    important: false,
    content: [
        "src/views/**/*.twig",
        "src/assets/js/**/*.js",
        'node_modules/@salla.sa/twilight-tailwind-theme/safe-list-css.txt',
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '10px',
            screens: { '2xl': "1280px" }
        },
        fontFamily: {
            sans: ['var(--font-main)', '-apple-system', 'BlinkMacSystemFont'],
            primary: "var(--font-main)"
        },
        extend: {
            transitionTimingFunction: {
                'elastic': 'cubic-bezier(0.55, 0, 0.1, 1)',
            },
            gridTemplateColumns: {
                'auto-fill': 'repeat(auto-fill, 290px)',
            },
            colors: {
                /* ── Golden Tur overrides ── */
                'white'        : '#111110',
                'black'        : '#080807',
                'dark'         : '#080807',
                'darker'       : '#050504',
                'danger'       : '#9B1C1C',
                'primary'      : '#C9973A',
                'primary-dark' : '#8A6520',
                'primary-light': '#E5BE7A',
                'primary-reverse': '#9B1C1C',
                'gray': {
                    50 : '#1A1A18',
                    100: '#161614',
                    200: '#131311',
                    300: '#111110',
                    400: '#7A7468',
                    500: '#7A7468',
                    600: '#5A5450',
                    700: '#3A3630',
                    800: '#2A2620',
                    900: '#1A1610',
                },
                'body'    : '#080807',
                'card'    : '#111110',
                'section' : '#1A0A05',
                'cream'   : '#F2EAD8',
                'gold'    : '#C9973A',
                'gold-lt' : '#E5BE7A',
                'red-meat': '#9B1C1C',
                'smoke'   : '#7A7468',
            },
            spacing: {
                '3.75': '15px', '7.5': '30px', '58': '232px',
                '62': '248px', '100': '28rem', '116': '464px',
                '132': '528px', '200': '800px',
            },
            borderRadius: {
                'large': '22px', 'big': '40px', 'tiny': '3px', DEFAULT: '.75rem',
            },
            fontSize: {
                'icon-lg': '33px', 'xxs': '10px', 'xxxs': '8px',
                'title-size': '42px', '22px': '22px',
            },
            lineHeight: {
                '12': '3rem', '14': '3.5rem', '16': '4rem', '18': '4.5rem', '20': '5rem',
            },
            boxShadow: {
                'default' : '5px 10px 30px rgba(0,0,0,0.4)',
                'top'     : '0px 0px 10px rgba(0,0,0,0.3)',
                'md'      : '5px 10px 99px rgba(0,0,0,0.4)',
                'dropdown': '0 4px 8px rgba(0,0,0,0.3)',
                'light'   : '0px 4px 15px rgba(0,0,0,0.2)',
                'huge'    : '0px 3px 6px rgba(0,0,0,0.4)',
                'gold'    : '0 8px 30px rgba(201,151,58,0.2)',
                'progress': '0 5px 15px rgba(201,151,58,0.3)',
                'mobile'  : 'rgb(0 0 0 / 30%) 0px 2px 1px, rgb(0 0 0 / 20%) 0px 16px 18px',
            },
            width: {
                '18': '4.5rem', '22': '5.5rem', '74': '18.5rem',
                '76': '19rem', '78': '19.5rem',
            },
            height: {
                'banner': '200px', 'lg-banner': '428px',
                'full-banner': '600px', '500': '500px', '460': '460px',
            },
            minWidth: { '1/4': '25%', '1/2': '50%', '3/4': '75%' },
            maxWidth: { '1/4': '25%', '1/2': '50%', '3/4': '75%' },
            zIndex: { '1': '1', '2': '2', '-1': '-1' },
            screens: {
                'xxs': {'min': '380px', 'max': '479px'},
                'xs': '480px',
            },
            backgroundOpacity: { '05': '0.05' },
            transitionProperty: { 'height': 'height' },
            keyframes: {
                slideUpFromBottom: {
                    '0%'  : { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0%)',   opacity: '1' },
                },
                slideDownFromBottom: {
                    '0%'  : { transform: 'translateY(0%)',   opacity: '1' },
                    '100%': { transform: 'translateY(100%)', opacity: '0' },
                },
            },
            animation: {
                slideUpFromBottom  : 'slideUpFromBottom .6s linear',
                slideDownFromBottom: 'slideDownFromBottom .6s linear',
            },
        },
    },
    corePlugins: { outline: false },
    plugins: [
        require('@salla.sa/twilight-tailwind-theme'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
}
