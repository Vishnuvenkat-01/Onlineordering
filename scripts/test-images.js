// scripts/test-images.js
const fs = require('fs');

const candidatePhotos = [
  // Biryani & Rice
  'photo-1589302168068-964664d93dc0',
  'photo-1633945274405-b6c8069047b0',
  'photo-1563379091339-03246963d651', // test
  'photo-1544025162-d76694265947',
  'photo-1626777552726-4a6b54c97e46',
  'photo-1596797038530-2c107229654b',
  'photo-1603133872878-684f208fb84b',
  'photo-1512058564366-18510be2db19',
  'photo-1516684732162-798a0062be99',
  'photo-1546549032-9571cd6b27df',
  'photo-1563245372-f21724e3856d',
  'photo-1559847844-5315695dadae',
  'photo-1536304993881-ff6e9eefa2a6',
  'photo-1543339308-43e59d6b73a6',
  'photo-1594998893017-36147cbcae05',
  
  // Dosa, Roast, Uthappam
  'photo-1589301760014-d929f3979dbc',
  'photo-1668236543090-82eba5ee5976',
  'photo-1630383249896-424e482df921',
  'photo-1606491956689-2ea866880c84',
  'photo-1625398407796-82650a8c135f',
  'photo-1513104890138-7c749659a591',
  'photo-1565299624946-b28f40a0ae38',
  'photo-1574484284002-952d92456975',
  'photo-1582169296194-e4d644c48063',
  'photo-1505253758473-96b3d55fddc0',
  'photo-1546069901-ba9599a7e63c',
  'photo-1567188040759-fb8a883dc6d8',
  'photo-1626074353765-517a681e40be',
  'photo-1601050690597-df0568f70950',
  'photo-1525351484163-7529414344d8',

  // Parotta, Roti, Naan
  'photo-1565557623262-b51c2513a641',
  'photo-1509722747041-616f39b57569',
  'photo-1606755962773-d324e0a13086',
  'photo-1512621776951-a57141f2eefd',
  'photo-1604908176997-125f25cc6f3d',
  'photo-1555396273-367ea4eb4db5',
  'photo-1509440159596-0249088772ff',
  'photo-1541544741938-0af808871cc0',
  'photo-1586190848861-99aa4a171e90',
  'photo-1571091718767-18b5b1457add',

  // Noodles
  'photo-1569718212165-3a8278d5f624',
  'photo-1612927601601-6638404737ce',
  'photo-1552611052-33e04de081de',
  'photo-1585032226651-759b368d7246',
  'photo-1555126634-323283e090fa',
  'photo-1564834724105-918b73d1b9e0',
  'photo-1617093727343-374698b1b08d',
  'photo-1540420773420-3366772f4999',
  'photo-1526318896980-cf78c088247c',
  'photo-1579871494447-9811cf80d66c',

  // Chicken Gravy, Fry & Meat
  'photo-1598103442097-8b74394b95c3',
  'photo-1574653853027-5382a3d23a15',
  'photo-1603894584373-5ac82b2ae398',
  'photo-1588166524941-3bf61a9c41db',
  'photo-1610057099443-fde8c4d50f91',
  'photo-1599488615731-7e5c2823ff28',
  'photo-1529193591184-b1d58069ecdd',
  'photo-1562967914-608f82629710',
  'photo-1555939594-58d7cb561ad1',
  'photo-1544025162-d76694265947',
  'photo-1628294895950-9805252327bc',
  'photo-1604908554025-e477d54e85e0',
  'photo-1541832676-9b763b0239ab',
  'photo-1608897013039-887f21d8c804',
  'photo-1579684947550-22e945225d9a',
  'photo-1615557960916-5f4791effe9d',
  'photo-1529692236671-f1f6cf9683ba',
  'photo-1534422298391-e4f8c172dddb',
  'photo-1584947897587-e0708579cf44',
  'photo-1607330289024-1535c6b4e1c1',

  // Starters, Chinese & Specials
  'photo-1562967916-eb82221dfb92',
  'photo-1565557623262-b51c2513a641',
  'photo-1541592106381-b31e9677c0e5',
  'photo-1534938665420-4193effeacc4',
  'photo-1504674900247-0877df9cc836',
  'photo-1540189549386-04a01e485e7f',
  'photo-1498837167922-ddd27525d352',
  'photo-1506354666786-959d6d497f1a',
  'photo-1476224203421-9ac39bcb3327',
  'photo-1493770348161-369560ae357d',
  'photo-1482049016688-2d3e1b311543',
  'photo-1484723091739-004561471727',
  'photo-1512621776951-a57141f2eefd',
  'photo-1473093295043-cdd812d0e601',
  'photo-1504754524776-8f4f37790ca0',
  'photo-1499028344343-cd173efc68a9',
  'photo-1467003909585-2f8a72700288',
  'photo-1470124182917-cc6e71b22ecc',
  'photo-1455619452474-d2be8b1e70cd',
  'photo-1528735602780-2552fd46c7af',

  // Soups
  'photo-1547592166-23ac45744acd',
  'photo-1603105037880-880cd4edfb0d',
  'photo-1582878826629-29b7ad1cdc43',
  'photo-1578849278619-e73505e9610f',
  'photo-1511994298241-608e28f14fde',
  'photo-1541832676-9b763b0239ab',

  // Shakes & Drinks
  'photo-1572490122747-3968b75cc699',
  'photo-1551024709-8f23befc6f87',
  'photo-1513558161293-cdaf765ed2fd',
  'photo-1556881286-fc6915169721',
  'photo-1534353473418-4cfa6c56fd38',
  'photo-1523371067-1ac3b271ae52',
  'photo-1514432324607-a09d9b4aefdd',
  'photo-1553530666-ba11a7da3888',
  'photo-1530595467537-0b5996c41f2d',

  // Veg Gravies / Masalas
  'photo-1631452180519-c014fe946bc7',
  'photo-1546833999-b9f581a1996d',
  'photo-1626074353765-517a681e40be',
  'photo-1585937421612-70a008356fbe',
  'photo-1601050690597-df0568f70950',
  'photo-1626777552726-4a6b54c97e46',
  'photo-1574484284002-952d92456975',
  'photo-1546069901-ba9599a7e63c'
];

async function checkAll() {
  console.log(`Checking ${candidatePhotos.length} candidate photos...`);
  const results = await Promise.all(
    candidatePhotos.map(async (id) => {
      try {
        const res = await fetch(`https://images.unsplash.com/${id}?w=100`, { method: 'HEAD' });
        return { id, ok: res.status === 200 };
      } catch (e) {
        return { id, ok: false };
      }
    })
  );
  const valid = results.filter((r) => r.ok).map((r) => r.id);
  console.log(`Valid: ${valid.length} / ${candidatePhotos.length}`);
  fs.writeFileSync('valid_photos.json', JSON.stringify(valid, null, 2));
}

checkAll();
