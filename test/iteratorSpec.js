describe('iterator class', function() {
    it('should define next & hasNext', function() {
        var iter1 = iterator(["4", "5", "6"]);
        expect(iter1.hasNext).toBeDefined();
        expect(iter1.next).toBeDefined();
    });

    it('should determine if return object isArray', function() {
        var iter1 = iterator(["4", "5", "6"]);
        expect(Array.isArray(iter1)).toBeTruthy();

        var iter2 = iterator(iter1, ["D", "E", "F"]);
        expect(Array.isArray(iter2)).toBeTruthy();
    });

    describe('hasNext', function() {
        it('should check if return iterator hasNext', function() {
            var iter1 = iterator(["4", "5", "6"], ["1"]);
            for(var i=0;i<iter1.length; i++) {
                if (i < iter1.length) {
                    expect(iter1.hasNext()).toBeTruthy();
                } else {
                    expect(iter1.hasNext()).toBeFalsy();
                }
            }
        });

        it('should check if argument (string) hasNext', function() {
            var iter1 = iterator("baba");
            for(var i=0;i<iter1.length; i++) {
                if (i < iter1.length) {
                    expect(iter1.hasNext()).toBeTruthy();
                } else {
                    expect(iter1.hasNext()).toBeFalsy();
                }
            }
        });
    });

    it('should fetch the next item', function() {
        var iter2 = iterator("baba");

        expect(iter2.next()).toEqual('b');
        expect(iter2.next()).toEqual('a');
        expect(iter2.next()).toEqual('b');
        expect(iter2.next()).toEqual('a');
        expect(iter2.next()).toBeNull();
    });

    it('should output iterable argument values into string', function() {
        expect(init()).toEqual('PAPA WAS A ROLLING STONE');
    });
});
