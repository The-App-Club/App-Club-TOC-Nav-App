import {css, cx} from '@emotion/css';
import {useEffect} from 'react';
// import tocbot from 'tocbot';

import {useSynchroToc} from '../hooks/useSynchroToc';

const Toc = ({className = css``}) => {
  const getActiveLinkHref = () => {
    return [...document.querySelectorAll('nav.pc a')]
      .find((dom) => {
        return dom.classList.contains('is-active-link');
      })
      .getAttribute('href');
  };

  const {activeHref, setAcitveHref} = useSynchroToc((state) => {
    return {
      activeHref: state.activeHref,
      setAcitveHref: state.setAcitveHref,
    };
  });
  useEffect(() => {
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: 'nav.pc',
      // Where to grab the headings to build the table of contents.
      contentSelector: 'main',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'article.blog > section > h1, h2, h3',
      scrollEndCallback: function (e) {
        const href = getActiveLinkHref();
        setAcitveHref({href});
      },
      onClick: function (e) {
        const href = e.currentTarget.getAttribute('href');
        setAcitveHref({href});
      },
      scrollSmoothOffset: -40,
    });

    return () => {
      tocbot.destroy();
    };
  }, []);

  return (
    <aside
      className={cx(
        css`
          min-width: 20rem;
          position: sticky;
          top: 3rem;
          height: 100%;
          @media (max-width: 1000px) {
            nav {
              display: none;
            }
          }
        `,
        className
      )}
    >
      <nav
        className={cx(
          `pc`,
          css`
            & {
              width: 100%;
              background-color: #fafbfc;
              border: 1px solid rgba(27, 31, 35, 0.15);
              border-radius: 0.25rem;
              padding: 1rem;
              font-size: 0.875rem;
            }

            a {
              text-decoration: none;
              :hover {
                text-decoration: underline;
              }
            }

            .toc-list .toc-list {
              padding-left: 1rem;
              padding-top: 0.5rem;
            }

            .toc-list-item {
              padding-bottom: 0.5rem;
            }

            .toc-list-item:last-child {
              padding-bottom: 0;
            }

            .toc-link {
              height: 1.5rem;
              &:not(.is-active-link)::before {
                background-color: transparent;
              }
            }

            .is-active-link {
              color: #24292e;
              font-weight: bold;
              &::before {
                background-color: #373e7a;
              }
            }
          `
        )}
      />
    </aside>
  );
};

export {Toc};
