// ForEach e callbacks
const socialNetworks = ["YouTube", "Twitter", "Instagram", "Facebook"];

const logArrayInfo = (socialNetwork, index, array) => {
  console.log(index, socialNetwork, array);
};

socialNetworks.forEach(logArrayInfo);