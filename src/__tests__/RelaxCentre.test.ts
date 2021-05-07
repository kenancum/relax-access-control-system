import LoyaltyCard from '../components/cards/LoyaltyCard';
import  RelaxCentre  from '../components/RelaxCentre';
import { RelaxSite } from '../components/RelaxSite';


const relaxSite = new RelaxSite();

test('find zone', () => {        
    expect(relaxSite.findZone("Outside").name).toBe("Outside");
});


test('is card initial created in reception',()=>{
    
    const loyalMember = new LoyaltyCard("Kenan",5,10,"Poznan");

    relaxSite.addCard(loyalMember);

    const cardId = loyalMember.cardId!;

    expect(relaxSite.findCard(cardId).name).toBe("Reception");
});

test('example relax centre', ()=>{
    relaxSite.exampleCentre();
    
    expect(relaxSite.findZone("Pool").capacity).toBe(10);
})