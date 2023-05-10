export const theme = {
  breakpoints: { mobile: '480px', tablet: '768px', desktop: '1280px' },
  space: [0, 2, 4, 8, 16, 32, 64],
  fonts: {
    main: {
      regular: 'Manrope-Regular',
      medium: 'Manrope-Medium',
      semiBold: 'Manrope-SemiBold',
      bold: 'Manrope-Bold',
      extraBold: 'Manrope-ExtraBold',
    },
    secondary: { regular: 'Inter-Regular', medium: 'Inter-Medium' },
  },
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '28px', '48px', '68px'],
  colors: {
    yellow: '#FFC107',
    white: '#FDF7F2',
    black: '#111111',
    blue: '#54ADFF',
    lightBlue: '#CCE4FB',
    green: '#00C3AD',
    red: '#F43F5E',
    gradientBlue: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
  },
  boxShadows: {
    main: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    secondary: '7px 13px 14px rgba(116, 177, 232, 0.24)',
  },
  transition: { main: 'cubic-bezier(0.4, 0, 0.2, 1)' },
};
