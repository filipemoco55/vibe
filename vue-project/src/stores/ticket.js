import { defineStore } from 'pinia'
import { useEventStore } from './event'
import { useAuthStore } from './authStore';

const eventStore = useEventStore(); // Access the artist store
const authStore = useAuthStore(); // Access the user store

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
                    ],
                },
                {
                    id: 2,
                    name: 'VIP Ticket',
                    type: 'VIP',
                    price: 250,
                    event: [
                        eventStore.event[0],
                    ],
                },
                {
                    id: 3,
                    name: 'VVIP Ticket',
                    type: 'VVIP',
                    price: 400,
                    event: [
                        eventStore.event[0],
                    ],
                },
                {
                    id: 4,
                    name: 'Regular Ticket',
                    type: 'Regular',
                    price: 100,
                    event: [
                        eventStore.event[1],
                    ],
                },
                {
                    id: 5,
                    name: 'VIP Ticket',
                    type: 'VIP',
                    price: 250,
                    event: [
                        eventStore.event[1],
                    ],
                },
                {
                    id: 6,
                    name: 'VVIP Ticket',
                    type: 'VVIP',
                    price: 400,
                    event: [
                        eventStore.event[1],
                    ],
                }

            ]
        }
    },
    getters: {
        total: (state) => state.ticket.length,
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
        },
    },

    actions: {
        addTicketToUser(ticket) {
            authStore.user.tickets.push(ticket)
        },

    },
})