import {ICategories} from "~/database/categories";

import {ICities} from "~/database/cities";

export namespace IEvents {
  export interface PostEventForm {
    name: string
    price: string,
    location: string,
    category: number,
    city: number,
    picture: File
    description: string,
    start: Date,
    end: Date
  }

  export interface ListEventsQuery {
    skip: number;

    take: number;

    city?: number | null;

    category?: number | null;

    search?: string | null;

    moderation?: boolean
  }

  export interface Event {
    id: number,
    name: string
    price: string,
    location: string,
    category: ICategories.Category,
    city: ICities.City,
    picture: string,
    description: string,
    start: Date,
    end: Date,
    approved: boolean
  }
}
