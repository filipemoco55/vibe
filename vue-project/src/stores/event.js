import { defineStore } from 'pinia'
import { useArtistStore } from './artist'

export const useEventStore = defineStore('event', {
    state: () => {
        return {
            event: [
                {
                    id: 1,
                    name: 'Vibe festival',
                    stage: 'Main Stage',
                    day: 11,
                    lineup: [
                        artistStore.artist[0],
                        artistStore.artist[1],
                    ],
                    image: ''
                },
                {
                    id: 2,
                    name: 'Vibe festival',
                    stage: 'Secondary Stage',
                    day: 11,
                    lineup: [
                        artistStore.artist[2],
                        artistStore.artist[3], 
                    ],
                    image: ''
                },
                {
                    id: 3,
                    name: 'Vibe festival',
                    stage: 'Main Stage',
                    day: 12,
                    lineup: [
                        artistStore.artist[1], 
                        artistStore.artist[3], 
                    ],
                    image: ''
                },
                {
                    id: 4,
                    name: 'Vibe festival',
                    stage: 'Secondary Stage',
                    day: 12,
                    lineup: [
                        artistStore.artist[0],
                        artistStore.artist[2],
                    ],
                    image: ''
                },
            ]
        }
    },
    getters: {
        total: (state) => state.merch.length,
    },

    actions: {
        addEvent(event) {
            this.event.push(event)
        },
        filterByStage(stage) {
            return this.merch.filter(merch => merch.stage === stage)
        },
        filterByDay(day) {
            return this.merch.filter(merch => merch.day === day)
        },
        addArtistToLineup(eventId, artistId) {
            const artistStore = useArtistStore(); // Access the artist store
            const artist = artistStore.artist.find((a) => a.id === artistId);
      
            if (artist) {
              const event = this.event.find((e) => e.id === eventId);
              if (event) {
                event.lineup.push(artist); // Add artist to the lineup
              } else {
                console.error('Event not found');
              }
            } else {
              console.error('Artist not found');
            }
          },
    },
})
