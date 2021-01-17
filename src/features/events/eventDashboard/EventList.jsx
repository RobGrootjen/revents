import React from 'react';
import EventListItem from './EventListenItem';

export default function EventList({events}) {
    return(
        <>
          {events.map(event => (
            <EventListItem event={event} key={event.id}/>
          ))}
          </>
    )
}