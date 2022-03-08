import React, { FC } from 'react';

import { ScrollView, View } from 'react-native';
import { Layout } from '@ui-kitten/components/ui/layout/layout.component';
import {
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components/theme/style/style.service';

interface IBasicLayoutProps {}

const BasicLayout: FC<IBasicLayoutProps> = ({ children }) => {
  const classes = useStyleSheet(themedStyles);

  return (
    <Layout>
      <ScrollView
        style={classes.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={classes.contentContainer}>{children}</View>
      </ScrollView>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  scrollView: {
    height: '100%',
    paddingTop: 50,
  },
  contentContainer: {
    minHeight: '100%',
  },
});

export default BasicLayout;
