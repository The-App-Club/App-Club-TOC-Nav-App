import {css, cx} from '@emotion/css';
import {Toc} from './Toc';
import 'hamburgers/dist/hamburgers.css';
import {useState} from 'react';

const Header = () => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened((opened) => {
      return !opened;
    });
  };

  return (
    <>
      <header
        className={css`
          position: fixed;
          top: 0px;
          min-height: 3rem;
          width: 100%;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          z-index: 1;
        `}
      >
        <div
          className={css`
            position: relative;
            width: 100%;
            min-height: 3rem;
            display: flex;
            align-items: center;
          `}
        >
          <div
            className={cx(
              `hamburger`,
              `hamburger--elastic`,
              `${opened ? 'is-active' : ''}`,
              css`
                position: absolute;
                right: 0.5rem;
                padding: 0 !important;
                .hamburger-box,
                .hamburger-inner,
                .hamburger-inner::before,
                .hamburger-inner::after {
                  width: 32px;
                }
              `
            )}
            tabIndex="0"
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
            aria-expanded={opened}
            onClick={handleClick}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export {Header};
