const { lookup } = require('./Lookup');

exports.aggregateFacultyCommon = (match) => {
    let aggregate = [];
    if (match) {
        aggregate.push({
            $match: matchOne
        });
    }
    const lookupAgg = lookup([{
        from: 'majors',
        localField: '_id',
        foreignField: 'facultyId',
    }]);
    return [...aggregate, ...lookupAgg];
};