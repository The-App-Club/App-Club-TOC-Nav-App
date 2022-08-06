import {css} from '@emotion/css';

const Header = () => {
  return (
    <header
      className={css`
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
      `}
    >
      Hello
    </header>
  );
};

export {Header};
