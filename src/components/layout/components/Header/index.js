import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { faXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <div className={cx('search')}>
                    <input type="text" placeholder="Search account and video" spellCheck={false} />
                    <button className={cx('search-clear')}>
                        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </button>
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon> */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
};

export default Header;
