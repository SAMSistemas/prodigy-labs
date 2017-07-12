import React from 'react'
import {BottomNavigationItem} from 'material-ui/BottomNavigation';

export default ({label, icon, onTouch}) => (
    <BottomNavigationItem
        label={label}
        icon={icon}
        onTouchTap={onTouch}
    />
)