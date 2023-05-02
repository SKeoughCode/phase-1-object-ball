

// Solution Code start

function gameObject() {
    const newObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrian": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyobo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }

    return newObject;
}


function homeTeamName() {
    return gameObject().home.teamName;
}

function numPointsScored(param1) {
    let temp = gameObject();

    for (let x in temp.home.players) {
        if (x == param1) {
            return temp.home.players[param1].points;
        }
    }
    for (let x in temp.away.players) {
        if (x == param1) {
            return temp.away.players[param1].points;
        }
    }
}

function numSteals(param1) {
    let temp = gameObject();

    for (let x in temp.home.players) {
        if (x == param1) {
            return temp.home.players[param1].steals;
        }
    }
    for (let x in temp.away.players) {
        if (x == param1) {
            return temp.away.players[param1].steals;
        }
    }
}

function shoeSize(param1) {
    let temp = gameObject();

    for (let x in temp.home.players) {
        if (x == param1) {
            return temp.home.players[param1].shoe;
        }
    }
    for (let x in temp.away.players) {
        if (x == param1) {
            return temp.away.players[param1].shoe;
        }
    }
}

function teamColors(param1) {
    const temp = gameObject();

    if (homeTeamName() == param1) {
        return temp.home.colors;
    }
    else {
        return temp.away.colors;
    }
}

function teamNames() {
    const temp = gameObject();

    let awayName = temp.away.teamName;
    let homeName = homeTeamName();
    let blank = [awayName, homeName];
    return blank;
}

function playerNumbers(param) {
    const game = gameObject();

    if (game.home.teamName == param) {
        let playerList = [];
        for (let x in game.home.players) {
            playerList.unshift(x);
        }
        return playerList;
    } else {
        let playerList = [];
        for (let x in game.away.players) {
            playerList.unshift(x);
        }
        return playerList;
    }
}

function playerStats(name) {
    const game = gameObject();

    for (let x in game.home.players) {
        if (x == name) {
            return game.home.players[x];
        }
    }
    for (let x in game.away.players) {
        if (x == name) {
            return game.away.players[x];
        }
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize;

    for (let x in game.home.players) {
        if (largestShoeSize == null || largestShoeSize < shoeSize(x)) {
            largestShoeSize = game.home.players[x]
        }
    }
    for (let x in game.away.players) {
        if (largestShoeSize == null || largestShoeSize < shoeSize(x)) {
            largestShoeSize = game.home.players[x]
        }
    }
    return largestShoeSize.rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    let playerWMostPoints;

    for (let x in game.home.players) {
        if (playerWMostPoints == null || playerWMostPoints.points < numPointsScored(x)) {
            playerWMostPoints = game.home.players[x];
        }
    }
    for (let x in game.away.players) {
        if (playerWMostPoints.points < numPointsScored(x)) {
            playerWMostPoints = game.away.players[x];
        }
    }
    return playerWMostPoints;
}

function winningTeam() {
    const game = gameObject();

    let awayScore = 0;
    let homeScore = 0;

    for (let x in game.home.players) {
        homeScore += game.home.players[x].points;
    }
    for (let x in game.away.players) {
        awayScore += game.away.players[x].points;
    }
    if (homeScore > awayScore) {
        return "The Home team won.";
    }

    return "The away team won."
}

function playerWithLongestName() {
    const game = gameObject();
    let longNamePlayer;

    for (let x in game.home.players) {
        if (longNamePlayer == null || longNamePlayer.length < x.length) {
            longNamePlayer = x;
        }
    }
    for (let x in game.away.players) {
        if (longNamePlayer.length < x.length) {
            longNamePlayer = x;
        }
    }

    return longNamePlayer;

}

function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = playerWithLongestName();
    let numMostSteals;

    for (let x in game.home.players) {
        if (numMostSteals == null || numMostSteals < game.home.players[x].steals) {
            numMostSteals = game.home.players[x].steals;
        }
    }
    for (let x in game.away.players) {
        if (numMostSteals < game.away.players[x].steals) {
            numMostSteals = game.away.players[x].steals;
        }
    }

    if (numMostSteals != numSteals(longestName)) {
        return false
    }

    return true

}



console.log(numPointsScored("Mason Plumlee"));
console.log(shoeSize("Mason Plumlee"));
console.log(teamColors("Brooklyn Nets"));
console.log(numPointsScored("Ben Gordon"));
console.log(shoeSize("Ben Gordon"));
console.log(teamColors("Charlotte Hornets"));
console.log(teamColors("Brooklyn Nets"));
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerNumbers("Brooklyn Nets"));
console.log(playerStats("Mason Plumlee"));
console.log(playerStats("Ben Gordon"));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
console.log(doesLongNameStealATon());

// Solution Code End