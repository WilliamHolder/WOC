/*function getProfile (username) {
    return fetch(`https://api.github.com/users/${username}${params}`)
        .then((res) => res.json())
        .then((profile) => {
            if(profile.message) {
                throw new Error(getErrorMsg(profile.message, username))
            }

            return profile
        })
}


export function fetchPopularRepos (language) {
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:
        ${language}&sort=stars&order=desc&type=Repositories`)

    return fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            if(!data.items) {
                throw new Error(data.message)
            }
            
        return data.items
    })
}
*/
export async function fetchIngredients (id) {
    const endpoint = window.encodeURI(`http://localhost:5000/ingredients/${id}`)
    const res = await fetch(endpoint);
    const data = await res.json();
    //console.log(data)
    if (!data) {
        throw new Error(data.message);
    }
    return data;
}

export async function fetchRecipe (id) {
    const endpoint = window.encodeURI(`http://localhost:5000/recipe/${id}`)
    const res = await fetch(endpoint);
    const data = await res.json();
    //console.log("data2 " + data)
    if (!data) {
        throw new Error(data.message);
    }
    return data;
}

export async function fetchNutrition (id) {
    const endpoint = window.encodeURI(`http://localhost:5000/nutrition/${id}`)
    const res = await fetch(endpoint);
    const data = await res.json();
    //console.log(data)
    if (!data) {
        throw new Error(data.message);
    }
    return data;
}

export async function fetchMethod (id) {
    const endpoint = window.encodeURI(`http://localhost:5000/method/${id}`)
    const res = await fetch(endpoint);
    const data = await res.json();
    if (!data) {
        throw new Error(data.message);
    }
    return data;
}

export async function fetchRecipes () {
    const endpoint = window.encodeURI(`http://localhost:5000/recipes`)
    const res = await fetch(endpoint);
    const data = await res.json();
    if (!data) {
        throw new Error(data.message);
    }
    return data;
}

/*

function getUserData (player) {
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(([profile, repos]) => ({
        profile,
        score: calculateScore(profile.followers, repos)
    }))
}

function sortPlayers (players) {
    return players.sort((a, b) => b.score - a.score)
}

export function battle (players) {
    return Promise.all([
        getUserData(players[0]),
        getUserData(players[1])
    ]).then((results) => sortPlayers(results))
}*/