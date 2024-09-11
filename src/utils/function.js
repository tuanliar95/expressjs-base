/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
const convertResponse = (options, paginate) => {
  const { docs, pages, total } = paginate;
  return {
    rows: docs,
    total,
    totalPages: pages,
    page: options?.page,
    limit: options?.limit,
  };
};

module.exports = convertResponse;
