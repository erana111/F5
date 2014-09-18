describe('bnb', function() {
    it('should gen iter object ', function() {
        var res;
        //fillBuckets([0, 1, 2, 3], 3, 3);
        //expect(bnb(5, 3)).toBeUndefined();
        res = [
            [0, 3], 
            [1, 2], 
            [2, 1], 
            [3, 0]
        ];
        expect(fillBuckets([0, 1, 2, 3], 2, 3)).toEqual(res);
        //expect(bnb(2, 3)).toEqual(res);
        
        res = [
            [0, 0, 3], 
            [0, 1, 2], 
            [0, 2, 1], 
            [0, 3, 0], 
            [1, 0 ,2], 
            [1, 1, 1], 
            [1, 2, 0], 
            [2, 0, 1], 
            [2, 1, 0], 
            [3, 0, 0]
        ];
        expect(fillBuckets([0, 1, 2, 3], 3, 3)).toEqual(res);
        //expect(bnb(3, 3)).toEqual(res);
    });
});
