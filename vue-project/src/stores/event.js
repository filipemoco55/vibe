import { defineStore } from 'pinia'

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

                    ],
                    image: ''
                },
                {
                    id: 2,
                    name: 'Vibe festival',
                    stage: 'Secondary Stage',
                    day: 11,
                    lineup: [
                        
                    ],
                    image: ''
                },
                {
                    id: 3,
                    name: 'Vibe festival',
                    stage: 'Main Stage',
                    day: 12,
                    lineup: [
                        
                    ],
                    image: ''
                },
                {
                    id: 4,
                    name: 'Vibe festival',
                    stage: 'Secondary Stage',
                    day: 12,
                    lineup: [
                        
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

    },
})
