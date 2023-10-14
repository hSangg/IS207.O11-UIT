const input = document.getElementById("input");
const ceButton = document.getElementById("ce");
const delButton = document.getElementById("del");
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const mulButton = document.getElementById("mul");
const divButton = document.getElementById("div");
const result = document.getElementById("result");

// Xóa toàn bộ số đã nhập vào
ceButton.addEventListener("click", () => {
  input.value = "";
  result.innerHTML = "";
});

// Xóa từng chữ số đã nhập
delButton.addEventListener("click", () => {
  const value = input.value;
  if (value.length > 0) {
    input.value = value.slice(0, -1);
  }

  // Cập nhật kết quả
  updateResult();
});

// Tính toán phép tính
const buttons = [addButton, subButton, mulButton, divButton];
for (const button of buttons) {
  button.addEventListener("click", () => {
    const value = input.value;
    const operator = button.textContent;

    // Kiểm tra phép tính hợp lệ
    if (operator === "/" && value === "0") {
      result.innerHTML = "Invalid error!";
      return;
    }

    // Tính toán
    const resultNumber = eval(value + operator);

    // Cập nhật kết quả
    input.value = resultNumber;
    updateResult();
  });
}

// Cập nhật kết quả
function updateResult() {
  const value = input.value;
  if (value === "") {
    result.innerHTML = "";
    return;
  }

  result.innerHTML = value;
}
