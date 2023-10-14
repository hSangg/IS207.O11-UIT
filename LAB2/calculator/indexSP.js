const queryFollowingPrice = (id) => {
  try {
    const ul = document.querySelector(".shopee-search-item-result__items");
    const li = ul.querySelectorAll(".shopee-search-item-result__item");
    const firstCase = li[id];
    const Div1 = firstCase.querySelector("div");
    const Div2 = Div1.querySelector("div");
    const Div3 =
      Div2.querySelector("div").nextElementSibling || Div2.querySelector("div");
    const name = Div3.querySelector("div")
      .querySelector("div")
      .querySelector("div").innerText;
    const address =
      Div3?.querySelector("div")?.nextElementSibling?.nextElementSibling
        ?.nextElementSibling?.textContent;

    const Div4 = Div3.querySelector("div").nextElementSibling;
    const Div5 = Div4.querySelector("div");

    const startPrice =
      Div5?.querySelector("span")?.nextElementSibling?.nextElementSibling
        ?.innerText;
    const endPrice =
      Div5?.querySelector("span")?.nextElementSibling?.nextElementSibling
        ?.nextElementSibling?.nextElementSibling?.nextElementSibling?.innerText;

    if (startPrice && endPrice) {
      console.log("%cname:", "color: red; font-size: 20px", name);
      console.log("%caddress:", "color: red; font-size: 20px", address);
      console.log("%cstartPrice:", "color: red; font-size: 20px", startPrice);
      console.log("%csendPrice:", "color: red; font-size: 20px", endPrice);
      console.log(
        "------------------------------------------------------------"
      );
      return;
    }

    const oldPrice = Div4?.querySelector("div")?.innerText;
    const newPrice = Div4?.querySelector("div")?.nextElementSibling?.innerText;
    if (oldPrice && newPrice) {
      console.log("%cname:", "color: red; font-size: 20px", name);
      console.log("%caddress:", "color: red; font-size: 20px", address);
      console.log("%coldPrice:", "color: red; font-size: 20px", oldPrice);
      console.log("%cnewPrice:", "color: red; font-size: 20px", newPrice);
      console.log(
        "------------------------------------------------------------"
      );

      return;
    }

    const price =
      Div5?.querySelector("span")?.nextElementSibling?.nextElementSibling
        ?.innerText;

    if (price) {
      console.log("%cname:", "color: red; font-size: 20px", name);
      console.log("%caddress:", "color: red; font-size: 20px", address);
      console.log("%cprice:", "color: red; font-size: 20px", price);
      console.log(
        "------------------------------------------------------------"
      );

      return;
    }
  } catch (error) {}
};

const data = async () => {
  const ul = document.querySelector(".shopee-search-item-result__items");
  const li = ul.querySelectorAll(".shopee-search-item-result__item");
  const lenght = li.length;
  for (let index = 0; index < lenght; index++) {
    queryFollowingPrice(index);
  }
};

const dataAllPage = async () => {
  var element = document.querySelector(
    ".shopee-mini-page-controller__next-btn"
  );

  const totalpage = +document.querySelector(
    ".shopee-mini-page-controller__total"
  ).innerText;

  for (let i = 0; i < totalpage + 1; i++) {
    simulateScroll();
    data();
    await sleep(1000);
    element.click();
  }
};

function simulateScroll() {
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

dataAllPage();
