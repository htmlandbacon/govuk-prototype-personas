const { views } = require('govuk-prototype-kit');

const citizen = require("./index");

views.addFunction("getCitizens", () => citizen.getCitizens());

views.addFunction("getCitizenBySlug", (slug) => citizen.getCitizenBySlug(slug));
