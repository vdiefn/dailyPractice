const isvalidPrice = (price) => {
  return price > 0
}

const writeOrderLog = async(id, price) => {
  try{
    const logContent = `訂單編號: ${id}, 金額: ${price}`;
    await fs.writeFile(`./order-${id}.txt`, logContent);
    console.log('訂單儲存成功！')
  }catch(error){
    console.error(`失敗: ${error.message}`);
  }
}

async function createOrder(orderData) {
  // 1. 檢查金額是否大於 0 (職責一)
  if (!isvalidPrice(orderData.price)) {
    console.error('訂單失敗: 訂單金額不可小於或等於 0');
    return
  }
  // 2. 建立訂單 Log 檔案 (職責二)
  await writeOrderLog(orderData.id, orderData.price);
}

createOrder({ id: 'A001', price: 500 });
createOrder({ id: 'A002', price: -20 });