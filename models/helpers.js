module.exports = {
  findSentBids: function(bids){
    var sentBids = [];
    bids.forEach(function(bid){
      if(bid.user_id === req.cookies.userid){
        sentBids.push(bid);
      }
    })
    return sentBids;
  },
  findReceivedBids: function(bids){
    var recBids = [];
    bids.forEach(function(bid){
      if(bid.username === (user.first_name+' '+user.last_name)){
        recBids.push(bid);
      }
    })
    return recBids;
  }
}
