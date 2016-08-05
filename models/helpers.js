module.exports = {
  findSentBids: function(bids, id){
    var sentBids = [];
    bids.forEach(function(bid){
      if(bid.user_id === id){
        sentBids.push(bid);
      }
    })
    return sentBids;
  },
  findReceivedBids: function(bids, user){
    var recBids = [];
    bids.forEach(function(bid){
      if(bid.username === (user.first_name+' '+user.last_name)){
        recBids.push(bid);
      }
    })
    return recBids;
  }
}
