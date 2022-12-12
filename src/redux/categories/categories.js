const CHECK_STATUES = 'CHECK_STATUES';
const initialState = [];

const categoryReduser = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUES:
      return 'Under construction';
    default:
      return state;
  }
};

export const Creators = () => ({
  type: CHECK_STATUES,
});

export default categoryReduser;
