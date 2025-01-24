const data = require("./data.json");

const getCitizenBySlug = (slug) => {
    const citizen = data.filter(item => item.slug === slug);

    if (citizen.length > 0) {
        return citizen[0];
    } else {
        return "Error: can't find user";
    }
}

const getCitizens = () => data;


module.exports = {
    getCitizenBySlug,
    getCitizens
}