# govuk-prototype-personas

This is a example govuk prototype plugin that exposesd a set of persona data.

It has pre-built in functions you can use within your view to get the data or you can use the same functions in your routes.

## Getting started

To view the data, you can clone this repo, install it, and run it using npm run dev.

To use this in a protototype

```bash
npm install git@github.com:htmlandbacon/govuk-prototype-personas.git
```

Then in a view you can either get a single citizen:

```twig
{% set citizen = getCitizenBySlug("kirestin") %}

<p class="govuk-body">Hello {{ citizen.name }}.</p>
```

Or you can get all citizens

```twig
{% set citizens = getCitizens() %}

{% for citizen in citizens %}
  <p class="govuk-body">Hello {{ citizen.name }}.</p>
{% endfor %}
```