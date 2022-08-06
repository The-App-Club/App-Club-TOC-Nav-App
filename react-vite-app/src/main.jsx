import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {LoremIpsum, name} from 'react-lorem-ipsum';

import '@fontsource/inter';
import './styles/index.scss';
import {Toc} from './components/Toc';
import {Article} from './components/Article';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

const makeSlugURL = () => {
  return name().toLowerCase();
};

const App = () => {
  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      <Header />
      <main
        className={css`
          position: relative;
          width: 100%;
          max-width: 60rem;
          margin: auto;
          display: flex;
          gap: 1rem;
          padding: 3rem 0.5rem 0;
          @media (max-width: 1000px) {
            aside {
              order: 1;
            }
            article {
              order: 2;
            }
            justify-content: flex-start;
            flex-direction: column;
          }
          @media (max-width: 768px) {
          }
        `}
      >
        <Article />
        <Toc
          className={css`
            @media (max-width: 1000px) {
              min-width: 20rem;
              height: 100%;
              position: relative;
              top: initial;
              /* display: none; */
            }
          `}
        />
      </main>
      <Footer />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
