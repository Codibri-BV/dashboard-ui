import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Item } from './MenuItem.style';

interface Props {
  Icon?: React.ElementType;
  children?: string;
  [key: string]: any;
}

const MenuItem: React.FC<Props> = ({ Icon, children, ...props }) => {
  return (
    <Item {...props}>
      <ListItem button>
        {Icon && (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}
        {children && <ListItemText primary={children} />}
      </ListItem>
    </Item>
  );
};

export default MenuItem;
