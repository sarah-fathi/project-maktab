const table = document.getElementById("sampleTable");
let r = 2;

const insert_Row = () => {
// let tableRow = document.createElement("tr");
// let tableCell1 = document.createElement("td");
// let tableCell2 = document.createElement("td");
// tableCell1.innerHTML = `Row3 Cell1`;
// tableCell2.innerHTML = `Row3 Cell2`;
// tableRow.append(tableCell1, tableCell2);
// table.append(tableRow);
//---------------------------------------
r++;
table.innerHTML += `<tr>
<td>Row${r} Cell1</td>
<td>Row${r} Cell2</td>
</tr>`;
// insertAdjacentHTML(position, text)
};