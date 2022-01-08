import {IEvents} from "./events.types";

import {api} from "~/plugins/axios";

export class EventsGateway {
  static async sendEvent(event: IEvents.PostEventForm):Promise<IEvents.Event> {
    const formData = new FormData();

    Object.keys(event).forEach((key) => {
      const value = event[key as keyof IEvents.PostEventForm] as Blob | string

      formData.append(key, value);
    });

    const response = await api.post('/events', formData)

    return response.data.event
  }

  static async getEvents(query: IEvents.ListEventsQuery):Promise<{
    events: IEvents.Event[],
    total: number
  }> {
    const res = await api.get('/events', {params: query});

    return res.data
  }

  static async getEvent(id: string):Promise<IEvents.Event> {
    const res = await api.get(`/events/${id}`)

    return res.data
  }

  static async approveEvent(id: string) {
    await api.put(`/events/${id}/approve`)
  }

  static async deleteEvent(id: string) {
    await api.delete(`/events/${id}`)
  }
}
