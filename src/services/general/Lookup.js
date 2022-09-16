exports.lookup = (fieldArray = []) => {
    const result = [];
    for (const obj of fieldArray) {
        result.push({
            $lookup: {
                from: obj.from,
                localField: obj.localField,
                foreignField: obj.foreignField,
                as: `${obj.from}`,
            },
        })
    }
    return result;
}