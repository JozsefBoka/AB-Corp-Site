/**
 * Checks if date is valid
 * @param {Date} date 
 * @returns {Boolean}
 */
export function isValidDate(date) {
    return date instanceof Date && !isNaN(date)
}

export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
