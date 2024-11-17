import data from "../data/products.json";

export const dataRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data); // Devolver los datos correctos
    }, 1000);
  });
};

export const dataRequestId = (id) => {
  return new Promise((resolve, reject) => {

    const item = data.find((el) => el.id === id)

    if(item) {
      resolve(item)
    } else {
      reject({
        error: "Product not found"
      })
    }
  })
}
