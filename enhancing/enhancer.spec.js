const enhancer = require('./enhancer.js');
// test away!

describe('enhancer', () => {
    describe('repair()',()=>{
        //first test
        it('durability should be max after repair', ()=>{
            let item = {
                name: 'Magic bow',
                durability: 24,
                enhancement: 3
            };
            expect(enhancer.repair(item)).toStrictEqual({...item,durability:100});
        });

        //second test
        it('durability should be max after repair even if completely broken', ()=>{
            let item = {
                name: 'Completely broken magic bow',
                durability: 0,
                enhancement: 20
            };
            expect(enhancer.repair(item)).toStrictEqual({...item,durability:100});
        });

        //third test
        it('durability greater than 100, should get back original',()=>{
            let item = {
                name: 'Better than fixed bow',
                durability: 108,
                enchancement: 13
            }
            expect(enhancer.repair(item)).toStrictEqual({...item,durability:108})
        })
    });

    
    describe('succeed()',()=>{
        //first test
        it('item enchancement increased by 1 after success',()=>{
            let item = {
                name: 'Holy Godsword',
                durability: 12,
                enhancement: 15
            }
            expect(enhancer.succeed(item)).toStrictEqual({...item,enhancement:16})
        });

        //second test
        it('item enchancement does not increased if it is already 20',()=>{
            let item = {
                name: 'Unholy Demonsword with spikes',
                durability: 10,
                enhancement: 20
            }
            expect(enhancer.succeed(item)).toStrictEqual({...item,enhancement:20})
        });
    });

    describe('fail()',()=>{
        //first test
        it('item fail while bellow 15 enhancement, reduce durability by 5',()=>{
            let item = {
                name: 'Mace',
                durability: 14,
                enhancement: 13
            }
            expect(enhancer.fail(item)).toStrictEqual({...item, durability: 9});
        });
        //second test
        it('item fail while equal or above 15 enhancement and bellow 17, reduce durability by 10',()=>{
            let item = {
                name: 'Dragon Mace',
                durability: 18,
                enhancement: 15
            }
            expect(enhancer.fail(item)).toStrictEqual({...item, durability: 8})
        });
        //third test
        it('item fail while above 16 enhancement, reduce durability by 10 and enhancement by 1',()=>{
            let item = {
                name: 'Titan Mace',
                durability: 9,
                enhancement: 18
            }
            expect(enhancer.fail(item)).toStrictEqual({...item, enhancement: 17, durability: 0});
        });
    });

})