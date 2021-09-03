const form = document.querySelector('#searchform');
const res = document.querySelector('#tableResult');
var upd;
form.addEventListener('submit',(e)=>{

    e.preventDefault();
    if(upd){
        clearTimeout(upd);
    }
   

    const ctype = form.elements.coinType.value;

    fetchPrice(ctype);

});

const fetchPrice=async(ctype)=>{
   const r = await axios.get(`https://api.cryptonator.com/api/ticker/${ctype}`) ;
   const price = r.data.ticker.price;
   const volume = r.data.ticker.volume;
   const change = r.data.ticker.change;
   const base = r.data.ticker.base;
   const target = r.data.ticker.target;
   const time = r.data.timestamp;

res.innerHTML =  `<tr style="background-color:blue; color:white; font-weight:700">
<td>
    Property
</td>
<td>
    value
    </td>

</tr>
<tr>
<td>
    ${base}
</td>
<td >  ${price} ${target}</td>

</tr>

<tr>
<td>
    Volume
</td>
<td > ${volume}</td>

</tr>

<tr>
<td>
    Change
</td>
<td > ${change} </td>

</tr>
<tr>
<td>
    Last Update
</td>
<td > ${time} </td>

</tr>`

upd = setTimeout(()=>fetchPrice(ctype),10000);

}