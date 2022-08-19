import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './js/fetchCountries.js';
import onSingleCountry from './js/sample_one.js';
import onSeveralCountry from './js/sample_a_fewCountries.js';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onResponseInfo, DEBOUNCE_DELAY));



function onResponseInfo(event) {
    const name = event.target.value.trim();
  console.log(name);
  if (name === '') {
    countryListRef.innerHTML = '';
    countryInfoRef.innerHTML = '';
  } else {
    fetchCountries(name)
      .then(country => {
        console.log(country);
        if (country.length === 1) {
          countryInfoRef.innerHTML = onSingleCountry(country);
        } else if (country.length >= 2 && country.length <= 10) {
          for (let i = 0; i < country.length; i += 1) {
            countryListRef.insertAdjacentHTML('beforeend', onSeveralCountry(country[i]));
          }
        } else if (country.length > 10) {
          countryListRef.innerHTML = '';
          countryInfoRef.innerHTML = '';
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else {
          countryListRef.innerHTML = '';
          countryInfoRef.innerHTML = '';
          Notiflix.Notify.failure('Oops, there is no country with that name');
        }
       
      })
      .catch(error => {
        countryListRef.innerHTML = '';
        countryInfoRef.innerHTML = '';
        Notiflix.Notify.failure('Oops, there is no country with that name');
      });
  }
    };
  


    
