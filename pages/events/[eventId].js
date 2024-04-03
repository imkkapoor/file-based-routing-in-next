import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

export default function EventDetailPage() {
    const router = useRouter();
    const eventToBeDisplayed = getEventById(router.query.eventId);

    if (!eventToBeDisplayed) {
        return <p> No event found</p>;
    }

    return (
        <Fragment>
            <EventSummary title={eventToBeDisplayed.title} />
            <EventLogistics
                date={eventToBeDisplayed.date}
                address={eventToBeDisplayed.location}
                image={eventToBeDisplayed.image}
                imgAlt={eventToBeDisplayed.title}
            />
            <EventContent>
                <p>{eventToBeDisplayed.description}</p>
            </EventContent>
        </Fragment>
    );
}
