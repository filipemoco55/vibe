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
                    name: 'Michael Jackson', 
                    genre: 'Pop', 
                    image: ''
                },
                {
                    id: 3, 
                    name: 'Frank Ocean', 
                    genre: 'R&B', 
                    image: ''
                },
                {
                    id: 4, 
                    name: 'Avicii', 
                    genre: 'Eletronic', 
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
            return this.artist.filter(artist => artist.genre === genre)
        },
        filterByName(name){
            return this.artist.filter(artist => artist.name === name)
        },
        removeArtist(id){
            this.artist = this.artist.filter(artist => artist.id != id)
        }
    }
})
