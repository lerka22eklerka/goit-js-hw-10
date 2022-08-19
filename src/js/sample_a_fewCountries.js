export default function onSeveralCountry(country) {
        const { name: { official }, flags: { svg } } = country;
        console.log(country);
    return `<li class = "list-item"> <img src="${svg}" alt="flag" width="40" height="30" class="item-img" /><span
  class="item-name"
>${official}</span></li>`      
}
