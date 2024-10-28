// src/components/EventForm.js
import React, { useState, useEffect } from 'react';

const EventForm = ({ onSubmit, eventToEdit, resetEvent }) => {
    const [event, setEvent] = useState({ title: '', date: '', location: '', type: '' });

    useEffect(() => {
        if (eventToEdit) {
            setEvent(eventToEdit);
        } else {
            resetEvent();
        }
    }, [eventToEdit, resetEvent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(event);
        setEvent({ title: '', date: '', location: '', type: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" value={event.title} onChange={handleChange} required />
            <input type="date" name="date" value={event.date} onChange={handleChange} required />
            <input type="text" name="location" placeholder="Location" value={event.location} onChange={handleChange} required />
            <input type="text" name="type" placeholder="Type" value={event.type} onChange={handleChange} required />
            <button type="submit">{eventToEdit ? 'Update Event' : 'Add Event'}</button>
        </form>
    );
};

export default EventForm;
