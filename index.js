const ethers = require('ethers')

const contractAddress = '0xE9a7d18ACE629BBF46eF5D13ba3BaA9510EECbD6' // Metaview contract address on Ropsten Testnet
const tokenAddress = '0xE9a7d18ACE629BBF46eF5D13ba3BaA9510EECbD6' // Token address to lookup on Ropsten Testnet

const provider = new ethers.getDefaultProvider('ropsten')
const metaviewAbi = ["function getAggregateRating(address token) view returns (tuple(uint64 rating, uint32 ratingCount, uint32 scamCount, uint32 remainingBonuses, uint96 bonusAmount))"]
const metaviewContract = new ethers.Contract(contractAddress, metaviewAbi, provider)

metaviewContract.getAggregateRating(tokenAddress).then((aggregateRating) => {
  var rating = ethers.utils.formatUnits(aggregateRating.rating)
  console.log('rating:', rating)
}).catch((error) => {
  console.error(error)
})
