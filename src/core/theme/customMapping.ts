import { mapping } from '@eva-design/eva';

export const FONT_SIZES = {
  h1: 24,
  h2: 22,
  h3: 18,
  h4: 16,
  h5: 16,
  h6: 14,
  s1: 12,
  s2: 12,
  p1: 10,
  p2: 13,
  c1: 12,
  c2: 12,
} as { [key: string]: number };

export default {
  ...mapping,
  strict: {
    ...mapping.strict,
    'text-heading-1-font-size': FONT_SIZES.h1,
    'text-heading-2-font-size': FONT_SIZES.h2,
    'text-heading-3-font-size': FONT_SIZES.h3,
    'text-heading-4-font-size': FONT_SIZES.h4,
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
