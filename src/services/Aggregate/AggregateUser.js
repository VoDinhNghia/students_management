const { lookup } = require('./Lookup');

exports.paginationAgg = (limit, page, aggregate = []) => {
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
        }
    ]
}

exports.aggregateCommon = (matchOne, matchTwo) => {
    const aggregate = [];
    if (matchOne) {
        aggregate.push({
            $match: matchOne
        });
    }
    const lookupAgg = lookup([{
        from: 'profileinfos',
        localField: '_id',
        foreignField: 'userId',
    }]);
    const project = [{
        $project: {
            passWord: 0,
        }
    }];
    if (matchTwo) {
        return [...aggregate, ...lookupAgg, ...project,
            {
                $match: matchTwo
            }
        ];
    }
    return [...aggregate, ...lookupAgg, ...project];
}