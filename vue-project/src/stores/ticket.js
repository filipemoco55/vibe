import { defineStore } from 'pinia';
import { useEventStore } from './event';

export const useTicketStore = defineStore('ticket', {
  state: () => ({
    ticket: [],
  }),

  getters: {
    total: (state) => state.ticket.length,
    filterTicketByEvent: (state) => (eventId) => {
      return state.ticket.filter((ticket) =>
        ticket.event.some((e) => e.id === eventId)
      );
    },
  },

  actions: {
    initializeTickets() {
      const eventStore = useEventStore();

      if (eventStore.event && eventStore.event.length > 0) {
        this.ticket = [
          {
            id: 1,
            name: 'Regular Ticket',
            type: 'Regular',
            price: 100,
            event: [eventStore.event[0]],
          },
          {
            id: 2,
            name: 'VIP Ticket',
            type: 'VIP',
            price: 250,
            event: [eventStore.event[0]],
          },
          {
            id: 3,
            name: 'VVIP Ticket',
            type: 'VVIP',
            price: 400,
            event: [eventStore.event[0]],
          },
          {
            id: 4,
            name: 'Regular Ticket',
            type: 'Regular',
            price: 100,
            event: [eventStore.event[1]],
          },
          {
            id: 5,
            name: 'VIP Ticket',
            type: 'VIP',
            price: 250,
            event: [eventStore.event[1]],
          },
          {
            id: 6,
            name: 'VVIP Ticket',
            type: 'VVIP',
            price: 400,
            event: [eventStore.event[1]],
          },
        ];
      } else {
        console.error('Eventos não estão disponíveis na EventStore.');
      }
    },

    addTicketToUser(ticket) {
      const authStore = useAuthStore();

      if (authStore.user) {
        authStore.user.tickets.push(ticket);
      } else {
        console.error('Usuário não autenticado.');
      }
    },
  },
});
