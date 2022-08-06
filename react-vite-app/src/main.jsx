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
  useEffect(() => {
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: '.js-toc',
      // Where to grab the headings to build the table of contents.
      contentSelector: 'main',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h1, h2, h3',
    });

    return () => {
      tocbot.destroy();
    };
  }, []);

  return (
    <div
      className={css`
        position: relative;
        width: 100%;
      `}
    >
      <Header />
      <main
        className={css`
          width: 100%;
          max-width: 60rem;
          margin: auto;
          display: flex;
          gap: 1rem;
          padding-top: 3rem;
          @media (max-width: 768px) {
            
          }
        `}
      >
        <Article />
        <Toc />
      </main>
      <Footer />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
