const inputs = document.querySelectorAll("input");
inputs[0].value = "";
inputs[0].focus();

inputs.forEach((ipt, idx) => {
  ipt.addEventListener("input", () => {
    if (ipt.value > 9) {
      ipt.value = ipt.value % 10;
    }
    const str = ipt.value.toString();
    ipt.value = +str;
    if (idx === inputs.length - 1) {
      inputs[idx].blur();
      return;
    }
    inputs[idx + 1].focus();
  });
});
