const { lookup } = require('./Lookup');

exports.aggregateCommon = (matchOne, matchTwo) => {
    let aggregate = [];
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
    aggregate = [...aggregate, ...lookupAgg, ...project];
    if (matchTwo) {
        aggregate = [...aggregate,
            {
                $match: matchTwo
            }
        ];
    }
    return aggregate;
}