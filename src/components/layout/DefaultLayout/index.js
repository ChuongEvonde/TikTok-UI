import React from 'react';
import styles from './Defaultlayout.module.scss';
import classNames from 'classnames/bind';
import Header from '~/components/layout/components/Header';

import SideBar from './SideBar';
const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <SideBar></SideBar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
