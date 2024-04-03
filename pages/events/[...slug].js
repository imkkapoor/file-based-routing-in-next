import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

export default function FilteredEventsPage() {
    const router = useRouter();
    const eventDate = router.query.slug;

    if (!eventDate) {
        return <p className="center">Loading...</p>;
    }

    const filteredYear = eventDate[0];
    const filteredMonth = eventDate[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return <p>Invalid Filter. Please adjust your values</p>;
    }

    const eventToBeDisplayed = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!eventToBeDisplayed || eventToBeDisplayed.length === 0) {
        return <p> No events found for the chosen filter!</p>;
    }

    return (
        <div>
            <EventList items={eventToBeDisplayed} />
        </div>
    );
}
