// Estrutura de dados para mapas e agentes
const data = {
  map: {
    name: "ABYSS",
    winRate: "49,6%",
    miniMapImage: "../../img/minimap/Abyss-.png",
  },
  agents: [
    {
      name: "JETT",
      coverImage: "../../img/agentes/jett/maxresdefault (1).jpg",
      characterImage: "../../img/agentes/jett/600px-Jett_Artwork.png",
    },
    {
      name: "SKYE",
      coverImage: "../../img/agentes/skye/6292d525f11efc5f69f51b3519cb9873c4a533a7-1920x1080.jpg",
      characterImage: "../../img/agentes/skye/Skye_Artwork_Full.webp",
    },
    {
      name: "CYPHER",
      coverImage: "../../img/agentes/cypher/VALORANT-Cypher.jpg",
      characterImage: "../../img/agentes/cypher/Cypher_-_Full_body.webp",
    },
    {
      name: "KILLJOY",
      coverImage: "../../img/agentes/killjoy/how-to-play-killjoy-valorant.jpg",
      characterImage: "../../img/agentes/killjoy/Killjoy_-_Full_body.webp",
    },
    {
      name: "OMEM",
      coverImage: "../../img/agentes/omem/men-valorant-habilidades-dicas-como-jogar.jpg",
      characterImage: "../../img/agentes/omem/Omen_-_Full_body.webp",
    },
  ],
};


async function requisitAPI() {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents");
    if (!response.ok) {
      throw new Error("Erro na solicitação: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

requisitAPI().then((data) => {
  console.log(data);
});

const returnAPI = requisitAPI();

console.log(returnAPI);

