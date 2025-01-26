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
        const storedTickets = JSON.parse(localStorage.getItem('tickets'));
      
        if (storedTickets && storedTickets.length > 0) {
          this.ticket = storedTickets;  // Carregar do localStorage
        } else {
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
        }
      },
      
      addTicket(ticket) {
        this.ticket.push(ticket);
        this.saveTicketsToLocalStorage();
      },
  
      updateTicket(updatedTicket) {
        const index = this.ticket.findIndex((t) => t.id === updatedTicket.id);
        if (index !== -1) {
          this.ticket[index] = updatedTicket;
          this.saveTicketsToLocalStorage();
        }
      },
  
      deleteTicket(ticketId) {
        this.ticket = this.ticket.filter((ticket) => ticket.id !== ticketId);
        this.saveTicketsToLocalStorage();
      },
  
      saveTicketsToLocalStorage() {
       
        localStorage.setItem('tickets', JSON.stringify(this.ticket));
      },
    },
  });
  