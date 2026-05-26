function getTimeRemaining(endtime){-
var t=date.parse(endtime)-date.parse(new Date());
var Seconds=math.floor((t/1000)%60);
var Minutes=math.floor((t/1000%60);
var Hours=math.floor((t/1000/60)%24);
var Days=math.floor(t/(1000*60*60*24));
return{
'total':t;
'Days':Days;
'Hours':Hours;
'Minutes':Minutes;
'Seconds':Seconda;
};
}
