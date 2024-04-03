import { Router, useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

export default function AllEventsPage() {
    const allEvents = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month) {
        //grabbing the date and pushing to the path for ...slug
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <div>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={allEvents} />
        </div>
    );
}
