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
  centerContent?: boolean;
  stickyHeaderIndicies?: number[];
  noPadding?: boolean;
}

const BasicLayout: FC<IBasicLayoutProps> = ({
  children,
  actionButton,
  noSafeArea = false,
  centerContent = false,
  stickyHeaderIndicies,
  noPadding = false,
}) => {
  //@ts-ignore
  const classes = useStyleSheet(themedStyles({ centerContent, noPadding }));

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
          stickyHeaderIndices={stickyHeaderIndicies}
          contentContainerStyle={centerContent && classes.scrollViewContainer}>
          {children}
        </ScrollView>
      )}

      {actionButton}
    </Layout>
  );
};

interface IStyleProps {
  centerContent: boolean;
  noPadding: boolean;
}

const themedStyles = StyleService.create((props: IStyleProps) => ({
  scrollView: {
    height: '100%',
  },
  scrollViewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: props.noPadding ? 0 : 20,
  },
  contentContainer: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: props.centerContent ? 'center' : 'stretch',
    paddingHorizontal: props.noPadding ? 0 : 20,
  },
}));

export default BasicLayout;
