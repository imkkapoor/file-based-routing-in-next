import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

export default function EventDetailPage() {
    const router = useRouter();
    const eventToBeDisplayed = getEventById(router.query.eventId);

    if (!eventToBeDisplayed) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p> No event found</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events"> Show All Events</Button>
                </div>
            </Fragment>
        );
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
