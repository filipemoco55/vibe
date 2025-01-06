import { defineStore } from 'pinia'

export const useArtistStore = defineStore('artist', {
    state: () => {
        return {
            artist: [
                {
                    id: 1, 
                    name: 'Don Toliver', 
                    genre: 'Hip-Hop', 
                    image: '',
                    preview: '',
                },
                {
                    id: 2, 
                    name: 'Sabrina Carpenter', 
                    genre: 'Pop', 
                    image: '',
                    preview: '',
                },
                {
                    id: 3, 
                    name: 'Frank Ocean', 
                    genre: 'R&B', 
                    image: '',
                    preview: '',
                },
                {
                    id: 4, 
                    name: 'DJ Danni Gato', 
                    genre: 'Eletronic', 
                    image: '',
                    preview: '',
                }
            ]
        }
    },
    getters: {
        totalArtist: (state) => state.artist.length,
        filterbyGenre(genre){
            return this.artist.filter(artist => artist.genre === genre)
        },
        filterByName(name){
            return this.artist.filter(artist => artist.name === name)
        },
    },

    actions: {
        removeArtist(id){
            this.artist = this.artist.filter(artist => artist.id != id)
        },
        addArtist(artist){
            this.artist.push(artist)
        }
    }
})
