import { defineStore } from 'pinia'
import { useArtistStore } from './artist'

export const useEventStore = defineStore('event', {
    state: () => {
        return {
            event: [
                {
                    id: 1,
                    name: 'Vibe festival',
                    day: 11,
                    location: 'Porto, Portugal',
                    lineup: {
                        mainStage: [

                        ],
                        secondaryStage: [

                        ],
                    },
                },
                {
                    id: 2,
                    name: 'Vibe festival',
                    day: 12,
                    location: 'Porto, Portugal',
                    lineup: {
                        mainStage: [
                        ],
                        secondaryStage: [

                        ],
                    },
                },
                {
                    id: 3,
                    name: 'Vibe festival',
                    day: 13,
                    location: 'Porto, Portugal',
                    lineup: {
                        mainStage: [

                        ],
                        secondaryStage: [
                        ],
                    },
                },
            ]
        }
    },


    getters: {
        total: (state) => state.merch.length,
        filterByStage(stage) {
            return this.merch.filter(merch => merch.stage === stage)
        },
        filterByDay(day) {
            return this.merch.filter(merch => merch.day === day)
        },
    },

    actions: {
        addEvent(event) {
            this.event.push(event)
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

        async initializeLineups() {
            const artistStore = useArtistStore();
            if (!artistStore.artists.length) {
                await artistStore.fetchArtists(); // Ensure artists are fetched
            }

            // Populate lineups dynamically based on fetched artists
            this.event.forEach((event, index) => {
                if (event.day === 11) {
                    event.lineup.mainStage = [artistStore.artists[0], artistStore.artists[1], artistStore.artists[12], artistStore.artists[14], artistStore.artists[15]];
                    event.lineup.secondaryStage = [artistStore.artists[2], artistStore.artists[3], artistStore.artists[13]];
                } else if (event.day === 12) {
                    event.lineup.mainStage = [artistStore.artists[4], artistStore.artists[5]];
                    event.lineup.secondaryStage = [artistStore.artists[6], artistStore.artists[7]];
                } else if (event.day === 13) {
                    event.lineup.mainStage = [artistStore.artists[8], artistStore.artists[9]];
                    event.lineup.secondaryStage = [artistStore.artists[10], artistStore.artists[11]];
                }
            });
        },
    },
})

