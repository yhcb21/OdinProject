function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const getLevel = () => level;
  const increaseLevel = () => { level++; };
  return {
    name,
    getReputation,
    giveReputation,
    getLevel,
    increaseLevel,
  };
}
