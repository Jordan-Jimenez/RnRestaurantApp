import { mapping } from '@eva-design/eva';
import { PixelRatio } from 'react-native';

const fontScale = PixelRatio.getFontScale();

export const FONT_SIZES = {
  h1: 26 / fontScale,
  h2: 22 / fontScale,
  h3: 20 / fontScale,
  h4: 18 / fontScale,
  h5: 17 / fontScale,
  h6: 16 / fontScale,
  s1: 14 / fontScale,
  s2: 12 / fontScale,
  p1: 14 / fontScale,
  p2: 12 / fontScale,
  c1: 12 / fontScale,
  c2: 12 / fontScale,
} as { [key: string]: number };

export default {
  ...mapping,
  strict: {
    ...mapping.strict,
    'text-heading-1-font-size': FONT_SIZES.h1,
    'text-heading-1-font-weight': '600',
    'text-heading-2-font-size': FONT_SIZES.h2,
    'text-heading-2-font-weight': '600',
    'text-heading-3-font-size': FONT_SIZES.h3,
    'text-heading-3-font-weight': '600',
    'text-heading-4-font-size': FONT_SIZES.h4,
    'text-heading-4-font-weight': '600',
    'text-heading-5-font-size': FONT_SIZES.h5,
    'text-heading-5-font-weight': '400',
    'text-heading-6-font-size': FONT_SIZES.h6,
    'text-heading-6-font-weight': '400',
    'text-subtitle-1-font-size': FONT_SIZES.s1,
    'text-subtitle-1-font-weight': '400',
    'text-subtitle-2-font-size': FONT_SIZES.s2,
    'text-paragraph-1-font-size': FONT_SIZES.p1,
    'text-paragraph-2-font-size': FONT_SIZES.p2,
    'text-caption-1-font-size': FONT_SIZES.c1,
    'text-caption-2-font-size': FONT_SIZES.c2,
  },

  components: {
    Radio: {
      appearances: {
        default: {
          mapping: {
            iconWidth: 10,
            iconHeight: 10,
            borderWidth: 2,
            textFontSize: 'text-heading-6-font-size',
            textFontWeight: 'text-heading-6-font-weight',
            textFontFamily: 'text-heading-6-font-family',
          },
          variantGroups: {
            status: {
              basic: {
                state: {
                  checked: {
                    iconTintColor: 'text-basic-color',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
