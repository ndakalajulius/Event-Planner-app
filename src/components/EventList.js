// src/components/EventList.js
import React from 'react';

const EventList = ({ events, onEdit, onDelete, filterText }) => {
    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <ul>
            {filteredEvents.map((event, index) => (
                <li key={index}>
                    <h3>{event.title}</h3>
                    <p>{event.date} - {event.location} - {event.type}</p>
                    <button onClick={() => onEdit(event)}>Edit</button>
                    <button onClick={() => onDelete(event)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default EventList;
