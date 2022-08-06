import {css} from '@emotion/css';

const Footer = () => {
  return (
    <footer
      className={css`
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
      `}
    >
      Bye
    </footer>
  );
};

export {Footer};
