import { configureStore, createSlice } from "@reduxjs/toolkit";

// initialeState : le nom et le prénom actuel
// tranche de mon état global qui concerne le nom d'utilisateur
const userSlice = createSlice({
  name: "user",
  initialState: { firstName: "", lastName: "" },
  // reducer : interactions possibles
  // fonction comprenant l'état actuel / état initial et les actions qu'on me permet de performer dessus
  reducers: {
    // action : c'est un objet qui contient 2 infos :
    // quelle est la tâche (type) que je veux faire et les données (payload) dont je vais avoir besoin
    modifyName: (state, action) => {
      return action.payload;
    },
  },
});

export const { modifyName } = userSlice.actions;

export const store = configureStore({
  reducer: {
    name: userSlice.reducer,
  },
});
