import type { FC } from 'react';
import PropTypes from 'prop-types';
import type { ItemType } from '../../../types/file-manager';

interface ItemIconProps {
  extension?: string;
  type: ItemType;
}

export const ItemIcon: FC<ItemIconProps> = (props) => {
  const { type, extension } = props;

  return type === 'folder'
    ? <img src="/assets/icons/icon-folder.svg" />
    : <> </>;
};

ItemIcon.propTypes = {
  extension: PropTypes.string,
  type: PropTypes.oneOf<ItemType>(['file', 'folder']).isRequired
};
