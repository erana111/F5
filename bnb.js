Array.prototype.sum = function() {
    var total = 0;
    for (var i = 0; i<this.length; i++) { 
        total += this[i]; 
    }
    return total;
};

function fillBuckets(ballsOpt, buckets, balls) {
    var items = [];
    var steps = ballsOpt.length;

    for (var i=0; i<=balls; i++) {
        var step = 0;
        var tmpArr = [i];
        var spotRemain = buckets - 1;
        var flag = (buckets < 3) ? true : false;

        while (true) {
            var startFrom = step;

            if (spotRemain <= 1) {
                tmpArr.push(balls - tmpArr.sum());
                console.log(tmpArr);
                items.push(tmpArr);
                spotRemain = buckets - 1;
                tmpArr = [i];
                if (flag) break;
            }

            for (var k=startFrom; k<ballsOpt.length && spotRemain>1; k++) {
                if (ballsOpt[k] + tmpArr.sum() <= balls) {
                    tmpArr.push(ballsOpt[k]);
                    spotRemain--;
                    step++;
                }
            }

            if (startFrom >= steps) break;
        }
        steps--;
    }
    console.log('------------');

    return items;
}
