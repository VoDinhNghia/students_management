exports.paginationAndSortByCreatedAt = (limit, page, aggregate = []) => {
    return [
        ...aggregate,
        {
            $skip: Number(limit) * (Number(page) - 1),
        },
        {
            $limit: Number(limit),
        },
        {
            $sort: { 'createdAt': -1 },
        },
    ]
}