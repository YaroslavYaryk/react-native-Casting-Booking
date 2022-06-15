import EventTimeClock from "../models/EventTimeClock";

const TIME_CLOCKS = [
    new EventTimeClock(18, "09:00:00", "10:00:00", "show begin"),
    new EventTimeClock(20, "10:00:00", "11:00:00", "doing smth else"),
];

export default TIME_CLOCKS;
