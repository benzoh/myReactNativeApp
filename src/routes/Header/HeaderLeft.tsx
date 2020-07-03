// HeaderLeft.tsx
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/routers';
import { COLOR } from '../../constants/theme';
import testIDs from '../../constants/testIDs';

function HeaderLeft() {
  const { dispatch } = useNavigation();
  const onPress = React.useCallback(() => {
    dispatch(DrawerActions.openDrawer());
  }, [dispatch]);

  return (
    <Icon.Button
      name="bars"
      color={COLOR.WHITE}
      backgroundColor={COLOR.MAIN}
      onPress={onPress}
      testID={testIDs.MENU_HEADER_LEFT_BUTTON}
    />
  );
}

export default HeaderLeft;
