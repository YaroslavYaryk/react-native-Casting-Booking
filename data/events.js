import Event from "../models/Event";

const EVENTS = [
    new Event(
        286,
        "MultiEvent",
        "Customer 1",
        "Kevin Lauren",
        "Venue 1",
        5000.0,
        "50% before event, 50% after event ",
        "2022-06-10",
        "here would be some comment",
        true,
        false,
        ["Reise", "Hotell"],
        "/media/contracts/customer-1_kevin-lauren.pdf",
        "https://karawanico.com/wp-content/uploads/2017/10/revelry-event-designers-homepage-slideshow-38-1024x683.jpeg"
    ),
    new Event(
        292,
        "MultiEvent",
        "Customer 1",
        "Artist 1",
        "Venue 1",
        1000.0,
        "100% after event",
        "2022-06-12",
        " ",
        true,
        false,
        ["Reise", "Hotell"],
        "/media/contracts/customer-1_artist-1.pdf",
        "https://karawanico.com/wp-content/uploads/2017/10/revelry-event-designers-homepage-slideshow-38-1024x683.jpeg"
    ),
    new Event(
        293,
        "MultiEvent",
        "Customer 2",
        "Artist 1",
        "Venue 2",
        1000.0,
        "100% after event some comment ",
        "2022-06-12",
        " ",
        true,
        false,
        ["Reise", "Hotell"],
        "/media/contracts/customer-2_artist-1.pdf",
        "https://karawanico.com/wp-content/uploads/2017/10/revelry-event-designers-homepage-slideshow-38-1024x683.jpeg"
    ),
];

export default EVENTS;
