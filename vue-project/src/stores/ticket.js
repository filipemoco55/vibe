import { defineStore } from 'pinia'

export const useTicketStore = defineStore('ticket', {
    state: () => {
        return {
            ticket: [
                {
                    id: 1,
                    name: 'Regular Ticket',
                    day: 11,
                    type: 'Regular',
                    price: 100,
                },
                {
                    id: 1,
                    name: 'VIP Ticket',
                    day: 11,
                    type: 'VIP',
                    price: 250,
                },
                {
                    id: 1,
                    name: 'VVIP Ticket',
                    day: 11,
                    type: 'VVIP',
                    price: 400,
                },

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

    },
})
