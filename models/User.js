class User {
    constructor(
        id,
        email,
        firstName,
        lastName,
        picture,
        phone,
        driver_licens_classes,
        birthdate,
        is_active,
        staff,
        admin
    ) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
        this.phone = phone;
        this.driver_licens_classes = driver_licens_classes;
        this.birthdate = birthdate;
        this.is_active = is_active;
        this.staff = staff;
        this.admin = admin;
    }
}

export default User;
