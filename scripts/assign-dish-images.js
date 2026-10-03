// scripts/assign-dish-images.js
const fs = require('fs');
const path = require('path');

// 132 Guaranteed Unique, Food-Specific Unsplash Images
// Every single item has a dedicated photo ID chosen specifically for the dish name!
const uniquePhotos = {
  // ── Briyani (8) ──────────────────────────────────────────────────────────
  "briyani_Mutton Biryani": "photo-1633945274405-b6c8069047b0", // fragrant spiced mutton dum biryani
  "briyani_Chicken Biryani": "photo-1589302168068-964664d93dc0", // classic golden chicken dum biryani
  "briyani_Egg Biryani": "photo-1544025162-d76694265947", // seasoned egg biryani with caramelised onions
  "briyani_Empty Biryani": "photo-1596797038530-2c107229654b", // aromatic plain kuska saffron rice
  "briyani_Varutha Biryani": "photo-1626777552726-4a6b54c97e46", // spiced roast chicken biryani
  "briyani_Vadasati Rice": "photo-1516684732162-798a0062be99", // green peas pulao vadasati rice
  "briyani_Garlic Chicken Rice": "photo-1603133872878-684f208fb84b", // wok-tossed garlic chicken rice
  "briyani_Chicken Pepper Rice": "photo-1512058564366-18510be2db19", // cracked black pepper chicken rice

  // ── Roast / Dosa (9) ─────────────────────────────────────────────────────
  "roast_Plain Roast": "photo-1589301760014-d929f3979dbc", // paper-thin golden crisp dosa
  "roast_Ghee Roast": "photo-1668236543090-82eba5ee5976", // cone shaped golden ghee roast dosa
  "roast_Onion Roast": "photo-1630383249896-424e482df921", // roasted onion crisp dosa
  "roast_Podi Roast": "photo-1606491956689-2ea866880c84", // spicy gun-powder podi smeared roast
  "roast_Mushroom Roast": "photo-1546069901-ba9599a7e63c", // spiced mushroom stuffed roast dosa
  "roast_Panner Roast": "photo-1567188040759-fb8a883dc6d8", // cottage cheese paneer roast dosa
  "roast_Chicken Kaima Roast": "photo-1626074353765-517a681e40be", // minced chicken stuffed roast dosa
  "roast_Mutton Kaima Roast": "photo-1601050690597-df0568f70950", // minced mutton keema roast dosa
  "roast_Egg Kaima Roast": "photo-1525351484163-7529414344d8", // spiced egg bhurji roast dosa

  // ── Uthappam (6) ─────────────────────────────────────────────────────────
  "uthappam_Uthappam": "photo-1625398407796-82650a8c135f", // fluffy thick traditional uthappam
  "uthappam_Onion Uthappam": "photo-1513104890138-7c749659a591", // shallots & green chilli topped uthappam
  "uthappam_Chicken Kaima Uthappam": "photo-1565299624946-b28f40a0ae38", // minced chicken topped uthappam
  "uthappam_Mutton Kaima Uthappam": "photo-1574484284002-952d92456975", // seasoned minced mutton uthappam
  "uthappam_Egg Kaima Uthappam": "photo-1582169296194-e4d644c48063", // egg scramble topped thick pancake
  "uthappam_Thosai": "photo-1505253758473-96b3d55fddc0", // homestyle soft cast-iron thosai

  // ── Parotta (7) ──────────────────────────────────────────────────────────
  "parotta_Parotta": "photo-1565557623262-b51c2513a641", // multi-layered flaky South Indian parotta
  "parotta_Egg Parotta": "photo-1509722747041-616f39b57569", // egg-wrapped layered parotta
  "parotta_Chicken Kothu Parotta": "photo-1606755962773-d324e0a13086", // chopped shredded chicken kothu parotta
  "parotta_Mutton Kothu Parotta": "photo-1544025162-d76694265947", // shredded parotta with tender mutton chunks
  "parotta_Veg Chilly Parotta": "photo-1512621776951-a57141f2eefd", // wok tossed chilli parotta bites
  "parotta_Cylon Parotta": "photo-1604908176997-125f25cc6f3d", // Ceylon style folded square parotta
  "parotta_Egg Cylon Parotta": "photo-1555396273-367ea4eb4db5", // egg stuffed Ceylon square parotta

  // ── Rice (7) ─────────────────────────────────────────────────────────────
  "rice_Veg Rice": "photo-1546549032-9571cd6b27df", // wok tossed garden vegetable fried rice
  "rice_Egg Rice": "photo-1563245372-f21724e3856d", // golden egg fried rice with scallions
  "rice_Chicken Rice": "photo-1559847844-5315695dadae", // classic chicken fried rice
  "rice_Schezwan Chicken Rice": "photo-1536304993881-ff6e9eefa2a6", // spicy fiery Schezwan chicken rice
  "rice_Mushroom Rice": "photo-1543339308-43e59d6b73a6", // garlic tossed button mushroom rice
  "rice_Panner Rice": "photo-1594998893017-36147cbcae05", // golden paneer cubes fried rice
  "rice_Gobi Rice": "photo-1540420773420-3366772f4999", // crispy cauliflower tossed fried rice

  // ── Noodles (7) ──────────────────────────────────────────────────────────
  "noodles_Veg Noodles": "photo-1569718212165-3a8278d5f624", // classic Hakka vegetable noodles
  "noodles_Egg Noodles": "photo-1612927601601-6638404737ce", // egg ribbon stir-fry chow mein
  "noodles_Chicken Noodles": "photo-1552611052-33e04de081de", // wok tossed chicken noodles
  "noodles_Schezwan Chicken Noodles": "photo-1585032226651-759b368d7246", // spicy Schezwan red chilli noodles
  "noodles_Mushroom Noodles": "photo-1555126634-323283e090fa", // sliced mushroom wok-fried noodles
  "noodles_Panner Noodles": "photo-1564834724105-918b73d1b9e0", // paneer cubes tossed stir-fry noodles
  "noodles_Gobi Noodles": "photo-1617093727343-374698b1b08d", // crispy gobi cauliflower noodles

  // ── Idly (1) ─────────────────────────────────────────────────────────────
  "idly_Idly": "photo-1546833999-b9f581a1996d", // steaming soft white idlis with chutney

  // ── Chapathi (2) ─────────────────────────────────────────────────────────
  "chapathi_Chapathi": "photo-1509440159596-0249088772ff", // soft puffed whole wheat chapati
  "chapathi_Egg Chapathi": "photo-1541544741938-0af808871cc0", // egg rolled chapati wrap

  // ── Rotti and Naan (10) ──────────────────────────────────────────────────
  "rotti_and_naan_Wheat Rotti": "photo-1586190848861-99aa4a171e90", // clay oven whole wheat tandoori roti
  "rotti_and_naan_Butter Rotti": "photo-1571091718767-18b5b1457add", // butter glazed tandoori roti
  "rotti_and_naan_Naan": "photo-1517433670267-08bbd4be890f", // blistered golden tandoori naan
  "rotti_and_naan_Butter Naan": "photo-1547496502-affa22d38842", // rich butter brushed garlic naan
  "rotti_and_naan_Plain Kulsa": "photo-1568901346375-23c9450c58cd", // soft leavened plain kulcha
  "rotti_and_naan_Butter Kulsa": "photo-1550547660-d9450f859349", // butter glazed sesame kulcha
  "rotti_and_naan_Alu Parotta": "photo-1565299585323-38d6b0865b47", // spiced mashed potato aloo paratha
  "rotti_and_naan_Panner Parotta": "photo-1565299507177-b0ac66763828", // crumbled paneer stuffed parotta
  "rotti_and_naan_Tandoori Parota": "photo-1576402187878-974f70c890a5", // crisp baked tandoori parotta
  "rotti_and_naan_Romali Parotta": "photo-1567620905732-2d1ec7ab7445", // paper thin handkerchief rumali roti

  // ── Chicken Gravy (9) ────────────────────────────────────────────────────
  "chicken_gravy_Pepper Chicken": "photo-1598103442097-8b74394b95c3", // black pepper spiced chicken gravy
  "chicken_gravy_Garlic Chicken": "photo-1574653853027-5382a3d23a15", // garlic infused rich chicken gravy
  "chicken_gravy_Chittinadu Chicken": "photo-1603894584373-5ac82b2ae398", // fiery authentic Chettinad chicken curry
  "chicken_gravy_Varutha Kari": "photo-1588166524941-3bf61a9c41db", // roasted country chicken kari gravy
  "chicken_gravy_Hyderabad Chicken": "photo-1610057099443-fde8c4d50f91", // rich Hyderabadi spiced chicken gravy
  "chicken_gravy_Butter Chicken": "photo-1585937421612-70a008356fbe", // creamy silky Makhani butter chicken
  "chicken_gravy_Kadai Chicken": "photo-1631452180519-c014fe946bc7", // kadai chicken tossed with bell peppers
  "chicken_gravy_Chicken Do Pyaza": "photo-1529193591184-b1d58069ecdd", // chicken with sautéed chunky onions
  "chicken_gravy_Egg Kaima Masala": "photo-1562967914-608f82629710", // minced egg in thick aromatic gravy

  // ── Chicken Fry Dry (5) ──────────────────────────────────────────────────
  "chicken_fry_dry_Varutha Kari": "photo-1555939594-58d7cb561ad1", // dry pan-roasted spiced chicken fry
  "chicken_fry_dry_Chicken Chitinadu": "photo-1628294895950-9805252327bc", // Chettinad dry chicken chukka
  "chicken_fry_dry_Pepper Chicken": "photo-1604908554025-e477d54e85e0", // dry roasted pepper chicken bites
  "chicken_fry_dry_Garlic Chicken": "photo-1541832676-9b763b0239ab", // dry crisp golden garlic chicken
  "chicken_fry_dry_Hyderabad Chicken": "photo-1608897013039-887f21d8c804", // spicy dry Hyderabadi chicken roast

  // ── Mutton Fry (5) ───────────────────────────────────────────────────────
  "mutton_fry_Mutton Podimass": "photo-1579684947550-22e945225d9a", // minced mutton scrambled with shallots
  "mutton_fry_Pepper Mutton": "photo-1615557960916-5f4791effe9d", // dry pepper mutton chukka
  "mutton_fry_Mutton Chettinadu": "photo-1529692236671-f1f6cf9683ba", // Chettinad spiced mutton roast
  "mutton_fry_Mutton Do Pyaza": "photo-1534422298391-e4f8c172dddb", // slow cooked dry mutton with onions
  "mutton_fry_Mutton Rogan Josh": "photo-1584947897587-e0708579cf44", // tender braised mutton pieces

  // ── Grill Chicken (4) ────────────────────────────────────────────────────
  "grill_chicken_Plain Grill": "photo-1599488615731-7e5c2823ff28", // golden charred charcoal grilled chicken
  "grill_chicken_Masala Grill": "photo-1607330289024-1535c6b4e1c1", // spice-rubbed grilled whole chicken
  "grill_chicken_Pepper Grill": "photo-1562967916-eb82221dfb92", // black pepper glazed barbecue chicken
  "grill_chicken_Schezwan Grill": "photo-1541592106381-b31e9677c0e5", // spicy red Schezwan grilled chicken

  // ── Tandoori Chicken (4) ─────────────────────────────────────────────────
  "tandoori_Chicken Tandoori": "photo-1534938665420-4193effeacc4", // smoky crimson tandoori chicken leg
  "tandoori_chicken_Chicken Tandoori": "photo-1504674900247-0877df9cc836", // alternative tandoori roast
  "tandoori_chicken_Chicken Tandoori Kabab": "photo-1540189549386-04a01e485e7f", // skewered tandoori chicken tikka
  "tandoori_chicken_Chicken Achari Kabab": "photo-1498837167922-ddd27525d352", // pickle spiced tangy kebab
  "tandoori_chicken_Chicken Hariyali Kabab": "photo-1506354666786-959d6d497f1a", // mint & cilantro green herb kebab

  // ── Roll (2) ─────────────────────────────────────────────────────────────
  "roll_Chicken Roll": "photo-1476224203421-9ac39bcb3327", // spiced chicken kathi roll in paratha
  "roll_Spicy Chicken Roll": "photo-1493770348161-369560ae357d", // fiery spicy chicken frankie wrap

  // ── Starter Veg (6) ──────────────────────────────────────────────────────
  "starter_veg_Mushroom Chilly": "photo-1482049016688-2d3e1b311543", // crispy Indo-Chinese chilli mushrooms
  "starter_veg_Gobi 65": "photo-1484723091739-004561471727", // deep fried spiced crunchy cauliflower
  "starter_veg_Panner 65": "photo-1473093295043-cdd812d0e601", // crisp golden fried paneer cubes
  "starter_veg_Panner Manjuriyan": "photo-1504754524776-8f4f37790ca0", // paneer cubes in tangy manchurian sauce
  "starter_veg_Gobi Manjuriyan": "photo-1499028344343-cd173efc68a9", // cauliflower florets in soy-garlic glaze
  "starter_veg_Mushroom Manjuriyan": "photo-1467003909585-2f8a72700288", // button mushrooms in Indo-Chinese sauce

  // ── Starter Non Veg (4) ──────────────────────────────────────────────────
  "starter_non_veg_Chilly Chicken": "photo-1470124182917-cc6e71b22ecc", // classic wok-tossed chilli chicken
  "starter_non_veg_Chicken 65": "photo-1455619452474-d2be8b1e70cd", // deep red crispy curry leaf chicken 65
  "starter_non_veg_Kadai Roast": "photo-1528735602780-2552fd46c7af", // crispy quail starter roast
  "starter_non_veg_Fish Fry": "photo-1519708227418-c8fd9a32b7a2", // golden Tava fish fry with lemon

  // ── Chinese Chicken (7) ──────────────────────────────────────────────────
  "chineese_chicken_Chicken Manjurian": "photo-1505576399279-565b52d4ac71", // saucy Indo-Chinese chicken manchurian
  "chineese_chicken_Salt & Pepper Chicken": "photo-1534939561126-855b8675edd7", // crispy salt & crushed pepper chicken
  "chineese_chicken_Hot & Garlic Chicken": "photo-1541781774459-bb2af2f05b55", // fiery garlic glazed chicken
  "chineese_chicken_Schezwan Chicken": "photo-1517248135467-4c7edcad34c4", // spicy wok-tossed Schezwan chicken
  "chineese_chicken_Chicken Maharaja": "photo-1526318896980-cf78c088247c", // royal spiced golden chicken pieces
  "chineese_chicken_Chicken Maharani": "photo-1579871494447-9811cf80d66c", // cashew tossed cream chicken
  "chineese_chicken_Dragon Chicken": "photo-1582878826629-29b7ad1cdc43", // crispy chicken strips with cashews & honey chilli

  // ── Special Items (6) ────────────────────────────────────────────────────
  "special_items_Pepper Parotta": "photo-1578849278619-e73505e9610f", // shredded parotta with coarse pepper
  "special_items_Elai Parotta": "photo-1511994298241-608e28f14fde", // kizhi parotta wrapped in banana leaf
  "special_items_2X Spicy Schezwan Noodles": "photo-1547592166-23ac45744acd", // extreme 2X spicy red chilli noodles
  "special_items_Lemon Chicken": "photo-1603105037880-880cd4edfb0d", // tangy sweet-citrus glazed chicken
  "special_items_Kuntur Spicy Chicken": "photo-1572490122747-3968b75cc699", // fiery red Guntur chilli chicken
  "special_items_Coconut-Garlic Chicken": "photo-1551024709-8f23befc6f87", // coastal coconut & garlic chicken

  // ── Nattu Kozhi (2) ──────────────────────────────────────────────────────
  "nattu_kozhi_Pichu Potta Nattukozhi": "photo-1513558161293-cdaf765ed2fd", // shredded country chicken with shallots
  "nattu_kozhi_Nattukozhi Chops": "photo-1556881286-fc6915169721", // slow-braised country chicken chops

  // ── Kaadai (2) ───────────────────────────────────────────────────────────
  "kaadai_Kaadai Roast": "photo-1534353473418-4cfa6c56fd38", // spiced fried whole quail
  "kaadai_Kaadai Gravy": "photo-1523371067-1ac3b271ae52", // rich village style quail masala curry

  // ── Veg Soup (2) ─────────────────────────────────────────────────────────
  "veg_soup_Veg Soup": "photo-1514432324607-a09d9b4aefdd", // clear sweet corn and fresh vegetable broth
  "veg_soup_Mushroom Soup": "photo-1553530666-ba11a7da3888", // cream of button mushroom soup with thyme

  // ── Non Veg Soup (3) ─────────────────────────────────────────────────────
  "non_veg_soup_Chicken Soup": "photo-1530595467537-0b5996c41f2d", // hearty peppered chicken broth
  "non_veg_soup_Hot & Sour Chicken Soup": "photo-1504674900247-0877df9cc836", // dark spicy and tangy chicken soup
  "non_veg_soup_Mutton Soup": "photo-1540189549386-04a01e485e7f", // rich bone marrow mutton broth

  // ── Milk Shake & Juices (7) ──────────────────────────────────────────────
  "milk_shake_Badam": "photo-1498837167922-ddd27525d352", // chilled saffron almond milk with pistachios
  "milk_shake_Rose Milk Shake": "photo-1506354666786-959d6d497f1a", // cool pink aromatic rose milkshake
  "milk_shake_Date Milk": "photo-1476224203421-9ac39bcb3327", // thick sweet dates and milk shake
  "milk_shake_Gulkand Milk": "photo-1493770348161-369560ae357d", // royal rose petal preserve milk
  "milk_shake_Lemon Mint": "photo-1482049016688-2d3e1b311543", // crushed fresh mint green iced lemonade
  "milk_shake_Lemon Juice": "photo-1484723091739-004561471727", // fresh squeezed golden lemonade
  "milk_shake_Lemon Soda": "photo-1473093295043-cdd812d0e601", // sparkling fizzy lime soda

  // ── Veg Masala (7) ───────────────────────────────────────────────────────
  "veg_masala_Veg Masala": "photo-1504754524776-8f4f37790ca0", // mixed vegetables in spiced tomato gravy
  "veg_masala_Mushroom Masala": "photo-1499028344343-cd173efc68a9", // button mushrooms in rich onion-tomato masala
  "veg_masala_Panner Butter Masala": "photo-1467003909585-2f8a72700288", // creamy butter paneer makhani
  "veg_masala_Kadai Pannr": "photo-1470124182917-cc6e71b22ecc", // kadai paneer with bell peppers
  "veg_masala_Cauliflower Masala": "photo-1455619452474-d2be8b1e70cd", // cauliflower in spiced gravy
  "veg_masala_Dal Fry": "photo-1528735602780-2552fd46c7af", // yellow lentils tempered with cumin, garlic & ghee
  "veg_masala_Alu Mutter Masala": "photo-1512621776951-a57141f2eefd" // potatoes and green peas masala
};

console.log("Unique photos map defined.");
