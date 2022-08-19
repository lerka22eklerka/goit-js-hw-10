export default function onSingleCountry(country) {
  console.log(country);
  const {
    name: { official },
    capital,
    population,
    flags: { svg },
    languages,
  } = country[0];
  // console.log(official);
  const langList = Object.values(languages);
  console.log(langList);
  return `<div class='country-card'>
    <img src="${svg}" alt="flag" width="40" height="30" class="item-img" />
     <h2 class="country-name">${official}</h2>
</div>
<ul class="country-list">
  <li class="country-item">
    <p class="country-capital">Capital: <span class="info-text">${capital}</span></p>
  </li>
  <li class="country-item">
    <p class="country-population">Population: <span class="info-text">${population}</span></p>
  </li>
  <li class="country-item">
    <p class="country-lang">Languages: <span class="info-text">${langList}</span></p>
  </li>
</ul>`;
}