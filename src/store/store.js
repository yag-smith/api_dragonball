import { create } from 'zustand';

export const useStore = create((set) => ({
  characters: [],
  links: {}, 
  loading: false,
  
  fetchCharacters: async (url = 'https://dragonball-api.com/api/characters') => {
    set({ loading: true });
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      set({ 
        characters: data.items, 
        links: data.links, 
        loading: false 
      });
    } catch (error) {
      console.error("Error cargando personajes:", error);
      set({ loading: false });
    }
  }
}));