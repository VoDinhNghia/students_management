const { lookup } = require('./Lookup');

exports.aggregateFacultyCommon = (match) => {
    let aggregate = [];
    if (match) {
        aggregate.push({
            $match: match
        });
    }
    const lookupAgg = lookup([{
        from: 'majors',
        localField: '_id',
        foreignField: 'facultyId',
    }]);
    return [...aggregate, ...lookupAgg];
};

exports.aggregateMajorsCommon = (match) => {
    let aggregate = [];
    if (match) {
        aggregate.push({
            $match: match
        });
    }
    const lookupAgg = lookup([{
        from: 'facultys',
        localField: 'facultyId',
        foreignField: '_id',
    }]);
    return [...aggregate, ...lookupAgg];
};