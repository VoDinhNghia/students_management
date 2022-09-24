exports.roles = {
    ADMIN: 'ADMIN',
    STUDENT: 'STUDENT',
    LECTURER: 'LECTURER',
    LIBRARIAN: 'LIBRARIAN'
}

exports.permission = {
    FULL: ['ADMIN', 'STUDENT', 'LECTURER', 'LIBRARIAN'],
    LECTURER: ['ADMIN', 'LECTURER'],
    STUDENT: ['ADMIN', 'LECTURER', 'STUDENT'],
    LIBRARIAN: ['ADMIN', 'LIBRARIAN'],
    ADMIN: ['ADMIN'],
}

exports.statusUser = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}

exports.typeAward = {
    PERSONAL: 'PERSONAL',
    GROUP: 'GROUP',
    FACULTY: 'FACULTY',
    CLASS: 'CLASS',
    MAJORS: 'MAJORS',
    UNIVERSITY: 'UNIVERSITY',
}

exports.typeNews = {
    FACULTY: 'FACULTY',
    CLASS: 'CLASS',
    MAJORS: 'MAJORS',
    UNIVERSITY: 'UNIVERSITY',
    ENROLLMENT: 'ENROLLMENT', // enrollment information
}

exports.statusStudent = {
    STILL: 'STILL',
    GRAD: 'GRADUATE',
    RESERVE: 'RESERVE',
    LEAVE: 'LEAVE',
}

exports.libraryServiceType = {
    BORROW_BOOK: 'BORROW_BOOK',
    BORROW_MAGAZINE: 'BORROW_MAGAZINE',
    BORROW_ROOM: 'BORROW_ROOM',
    RESERVE_SEAT: 'RESERVE_SEAT'
}