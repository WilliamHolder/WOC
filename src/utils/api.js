export async function fetchIngredients (id) {
    const endpoint = window.encodeURI(`http://ec2-18-130-129-142.eu-west-2.compute.amazonaws.com:5000/ingredients/${id}`)
    const res = await fetch(endpoint);
    const data = await res.json();
    if (!data) {
        throw new Error(data.message);
    }
    return data;
}

export async function fetchRecipe (id) {
    const endpoint = window.encodeURI(`http://ec2-18-130-129-142.eu-west-2.compute.amazonaws.com:5000/recipe/${id}`)
    const res = await fetch(endpoint);
    const data = await res.json();
    if (!data) {
        throw new Error(data.message);
    }
    return data;
}

export async function fetchNutrition (id) {
    const endpoint = window.encodeURI(`http://ec2-18-130-129-142.eu-west-2.compute.amazonaws.com:5000/nutrition/${id}`)
    const res = await fetch(endpoint);
    const data = await res.json();
    if (!data) {
        throw new Error(data.message);
    }
    return data;
}

export async function fetchMethod (id) {
    const endpoint = window.encodeURI(`http://ec2-18-130-129-142.eu-west-2.compute.amazonaws.com:5000/method/${id}`)
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