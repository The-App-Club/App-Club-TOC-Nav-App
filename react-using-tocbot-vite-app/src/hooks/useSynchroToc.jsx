import create from 'zustand';

const useSynchroToc = create((set) => ({
  activeHref: null,
  setAcitveHref: ({href}) => {
    set((state) => {
      state.activeHref = href;
    });
  },
}));

export {useSynchroToc};
