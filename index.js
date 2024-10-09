const caixas = document.querySelector(".caixas");

const createCards = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        const info = response?.data;

        for (const card of info) {
            caixas.innerHTML += `
                <div class="caixa">
                    <h2>${card.title}</h2>
                    <p>${card.body}</p>
                </div>
            `
        }
    }).catch((error) => {
        console.log("deu um erro cabuloso, o que será que foi?", error);
        console.error(error);
    })
};

createCards();