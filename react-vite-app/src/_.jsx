import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {LoremIpsum, name, username} from 'react-lorem-ipsum';
import {default as chance} from 'chance';
import {Spacer} from './components/Spacer';
import {default as Content} from './components/Content';

import '@fontsource/inter';
import './styles/index.scss';
import {TocNav} from './components/TocNav';

const makeDescription = ({seed}) => {
  return chance(seed).sentence({words: 100});
};

const makeHeaderTitle = ({seed}) => {
  return chance(seed).sentence({words: 5}).slice(0, -1);
};

const makeSlugURL = ({headerTitle}) => {
  return headerTitle
    .split(' ')
    .map((w) => {
      return w.toLowerCase();
    })
    .join('-');
};

const App = () => {
  console.log('a');
  const itemDomRef = useRef(null);

  const [activeId, setActiveId] = useState();

  const activateNotifier = useCallback((e) => {
    const {id, message} = e;
    if (message === `show`) {
      console.log(`id, message`, id, message);
      // setActiveId(id);
    }
  }, []);

  const tocInfoList = useMemo(() => {
    return [
      {
        id: makeSlugURL({headerTitle: makeHeaderTitle({seed: 1})}),
        text: makeHeaderTitle({seed: 1}),
        level: 2,
        header: () => {
          return <h2>{makeHeaderTitle({seed: 1})}</h2>;
        },
        description: () => {
          return <p>{makeDescription({seed: 1})}</p>;
        },
      },
      {
        id: makeSlugURL({headerTitle: makeHeaderTitle({seed: 2})}),
        text: makeHeaderTitle({seed: 2}),
        level: 2,
        header: () => {
          return <h2>{makeHeaderTitle({seed: 2})}</h2>;
        },
        description: () => {
          return <p>{makeDescription({seed: 2})}</p>;
        },
      },
      {
        id: makeSlugURL({headerTitle: makeHeaderTitle({seed: 3})}),
        text: makeHeaderTitle({seed: 3}),
        level: 3,
        header: () => {
          return <h3>{makeHeaderTitle({seed: 3})}</h3>;
        },
        description: () => {
          return <p>{makeDescription({seed: 3})}</p>;
        },
      },
      {
        id: makeSlugURL({headerTitle: makeHeaderTitle({seed: 4})}),
        text: makeHeaderTitle({seed: 4}),
        level: 3,
        header: () => {
          return <h3>{makeHeaderTitle({seed: 4})}</h3>;
        },
        description: () => {
          return <p>{makeDescription({seed: 4})}</p>;
        },
      },
      {
        id: makeSlugURL({headerTitle: makeHeaderTitle({seed: 5})}),
        text: makeHeaderTitle({seed: 5}),
        level: 2,
        header: () => {
          return <h2>{makeHeaderTitle({seed: 5})}</h2>;
        },
        description: () => {
          return <p>{makeDescription({seed: 5})}</p>;
        },
      },
      {
        id: makeSlugURL({headerTitle: makeHeaderTitle({seed: 6})}),
        text: makeHeaderTitle({seed: 6}),
        level: 3,
        header: () => {
          return <h3>{makeHeaderTitle({seed: 6})}</h3>;
        },
        description: () => {
          return <p>{makeDescription({seed: 6})}</p>;
        },
      },
      {
        id: makeSlugURL({headerTitle: makeHeaderTitle({seed: 7})}),
        text: makeHeaderTitle({seed: 7}),
        level: 3,
        header: () => {
          return <h3>{makeHeaderTitle({seed: 7})}</h3>;
        },
        description: () => {
          return <p>{makeDescription({seed: 7})}</p>;
        },
      },
      {
        id: makeSlugURL({headerTitle: makeHeaderTitle({seed: 8})}),
        text: makeHeaderTitle({seed: 8}),
        level: 3,
        header: () => {
          return <h3>{makeHeaderTitle({seed: 8})}</h3>;
        },
        description: () => {
          return <p>{makeDescription({seed: 8})}</p>;
        },
      },
      {
        id: makeSlugURL({headerTitle: makeHeaderTitle({seed: 9})}),
        text: makeHeaderTitle({seed: 9}),
        level: 2,
        header: () => {
          return <h2>{makeHeaderTitle({seed: 9})}</h2>;
        },
        description: () => {
          return <p>{makeDescription({seed: 9})}</p>;
        },
      },
    ];
  }, []);

  return (
    <>
      <div
        className={css`
          position: relative;
          width: 100%;
        `}
      >
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
        <main
          className={css`
            width: 100%;
            max-width: 60rem;
            margin: auto;
            display: flex;
            gap: 1rem;
          `}
        >
          <article>
            <section
              className={css`
                width: 100%;
                h1 {
                  font-size: 2rem;
                }
                h2 {
                  font-size: 1.7rem;
                }
                h3 {
                  font-size: 1.4rem;
                }
                h4 {
                  font-size: 1.2rem;
                }
                p {
                  font-size: 1rem;
                }
              `}
            >
              {tocInfoList.map((tocInfo, index) => {
                return (
                  <Content
                    key={index}
                    id={tocInfo.id}
                    notifier={activateNotifier}
                  >
                    {tocInfo.header()}
                    {tocInfo.description()}
                  </Content>
                );
              })}
            </section>
          </article>
          <TocNav itemDomRef={itemDomRef} tocInfoList={tocInfoList} />
        </main>
        <Spacer height={`10vh`} />
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
      </div>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
