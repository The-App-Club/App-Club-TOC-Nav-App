import {css, cx} from '@emotion/css';

const Toc = () => {
  return (
    <aside
      className={css`
        min-width: 20rem;
        position: sticky;
        top: 3rem;
        height: 100%;
      `}
    >
      <nav
        className={cx(
          `js-toc`,
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
