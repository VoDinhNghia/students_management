exports.paginationAgg = (limit, page, aggregate = []) => {
    return [
        ...aggregate,
        {
            $skip: Number(limit) * (Number(page) - 1),
        },
        {
            $limit: Number(limit),
        },
    ]
}

exports.sortByColunmAgg = (aggregate = []) => {
    return [
        ...aggregate,
        {
            $sort: { 'createdAt': -1 },
        },
    ]
}