const handleChange = event => {
  // const passwordInput = event.target.value.split(",");
  // console.log(passwordInput);
  // createRow(passwordInput);
};

const handleClick = () => {
  const input = document.querySelector("input").value;
  const passwordInputArray = input.split(",");
  createRow(passwordInputArray);
};

const createRow = input => {
  input.forEach(password => {
    const row = document.createElement("tr");
    enterDataInRow(password, row);
    const table = document.getElementById("table");
    table.appendChild(row);
  });
};

const enterDataInRow = (data, row) => {
  const response = passwordValidator(data);
  const msg = response.success ? "" : "Failure"
  const dataArr = [data, response.success, `${msg} ${response.message}`];
  for (let i = 0; i < 3; ++i) {
    const tableData = document.createElement("td");
    const text = document.createTextNode(dataArr[i]);
    tableData.appendChild(text);
    row.appendChild(tableData);
  }
};
