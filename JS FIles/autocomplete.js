const search = document.getElementById('search');
const match = document.getElementById('match');

search.addEventListener('keyup', func);

function func()
{
    fetch('../Data/states.json')
    .then(res => res.json())
    .then(data => {
        let output = '';
        let val = search.value.toUpperCase();
        data.forEach(state => {
            if(val.length>0 && (state.name.toUpperCase().indexOf(val)>-1 || state.abbr.toUpperCase().indexOf(val)>-1))
            {
                output+=
                `
                    <div class="result">
                        <div class="state-name mb-0 py-0">${state.name} <span class="abbr text-info"> (${state.abbr})</span></div>
                        <div class="state-capital">${state.capital}</div>
                        <div class="location">
                            <span class="state-lat">Latitude : ${state.lat}</span>
                            <span class="ml-4 state-llong">Longitude : ${state.long}</span>
                        </div>
                    </div>
                `
            }
        })
        match.innerHTML = output;
    })
}
