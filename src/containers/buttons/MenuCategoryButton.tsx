import React, { FC } from 'react';

import { observer } from 'mobx-react-lite';

import TextButton from '../../components/@ui/TextButton';
import { useMenuContext } from '../providers/MenuProvider';

interface IMenuCategoryButtonProps {
  item?: MenuItem;
  loading?: boolean;
}

const MenuCategoryButton: FC<IMenuCategoryButtonProps> = ({
  item,
  loading,
}) => {
  const menu = useMenuContext();

  const selectCategory = () => {
    menu.selectCategory(item?.id);
  };

  return (
    <TextButton
      loadingTitle={loading}
      message={item?.name || ''}
      category="h4"
      status={
        menu.selectedCategory
          ? menu.selectedCategory?.name === item?.name
            ? 'warning'
            : 'info'
          : menu.categories?.[0].name === item?.name
          ? 'warning'
          : 'info'
      }
      onPress={selectCategory}
    />
  );
};

export default observer(MenuCategoryButton);
