import { defineStore } from 'pinia';
import { get, post, del } from '@/api/api'; // Import your API functions

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

        async updateArtist(updatedArtist) {
            try {
                const { id, ...data } = updatedArtist; // Extract ID and the rest of the data
                const response = await put(API_BASE_URL, `${ENDPOINT}/${id}`, data); // Update backend
                // Update local state
                const index = this.artists.findIndex((artist) => artist.id === id);
                if (index !== -1) {
                    this.artists[index] = { ...this.artists[index], ...response };
                }
            } catch (error) {
                console.error("Failed to update artist:", error);
            }
        },

        async removeArtist(id) {
            try {
                await del(API_BASE_URL, `${ENDPOINT}/${id}`); // Remove from backend
                this.artists = this.artists.filter((artist) => artist.id !== id); // Update local state
            } catch (error) {
                console.error("Failed to remove artist:", error);
            }
        },
    },
});
