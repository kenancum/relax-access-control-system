import Door from '../components/Door';
import { RelaxSite } from '../components/RelaxSite';
import Zone from '../components/Zone';

test('door creation', () => {
    const site = new RelaxSite();
    const door = new Door(0, site.findZone("Outside"), site.findZone("Reception"));
    expect(door.destinationZone.name).toBe("Reception");
    expect(door.sourceZone.name).toBe("Outside");
});
