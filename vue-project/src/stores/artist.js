import { defineStore } from 'pinia';
import { get, post, del, put } from '@/api/api'; // Import your API functions

const API_BASE_URL = 'http://localhost:3000';
const ENDPOINT = 'artist';

export const useArtistStore = defineStore('artist', {
    state: () => ({
        artists: [], // Initialize with an empty array
    }),

    getters: {
        totalArtists: (state) => state.artists.length,
        filterByGenre: (state) => (genre) =>
            state.artists.filter((artist) => artist.genre.toLowerCase() === genre.toLowerCase()),
        filterByName: (state) => (name) =>
            state.artists.filter((artist) => artist.name.toLowerCase().includes(name.toLowerCase())),
    },

    actions: {
        async fetchArtists() {
            try {
                this.artists = await get(API_BASE_URL, ENDPOINT); // Fetch all artists
            } catch (error) {
                console.error('Failed to fetch artists:', error);
            }
        },

        async updateArtist(artist, id) {
            try {
                await put(API_BASE_URL, `${ENDPOINT}/${id}`, artist); // Update in backend
                this.artists = this.artists.map((a) => (a.id === id ? artist : a)); // Update local state
            } catch (error) {
                console.error('Failed to update artist:', error);
            }
        },
        
        async removeArtist(id) {
            try {
                await del(API_BASE_URL, `${ENDPOINT}/${id}`);
                this.artists = this.artists.filter((artist) => artist.id !== id);
            } catch (error) {
                console.error("Failed to remove artist:", error);
            }
        },

        async addArtist(artist) {
            try {
                const newArtist = await post(API_BASE_URL, ENDPOINT, artist);
                this.artists.push(newArtist);
            } catch (error) {
                console.error('Failed to add artist:', error);
            }
        },
    },
    persist: {
        enabled: true,
    },
});
