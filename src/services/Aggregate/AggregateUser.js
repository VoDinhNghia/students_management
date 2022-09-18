const { lookup } = require('./Lookup');

exports.aaa = (match) => {
    const aggregate = [];
    if (match) {
        aggregate.push({
            $match: match
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
    return [...aggregate, ...lookupAgg, ...project];
}

exports.paginationAgg = (limit, page, aggregate = []) => {
    return [
        ...aggregate,
        {
            $skip: Number(limit) * (Number(page) - 1),
        },
        {
            $limit: Number(limit),
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