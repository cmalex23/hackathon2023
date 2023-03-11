export const setCreatorInLocalStorage = (creator: any) => {
  if (typeof window === 'undefined') {
    throw Error;
  }
  localStorage.setItem('Creator', JSON.stringify(creator));
};

export const deleteCreatorFromLocalStorage = () => {
  if (typeof window === 'undefined') {
    throw Error;
  }
  localStorage.removeItem('Creator');
};

export const getCreatorFromLocalStorage = (): any => {
  if (typeof window === 'undefined') {
    throw Error;
  }
  const saved = localStorage.getItem('Creator');
  const creator = saved ? JSON.parse(saved) : null;
  return creator;
};
