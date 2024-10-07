const createCards = () => {
    let data = [];
    axios.get("LINK").then((response) => {
        data = response.data;
    }).catch((error) => {
        console.log("deu um erro cabuloso, o que será que foi?",error);
        console.error(error);
    })
};

createCards();