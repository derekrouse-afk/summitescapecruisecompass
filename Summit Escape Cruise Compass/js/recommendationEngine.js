function calculateCruiseMatches(userProfile) {

    const results = [];

    cruiseLines.forEach(cruiseLine => {

        let totalScore = 0;
        let maxScore = 0;

        Object.keys(userProfile).forEach(attribute => {

            const travelerValue = userProfile[attribute];

            const cruiseValue =
                cruiseLine.scores[attribute] || 0;

            totalScore += Math.min(travelerValue, cruiseValue);

            maxScore += travelerValue;

        });

        const match =
            Math.round((totalScore / maxScore) * 100);

        results.push({

            cruiseLine,

            score: totalScore,

            percentage: match

        });

    });

    results.sort((a, b) =>

        b.percentage - a.percentage

    );

    return results;

}