const createTokenElement = ({
  name,
  collection,
  description,
  permalink,
  image_preview_url,
  token_id,
}) => {
  const newElement = document
    .getElementById("nft_template")
    .content.cloneNode(true);

  newElement.querySelector("section").id = `${collection.slug}_${token_id}`;
  newElement.querySelector("h1").innerText = name;
  newElement.querySelector("a").href = permalink;
  newElement.querySelector("img").src = image_preview_url;
  newElement.querySelector("img").alt = description;

  return newElement;
};

const renderTokensForOwner = async (ownerAddress) => {
  fetch(
    `https://api.opensea.io/api/v1/assets?owner=${ownerAddress}&order_direction=desc&offset=0&limit=30`,
    { method: "GET", headers: { Accept: "application/json" } }
  )
    .then((response) => response.json())
    .then(({ assets }) => {
      assets.forEach((attributes) => {
        document
          .getElementById("container")
          .append(createTokenElement(attributes));
      });
    });
};

module.exports = {
  renderTokensForOwner,
};
