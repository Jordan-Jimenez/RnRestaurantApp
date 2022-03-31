import React, { FC } from 'react';

import { ScrollView, View } from 'react-native';
import { Layout } from '@ui-kitten/components/ui/layout/layout.component';
import {
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components/theme/style/style.service';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IBasicLayoutProps {
  actionButton?: JSX.Element;
  noSafeArea?: boolean;
}

const BasicLayout: FC<IBasicLayoutProps> = ({
  children,
  actionButton,
  noSafeArea = false,
}) => {
  const classes = useStyleSheet(themedStyles);

  return (
    <Layout>
      {!noSafeArea ? (
        <ScrollView
          style={classes.scrollView}
          showsVerticalScrollIndicator={false}>
          <SafeAreaView>
            <View style={classes.contentContainer}>{children}</View>
          </SafeAreaView>
        </ScrollView>
      ) : (
        <ScrollView
          style={classes.scrollView}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[2]}>
          {children}
        </ScrollView>
      )}

      {actionButton}
    </Layout>
  );
};

const themedStyles = StyleService.create({
  scrollView: {
    height: '100%',
  },
  contentContainer: {
    minHeight: '100%',
  },
});

export default BasicLayout;
