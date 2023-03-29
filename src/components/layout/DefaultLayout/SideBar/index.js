import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const SideBar = () => {
    return (
        <div className={cx('wrapper')}>
            <h1>SideBar</h1>
        </div>
    );
};

export default SideBar;
