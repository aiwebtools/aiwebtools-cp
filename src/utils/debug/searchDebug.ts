export const isSearchDebugEnabled = (): boolean => {
  try {
    return (
      import.meta.env.DEV &&
      typeof window !== "undefined" &&
      window.localStorage?.getItem("SEARCH_DEBUG") === "1"
    );
  } catch {
    return false;
  }
};

export const searchDebugLog = (...args: unknown[]) => {
  if (!isSearchDebugEnabled()) return;
  // eslint-disable-next-line no-console
  console.log(...args);
};
