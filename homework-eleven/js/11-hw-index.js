const MILI_SECONDS = 50;

async function getRandomChinese(length) {
  if (!Number.isInteger(length) || length < 0) {
    throw new Error("Argument should be integer and higher than 0!");
  }

  const symbols = [];
  while (symbols.length < length) {
    const sign = String(Date.now()).slice(-5);
    await new Promise((res, rej) => setTimeout(res, MILI_SECONDS));
    const chineseSymbols = String.fromCharCode(sign);
    symbols.push(chineseSymbols);
  }

  return symbols.join("");
}

getRandomChinese(4)
  .then((result) => alert(result))
  .catch((error) => alert(error));
