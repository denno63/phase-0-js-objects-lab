// Create the attendee object
const attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

// Function to log the attendee's name
function logAttendeeName(attendeeObj) {
    console.log(attendeeObj.name);
}

// Function to log the ticket price
function logTicketPrice(attendeeObj) {
    console.log(attendeeObj.ticketPrice);
}

// Function to update ticket type
function updateTicketType(attendeeObj, newTicketType) {
    attendeeObj.ticketType = newTicketType;
}

// Function to update ticket price
function updateTicketPrice(attendeeObj, newTicketPrice) {
    attendeeObj.ticketPrice = newTicketPrice;
}

// Function to remove the event property
function removeEventProperty(attendeeObj) {
    delete attendeeObj.event;
}

// Function to add checkedIn property with value true
function addCheckedInProperty(attendeeObj) {
    attendeeObj.checkedIn = true;
}

// Export everything for testing
module.exports = {
    attendee,
    logAttendeeName,
    logTicketPrice,
    updateTicketType,
    updateTicketPrice,
    removeEventProperty,
    addCheckedInProperty
};