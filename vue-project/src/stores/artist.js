import { defineStore } from 'pinia'

export const useArtistStore = defineStore('artist', {
    state: () => {
        return {
            artist: [
                {
                    id: 1, 
                    name: 'Don Toliver', 
                    genre: 'Hip-Hop', 
                    image: ''
                },
                {
                    id: 2, 
                    name: 'Don Toliver', 
                    genre: 'Hip-Hop', 
                    image: ''
                },
                {
                    id: 3, 
                    name: 'Don Toliver', 
                    genre: 'Hip-Hop', 
                    image: ''
                },
                {
                    id: 4, 
                    name: 'Don Toliver', 
                    genre: 'Hip-Hop', 
                    image: ''
                }
            ]
        }
    },
    getters: {
        totalArtist: (state) => state.artist.length,
    },

    actions: {
        filterbyGenre(genre){

        },
        filterByName(name){

        },
        removeArtist(id){

        }
    }
})
