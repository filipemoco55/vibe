import { defineStore } from 'pinia'
import { useEventStore } from './event'

const eventStore = useEventStore(); // Access the artist store

export const useTicketStore = defineStore('ticket', {
    state: () => {
        return {
            ticket: [
                {
                    id: 1,
                    name: 'Regular Ticket',
                    type: 'Regular',
                    price: 100,
                    event: [
                        eventStore.event[0],
                        eventStore.event[1],
                    ],
                },
                {
                    id: 2,
                    name: 'VIP Ticket',
                    type: 'VIP',
                    price: 250,
                    event: [
                        eventStore.event[0],
                        eventStore.event[1],
                    ],
                },
                {
                    id: 3,
                    name: 'VVIP Ticket',
                    type: 'VVIP',
                    price: 400,
                    event: [
                        eventStore.event[0],
                        eventStore.event[1],
                    ],
                },
                {
                    id: 4,
                    name: 'Regular Ticket',
                    type: 'Regular',
                    price: 100,
                    event: [
                        eventStore.event[2],
                        eventStore.event[3],
                    ],
                },
                {
                    id: 5,
                    name: 'VIP Ticket',
                    type: 'VIP',
                    price: 250,
                    event: [
                        eventStore.event[2],
                        eventStore.event[3],
                    ],
                },
                {
                    id: 6,
                    name: 'VVIP Ticket',
                    type: 'VVIP',
                    price: 400,
                    event: [
                        eventStore.event[2],
                        eventStore.event[3],
                    ],
                }

            ]
        }
    },
    getters: {
        total: (state) => state.ticket.length,
    },

    actions: {
        filterTicketByType(type) {
            return this.ticket.filter(ticket => ticket.type === type)
        },
        filterTicketByDay(day) {
            return this.ticket.filter(ticket => ticket.day === day)
        },
        removeTicket(id) {
            this.ticket = this.ticket.filter(ticket => ticket.id != id)
        },
        filterTicketByEvent(event) {
            return this.ticket.filter(ticket => ticket.event === event)
        }
    },
})