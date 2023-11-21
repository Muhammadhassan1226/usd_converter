// console.log("Main.js Starting..");

// const populate = async (value, currency) => {
//   let mystr = " ";
//   url =
//     "https://api.currencyapi.com/v3/latest apikey=cur_live_dDsbdBGgKpMrpBpdjzSj1opKysYeY9dfn9fcNt1A&base_currency=" +
//     currency;

//   let response = await fetch(url);
//   let rJson = await response.json();
//   console.log(rJson);
//   for (let key of Object.keys(rJson["data"])) {
//     mystr += `<tr>
//             <td>${key}</td>
//             <td>${rJson["data"][key]["code"]}</td>
//             <td>${rJson["data"][key]["value"] * value}</td>
//       </tr>
//   `;
//     // key, rJson["data"][key]["code"], rJson["data"][key]["value"];
//   }

const populate = async (value, currency) => {
  let mystr = " ";
  // Use template literals for better readability
  const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_dDsbdBGgKpMrpBpdjzSj1opKysYeY9dfn9fcNt1A&base_currency=`;

  try {
    let response = await fetch(url);
    let rJson = await response.json();
    // console.log(rJson);
    document.querySelector(".output").style.display = "block";

    for (let key of Object.keys(rJson["data"])) {
      mystr += `<tr>
                  <td>${rJson["data"][key]["code"]}</td>
                  <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                </tr>`;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  const tablebody = document.querySelector("tbody");
  tablebody.innerHTML = mystr;
  // The rest of your code, or return mystr if you need to use it elsewhere
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = parseInt(
    document.querySelector("input[name='quantity']").value
  );
  const currency = document.querySelector("select[name='currency']").value;
  populate(value, currency);
});
