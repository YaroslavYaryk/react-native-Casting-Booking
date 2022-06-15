class Event {
  constructor(
    id,
    company,
    customer,
    artist,
    venue,
    price,
    payment_methods,
    date,
    comment,
    visible,
    signed,
    aditional_staff,
    contract_pdf_url,
    venueImage
  ) {
    this.id = id;
    this.company = company;
    this.customer = customer;
    this.artist = artist;
    this.venue = venue;
    this.price = price;
    this.payment_methods = payment_methods;
    this.date = date;
    this.comment = comment;
    this.visible = visible;
    this.signed = signed;
    this.aditional_staff = aditional_staff;
    this.contract_pdf_url = contract_pdf_url;
    this.venueImage = venueImage;
  }
}

export default Event;
