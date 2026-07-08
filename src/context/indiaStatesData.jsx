

// COMPREHENSIVE DATASET (All 28 States & Major UTs with Fallback Architecture)
export const indiaStatesData = {
  AP: {
    id: 'AP',
    name: 'Andhra Pradesh',
    color: '#ccffcc',
    image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=800&q=80',
    description: 'A captivating coastal state renowned for its ancient dynasties, spectacular sculptured temples, rich handloom heritage, and the scenic Eastern Ghats.',
    path: 'M 235 390 L 265 380 L 285 435 L 235 470 Z',
    categories: {
      heritage: {
        name: 'Chandragiri Fort & Palace',
        image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=800&q=80',
        description: 'A fine example of Indo-Saracenic architecture of the Vijayanagara period near Tirupati.'
      },
      spiritual: {
        name: 'Tirumala Venkateswara Temple',
        image: 'https://images.unsplash.com/photo-1608958416715-99882a466185?auto=format&fit=crop&w=800&q=80',
        description: 'One of the world\'s most visited sacred places, dedicated to Lord Venkateswara on the Tirumala hills.'
      },
      nature: {
        name: 'Araku Valley',
        image: 'https://images.unsplash.com/photo-1628134771005-59ff6ecdb722?auto=format&fit=crop&w=800&q=80',
        description: 'A mist-covered hill station in the Eastern Ghats known for its rich coffee plantations and waterfalls.'
      },
      coastal: {
        name: 'Rishikonda Beach',
        image: 'https://images.unsplash.com/photo-1589997825227-2e11894d01b6?auto=format&fit=crop&w=800&q=80',
        description: 'A serene Blue Flag certified golden beach located on the coast of Visakhapatnam.'
      },
      wildlife: {
        name: 'Nagarjunsagar-Srisailam Tiger Reserve',
        image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=800&q=80',
        description: 'The largest tiger reserve in India, stretching across rugged landscapes and the Krishna River basin.'
      }
    }
  },
  AR: {
    id: 'AR',
    name: 'Arunachal Pradesh',
    color: '#ffcccc',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    description: 'The "Land of the Dawn-Lit Mountains", known for its pristine tribal cultures, untouched alpine wilderness, and legendary Buddhist monasteries.',
    path: 'M 460 150 L 485 145 L 470 185 L 445 180 Z',
    categories: {
      heritage: {
        name: 'Gekar Sinyik (Lake Palace Region)',
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
        description: 'Historical institutional sites near Itanagar surrounded by primitive landmasses.'
      },
      spiritual: {
        name: 'Tawang Monastery',
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
        description: 'The largest monastery in India, founded by Merak Lama Lodre Gyatso in the 17th century.'
      },
      nature: {
        name: 'Ziro Valley',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'A stunning high-altitude pine-clad plateau home to the unique Apatani tribe.'
      },
      coastal: { // Landlocked Fallback to River Systems
        name: 'Siang River Front (Pasighat)',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        description: 'The majestic Brahmaputra entry channel offering expansive white stone riverbeds.'
      },
      wildlife: {
        name: 'Namdapha National Park',
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80',
        description: 'A massive bio-diverse hotspot famous for harboring four distinct big cat species.'
      }
    }
  },
  AS: {
    id: 'AS',
    name: 'Assam',
    color: '#ccffff',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e42ec164?auto=format&fit=crop&w=800&q=80',
    description: 'Famed for its sprawling tea estates, the powerful Brahmaputra River, rich silk weaving mills, and critical biodiversity hotspots.',
    path: 'M 415 175 L 445 170 L 435 200 L 405 195 Z',
    categories: {
      heritage: {
        name: 'Talatal Ghar (Ahom Raja Palace)',
        image: 'https://images.unsplash.com/photo-1600100397608-f010e42ec164?auto=format&fit=crop&w=800&q=80',
        description: 'An 18th-century multi-storied military palace built by the Ahom kings in Sivasagar.'
      },
      spiritual: {
        name: 'Kamakhya Temple',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a456673?auto=format&fit=crop&w=800&q=80',
        description: 'An ancient, powerful Shakti Peeth shrine dedicated to Goddess Kamakhya atop Nilachal Hill.'
      },
      nature: {
        name: 'Majuli Island',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        description: 'The world\'s largest inhabited river island, acting as the hub of Assamese Neo-Vaishnavite culture.'
      },
      coastal: { // Fallback to Brahmaputra River Banks
        name: 'Brahmaputra River Island Beaches',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'Expansive golden seasonal sand banks that appear along the massive Brahmaputra Riverbed.'
      },
      wildlife: {
        name: 'Kaziranga National Park',
        image: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=80',
        description: 'A sanctuary hosting two-thirds of the world\'s entire population of great Indian one-horned rhinoceroses.'
      }
    }
  },
  BR: {
    id: 'BR',
    name: 'Bihar',
    color: '#ffccff',
    image: 'https://images.unsplash.com/photo-1622322370136-1e646271c7b3?auto=format&fit=crop&w=800&q=80',
    description: 'A cornerstone of ancient Indian history and the spiritual birthplace of Buddhism and Jainism.',
    path: 'M 325 190 L 360 200 L 355 235 L 320 230 Z',
    categories: {
      heritage: {
        name: 'Navlakha Palace (Rajnagar)',
        image: 'https://images.unsplash.com/photo-1622322370136-1e646271c7b3?auto=format&fit=crop&w=800&q=80',
        description: 'A stunning ruined palace complex known for its intricate architectural brickwork in Madhubani.'
      },
      spiritual: {
        name: 'Mahabodhi Temple (Bodhgaya)',
        image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=800&q=80',
        description: 'The holy UNESCO World Heritage site marking the exact location where Buddha attained enlightenment.'
      },
      nature: {
        name: 'Barabar Caves & Hills',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        description: 'The oldest surviving rock-cut structural caves in India, dating back to the Mauryan Empire.'
      },
      coastal: { // Landlocked Fallback to Ganga Ghats
        name: 'Gandak & Ganga Confluence (Sonepur)',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a456673?auto=format&fit=crop&w=800&q=80',
        description: 'Wide, historic river ghats hosting mega traditional gatherings along the sacred riverbeds.'
      },
      wildlife: {
        name: 'Valmiki Tiger Reserve',
        image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=800&q=80',
        description: 'Nestled directly along the Himalayan foothills, providing dense forest cover for royal tigers.'
      }
    }
  },
  CT: {
    id: 'CT',
    name: 'Chhattisgarh',
    color: '#ffffcc',
    image: 'https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&w=800&q=80',
    description: 'An eco-tourism paradise rich in magnificent waterfalls, pristine tribal arts, ancient caves, and heavily forested plateaus.',
    path: 'M 275 285 L 305 295 L 295 335 L 265 320 Z',
    categories: {
      heritage: {
        name: 'Bastar Palace (Jagdalpur)',
        image: 'https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&w=800&q=80',
        description: 'The historical seat of the Kakatiya rulers, featuring beautiful art and inscriptions.'
      },
      spiritual: {
        name: 'Bhoramdeo Temple',
        image: 'https://images.unsplash.com/photo-1609137144813-979401925b42?auto=format&fit=crop&w=800&q=80',
        description: 'An architectural complex dedicated to Lord Shiva, fondly called the Khajuraho of Chhattisgarh.'
      },
      nature: {
        name: 'Chitrakote Waterfalls',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'The widest waterfall gap in India, frequently referred to as the majestic Niagara of India.'
      },
      coastal: { // Fallback to River Beds
        name: 'Mahanadi River Front Ghats',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'Serene sand ecosystems along the wide channels of the life-giving Mahanadi.'
      },
      wildlife: {
        name: 'Indravati National Park',
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80',
        description: 'A premier green habitat sheltering some of the last surviving populations of rare Wild Asian Buffaloes.'
      }
    }
  },
  GA: {
    id: 'GA',
    name: 'Goa',
    color: '#e6ccb3',
    image: 'https://images.unsplash.com/photo-1512494089866-f85a21ea13e1?auto=format&fit=crop&w=800&q=80',
    description: 'A sunny pocket of paradise blending Indo-Portuguese culture, world-famous golden coastlines, and ancient churches.',
    path: 'M 150 390 L 165 390 L 165 405 L 150 405 Z',
    categories: {
      heritage: {
        name: 'Idalcao Palace',
        image: 'https://images.unsplash.com/photo-1512494089866-f85a21ea13e1?auto=format&fit=crop&w=800&q=80',
        description: 'The oldest surviving palace in Panaji, built originally by Adil Shah of Bijapur.'
      },
      spiritual: {
        name: 'Basilica of Bom Jesus',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        description: 'A famous landmark holding the mortal remains of St. Francis Xavier, rich with Baroque architectural details.'
      },
      nature: {
        name: 'Dudhsagar Waterfalls',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        description: 'A spectacular four-tiered cascading waterfall structure looking like a sea of white milk.'
      },
      coastal: {
        name: 'Palolem & Anjuna Beach',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'World-famous crescent coastlines lined with scenic swaying coconut trees and rocky headlands.'
      },
      wildlife: {
        name: 'Bhagwan Mahavir Wildlife Sanctuary',
        image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=800&q=80',
        description: 'A dense forest pocket along the Western Ghats home to leopards and diverse avian species.'
      }
    }
  },
  GJ: {
    id: 'GJ',
    name: 'Gujarat',
    color: '#e6ccb3',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
    description: 'A vibrant state characterized by its vast white salt deserts, monumental palaces, sacred stepwells, and rich textile history.',
    path: 'M 70 240 L 120 230 L 135 285 L 85 300 Z',
    categories: {
      heritage: {
        name: 'Laxmi Vilas Palace',
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
        description: 'An extravagant Indo-Saracenic palace in Vadodara, four times the size of Buckingham Palace.'
      },
      spiritual: {
        name: 'Somnath Temple & Dwarkadhish',
        image: 'https://images.unsplash.com/photo-1608958416715-99882a466185?auto=format&fit=crop&w=800&q=80',
        description: 'Sacred coastal shrines exhibiting incredible stone masonry and deep historical reverence.'
      },
      nature: {
        name: 'Great Rann of Kutch',
        image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=800&q=80',
        description: 'The world\'s largest seasonal salt marsh desert, sparkling stark white under moonlight.'
      },
      coastal: {
        name: 'Mandvi Beach Front',
        image: 'https://images.unsplash.com/photo-1589997825227-2e11894d01b6?auto=format&fit=crop&w=800&q=80',
        description: 'A pristine, tranquil coastline featuring clean sand shores and structural vintage windmills.'
      },
      wildlife: {
        name: 'Gir National Park',
        image: 'https://images.unsplash.com/photo-1615959189282-b3dc9af120c9?auto=format&fit=crop&w=800&q=80',
        description: 'The exclusive and last remaining wild sanctuary home for the endangered Asiatic Lions.'
      }
    }
  },
  HR: {
    id: 'HR',
    name: 'Haryana',
    color: '#ffe6cc',
    image: 'https://images.unsplash.com/photo-1545229765-7ff6feee35f2?auto=format&fit=crop&w=800&q=80',
    description: 'A prosperous agricultural state deeply rooted in epic Vedic mythology and vibrant rustic charm.',
    path: 'M 170 155 L 190 150 L 185 170 L 165 165 Z',
    categories: {
      heritage: {
        name: 'Pataudi Palace',
        image: 'https://images.unsplash.com/photo-1545229765-7ff6feee35f2?auto=format&fit=crop&w=800&q=80',
        description: 'Also known as Ibrahim Kothi, a grand white colonial mansion belonging to the Pataudi Nawabs.'
      },
      spiritual: {
        name: 'Jyotisar (Kurukshetra)',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a456673?auto=format&fit=crop&w=800&q=80',
        description: 'The holy birthplace of the Bhagavad Gita, marked beautifully by a sacred ancient Banyan tree.'
      },
      nature: {
        name: 'Morni Hills',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'The singular scenic hill station point in Haryana, known for flora-rich trekking trails.'
      },
      coastal: { // Landlocked Fallback to Lakes
        name: 'Sukhna Lake & Karna Lake Front',
        image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
        description: 'Man-made lake reservoirs flanked by landscaped pathways and pleasant boating zones.'
      },
      wildlife: {
        name: 'Sultanpur National Park',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80',
        description: 'A crucial bird sanctuary oasis hosting hundreds of migratory avian species every winter.'
      }
    }
  },
  HP: {
    id: 'HP',
    name: 'Himachal Pradesh',
    color: '#d9f2d9',
    path: 'M 175 115 L 195 120 L 185 145 L 165 135 Z',
    categories: {
      heritage: {
        name: 'Padam Palace (Rampur)',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'A magnificent royal wooden palace showcasing traditional woodwork and architecture.'
      },
      spiritual: {
        name: 'Hadimba Temple (Manali)',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        description: 'A unique pagoda-style wooden shrine hidden deep within towering deodar woods.'
      },
      nature: {
        name: 'Rohtang Pass & Spiti Valley',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        description: 'High mountain passes providing dramatic panoramas of snowy peaks and cold desert wastes.'
      },
      coastal: { // Mountain Fallback to Alpine Lakes
        name: 'Chandra Taal (Moon Lake)',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'A high-altitude mystical crescent water basin surrounded by towering snow-capped ridges.'
      },
      wildlife: {
        name: 'Great Himalayan National Park',
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80',
        description: 'A UNESCO protection site sheltering elusive snow leopards and colorful Himalayan monals.'
      }
    }
  },
  JH: {
    id: 'JH',
    name: 'Jharkhand',
    color: '#ffe6f2',
    path: 'M 320 240 L 360 240 L 350 275 L 315 265 Z',
    categories: {
      heritage: {
        name: 'Ratu Palace',
        image: 'https://images.unsplash.com/photo-1627894220716-e591bc171d37?auto=format&fit=crop&w=800&q=80',
        description: 'The grand residential palace of the Maharaja of Chota Nagpur located near Ranchi.'
      },
      spiritual: {
        name: 'Baidyanath Dham (Deoghar)',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a456673?auto=format&fit=crop&w=800&q=80',
        description: 'One of the twelve revered Jyotirlinga shrines, attracting millions during Shravan.'
      },
      nature: {
        name: 'Hundru & Jonha Waterfalls',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'Breathtaking water cascades drops breaking across the rocky Chota Nagpur Plateau.'
      },
      coastal: { // Fallback to Lake Reservoirs
        name: 'Maithon Dam & Dimna Lake',
        image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
        description: 'Expansive water reservoirs with clean shorelines and green island hillocks.'
      },
      wildlife: {
        name: 'Betla National Park',
        image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=800&q=80',
        description: 'An ancient reserve ecosystem containing wild elephants, sloth bears, and thick sal woods.'
      }
    }
  },
  KA: {
    id: 'KA',
    name: 'Karnataka',
    color: '#99ccff',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    description: 'A tech-forward hub interwoven with medieval ruins, grand illuminated palaces, and rich wilderness tracts.',
    path: 'M 200 390 L 240 380 L 260 445 L 205 470 Z',
    categories: {
      heritage: {
        name: 'Mysore Palace (Amba Vilas)',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'One of Indias most famous, jaw-dropping Indo-Saracenic royal palaces.'
      },
      spiritual: {
        name: 'Virupaksha Temple (Hampi)',
        image: 'https://images.unsplash.com/photo-1600100397608-f010e42ec164?auto=format&fit=crop&w=800&q=80',
        description: 'A legendary UNESCO site operating since the 7th century amid Hampi\'s boulder ruins.'
      },
      nature: {
        name: 'Coorg (Kodagu) Hills',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'The coffee country of India, thick with misty hills, cloud tracks, and waterfalls.'
      },
      coastal: {
        name: 'Gokarna Om Beach',
        image: 'https://images.unsplash.com/photo-1512494089866-f85a21ea13e1?auto=format&fit=crop&w=800&q=80',
        description: 'A naturally shaped "Om" coastal shoreline bordered by rocky mountain heads.'
      },
      wildlife: {
        name: 'Nagarhole & Kabini Reserve',
        image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=800&q=80',
        description: 'Rich wildlife territory housing Asiatic elephants, panthers, and dense bamboo woods.'
      }
    }
  },
  KL: {
    id: 'KL',
    name: 'Kerala',
    color: '#ffe6b3',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    description: '"God\'s Own Country", celebrated for its tranquil backwaters, therapeutic Ayurveda, vibrant Kathakali dance, and green hill gaps.',
    path: 'M 195 495 L 215 485 L 225 520 L 205 520 Z',
    categories: {
      heritage: {
        name: 'Padmanabhapuram Palace',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
        description: 'An incredible 16th-century wooden palace displaying exquisite traditional Kerala architectural style.'
      },
      spiritual: {
        name: 'Sree Padmanabhaswamy Temple',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        description: 'An architectural marvel featuring Dravidian styles and immensely rich historical vaults.'
      },
      nature: {
        name: 'Munnar Tea Valleys',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        description: 'Lush rolling green hills carpeted with high-altitude commercial tea plantations.'
      },
      coastal: {
        name: 'Varkala Cliff Beach',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'Unique coastal beach backed by dramatic, vertical red laterite cliffs and geysers.'
      },
      wildlife: {
        name: 'Periyar Tiger Reserve',
        image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=800&q=80',
        description: 'An emerald lake sanctuary setting home to herds of wild elephants and tigers.'
      }
    }
  },
  MP: {
    id: 'MP',
    name: 'Madhya Pradesh',
    color: '#e6ecb3',
    image: 'https://images.unsplash.com/photo-1566838217578-1903568a76d9?auto=format&fit=crop&w=800&q=80',
    description: 'The "Heart of India", guarding historic fortresses, breathtaking temple structures, and dense jungle corridors.',
    path: 'M 220 225 L 290 225 L 295 285 L 225 285 Z',
    categories: {
      heritage: {
        name: 'Jai Vilas Mahal (Gwalior)',
        image: 'https://images.unsplash.com/photo-1566838217578-1903568a76d9?auto=format&fit=crop&w=800&q=80',
        description: 'A grand nineteenth-century Italianate palace featuring the world\'s largest chandeliers.'
      },
      spiritual: {
        name: 'Khajuraho Temples',
        image: 'https://images.unsplash.com/photo-1627894220716-e591bc171d37?auto=format&fit=crop&w=800&q=80',
        description: 'UNESCO heritage temples celebrated globally for their complex Nagara style artistic carvings.'
      },
      nature: {
        name: 'Pachmarhi Plateau',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'The queen of Satpura, offering ancient sandstone caves, ridges, and deep ravines.'
      },
      coastal: { // Fallback to River Ghats
        name: 'Narmada River Ghats (Maheshwar)',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a456673?auto=format&fit=crop&w=800&q=80',
        description: 'Massive, elegant stone stairs meeting the clean river current below fort ramparts.'
      },
      wildlife: {
        name: 'Kanha National Park',
        image: 'https://images.unsplash.com/photo-1615959189282-b3dc9af120c9?auto=format&fit=crop&w=800&q=80',
        description: 'Vast sal forests boasting thriving populations of Royal Bengal Tigers.'
      }
    }
  },
  MH: {
    id: 'MH',
    name: 'Maharashtra',
    color: '#fff0b3',
    image: 'https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&w=800&q=80',
    description: 'A powerhouse state holding monumental rock-cut cave architectures, misty Western Ghat ridges, and a dramatic coastline.',
    path: 'M 150 305 L 215 295 L 235 355 L 175 380 Z',
    categories: {
      heritage: {
        name: 'Aga Khan Palace (Pune)',
        image: 'https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&w=800&q=80',
        description: 'An Italian-arched palace holding immense historical significance in Indias freedom struggle.'
      },
      spiritual: {
        name: 'Kailash Temple (Ellora)',
        image: 'https://images.unsplash.com/photo-1609137144813-979401925b42?auto=format&fit=crop&w=800&q=80',
        description: 'A breathtaking monument carved entirely out of a single mountain cliff from top to bottom.'
      },
      nature: {
        name: 'Mahabaleshwar & Sahyadri Peaks',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'High volcanic plateaus marked by deep mist-filled canyons and seasonal waterfalls.'
      },
      coastal: {
        name: 'Kashid & Alibaug Shorelines',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'Stretching white sands facing medieval sea fortresses anchored directly offshore.'
      },
      wildlife: {
        name: 'Tadoba Andhari Tiger Reserve',
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80',
        description: 'Maharashtra\'s largest wildlife haven, providing ideal bamboo dry-deciduous tiger tracks.'
      }
    }
  },
  MN: {
    id: 'MN',
    name: 'Manipur',
    color: '#e6ffcc',
    path: 'M 430 205 L 455 205 L 445 230 L 425 230 Z',
    categories: {
      heritage: {
        name: 'Kangla Palace',
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
        description: 'The ancient fortified seat of power for the Meitei rulers in Imphal.'
      },
      spiritual: {
        name: 'Shree Govindajee Temple',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a456673?auto=format&fit=crop&w=800&q=80',
        description: 'A historic golden twin-domed temple acting as a core hub for classical Manipuri dance.'
      },
      nature: {
        name: 'Loktak Lake (Floating Islands)',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        description: 'The largest freshwater lake in Northeast India, famed for its floating organic mass circles.'
      },
      coastal: { // Fallback to Lake Shores
        name: 'Loktak Waterfront Dunes',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'Scenic land tracks bordering the unique wetland eco-systems of Manipur.'
      },
      wildlife: {
        name: 'Keibul Lamjao National Park',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80',
        description: 'The world\'s only floating national sanctuary, home to the rare brow-antlered Sangai deer.'
      }
    }
  },
  ML: {
    id: 'ML',
    name: 'Meghalaya',
    color: '#ffe6cc',
    path: 'M 390 200 L 420 200 L 410 220 L 380 210 Z',
    categories: {
      heritage: {
        name: 'Nartiang Royal Palace',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        description: 'Historical ruins of the Jaintia Kings operational grounds in the hills.'
      },
      spiritual: {
        name: 'Nartiang Durga Temple',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a456673?auto=format&fit=crop&w=800&q=80',
        description: 'A 500-year-old structural temple link representing ancient Shakta traditions in the hills.'
      },
      nature: {
        name: 'Living Root Bridges',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'Bio-engineered root suspension systems grown across deep jungle torrent channels.'
      },
      coastal: { // Fallback to Crystal Rivers
        name: 'Umngot River Beach (Dawki)',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'Pristine pebble-lined sand channels along a river so transparent that boats seem to float on air.'
      },
      wildlife: {
        name: 'Nokrek Biosphere Reserve',
        image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=800&q=80',
        description: 'A dense evergreen rainforest sheltering rare Red Pandas and wild citrus varieties.'
      }
    }
  },
  MZ: {
    id: 'MZ',
    name: 'Mizoram',
    color: '#ffccff',
    path: 'M 420 230 L 440 230 L 430 260 L 410 250 Z',
    categories: {
      heritage: {
        name: 'Laldenga Palace Complex',
        image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80',
        description: 'A prominent historic landmark administrative zone located in Aizawl.'
      },
      spiritual: {
        name: 'Solomon\'s Temple (Aizawl)',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        description: 'A grand architectural white marble church complex built by the Kohhran Thianghlim sect.'
      },
      nature: {
        name: 'Vantawng Falls',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        description: 'Incredible high-altitude cascade drops nestled in dense green bamboo ranges.'
      },
      coastal: { // Fallback to Mountain Lakes
        name: 'Tam Dil Lake Front',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'A beautiful natural lake mirror enclosed by thick green hill forests.'
      },
      wildlife: {
        name: 'Dampa Tiger Reserve',
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80',
        description: 'Mizoram\'s largest wildlife forest boundary safeguarding clouded leopards.'
      }
    }
  },
  NL: {
    id: 'NL',
    name: 'Nagaland',
    color: '#ccffff',
    path: 'M 440 190 L 460 180 L 450 210 L 430 210 Z',
    categories: {
      heritage: {
        name: 'Kachari Ruined Palace',
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
        description: 'Famous ancient monolithic stone pillars and royal structures at Dimapur.'
      },
      spiritual: {
        name: 'Kohima Cathedral Church',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        description: 'An architectural structural masterpiece blend on the slopes of Aradura Hill.'
      },
      nature: {
        name: 'Dzukou Valley',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'A breathtaking expanse of emerald rolling hills widely famous for its rare seasonal lilies.'
      },
      coastal: { // Fallback to Riverbanks
        name: 'Doyang River Banks',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'Sweeping scenic views where millions of migrating Amur Falcons roost seasonally.'
      },
      wildlife: {
        name: 'Intanki National Park',
        image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=800&q=80',
        description: 'An equatorial rainforest home to Hoolock Gibbons, elephants, and tigers.'
      }
    }
  },
  OD: {
    id: 'OD',
    name: 'Odisha',
    color: '#d9f2e6',
    path: 'M 305 285 L 345 280 L 330 320 L 295 310 Z',
    categories: {
      heritage: {
        name: 'Gajapati Palace (Paralakhemundi)',
        image: 'https://images.unsplash.com/photo-1545229765-7ff6feee35f2?auto=format&fit=crop&w=800&q=80',
        description: 'The artistic royal residence of the Gajapati dynasty rulers in southern Odisha.'
      },
      spiritual: {
        name: 'Konark Sun Temple',
        image: 'https://images.unsplash.com/photo-1608958416715-99882a466185?auto=format&fit=crop&w=800&q=80',
        description: 'The grand chariot stone marvel alongside the supreme spiritual heart of coastal Odisha.'
      },
      nature: {
        name: 'Chilika Lake',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        description: 'Asia\'s largest brackish water lagoon, famous for island birds and Irrawaddy dolphins.'
      },
      coastal: {
        name: 'Puri Golden Beach',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'A beautiful Blue Flag certified beach renowned for sand art displays.'
      },
      wildlife: {
        name: 'Simlipal National Park',
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80',
        description: 'A massive biosphere containing majestic elephant paths and unique melanistic tigers.'
      }
    }
  },
  PB: {
    id: 'PB',
    name: 'Punjab',
    color: '#ffcccc',
    path: 'M 150 125 L 175 130 L 170 150 L 148 145 Z',
    categories: {
      heritage: {
        name: 'Qila Mubarak (Patiala)',
        image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80',
        description: 'A massive historic palace fort showcasing the architectural styles of Sikh rulers.'
      },
      spiritual: {
        name: 'The Golden Temple',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        description: 'The iconic gilded spiritual sanctuary of Sikhism glistening over a holy pool.'
      },
      nature: { // Fallback to Rivers
        name: 'Beas River Wetlands',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        description: 'Scenic fertile plains carved by the ancient historical flows of the Beas River.'
      },
      coastal: { // Fallback to Chandigarh Lakes
        name: 'Sukhna Lake Front',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'A scenic man-made waterfront providing excellent promenades.'
      },
      wildlife: {
        name: 'Harike Wetland',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80',
        description: 'One of the largest wetlands in Northern India, hosting rich winter migratory birds.'
      }
    }
  },
  RJ: {
    id: 'RJ',
    name: 'Rajasthan',
    color: '#ffb366',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    description: 'The storied "Land of Kings", defined by sprawling desert dunes, colossal hill-forts, and highly intricate marble palaces.',
    path: 'M 95 160 L 170 145 L 195 215 L 120 260 Z',
    categories: {
      heritage: {
        name: 'Umaid Bhawan Palace (Jodhpur)',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        description: 'One of the world\'s largest private residences, crafted with golden sandstone.'
      },
      spiritual: {
        name: 'Dilwara Jain Temples',
        image: 'https://images.unsplash.com/photo-1608958416715-99882a466185?auto=format&fit=crop&w=800&q=80',
        description: 'Fabulous 11th-century shrines in Mount Abu carved entirely out of pure, intricate white marble.'
      },
      nature: {
        name: 'Thar Desert Sand Dunes',
        image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=800&q=80',
        description: 'Iconic undulating waves of golden desert sand near historic Jaisalmer.'
      },
      coastal: { // Fallback to Lake Palaces
        name: 'Pichola Lake Front (Udaipur)',
        image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
        description: 'A stunning aquatic mirror surface holding magnificent floating marble palaces.'
      },
      wildlife: {
        name: 'Ranthambore National Park',
        image: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=80',
        description: 'A world-famous sanctuary where wild tigers roam past old fortress ruins.'
      }
    }
  },
  SK: {
    id: 'SK',
    name: 'Sikkim',
    color: '#ffffcc',
    path: 'M 350 175 L 365 175 L 360 195 L 345 195 Z',
    categories: {
      heritage: {
        name: 'Tsuklakhang Royal Palace',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        description: 'The primary coronation palace chapel of the Chogyal kings in Gangtok.'
      },
      spiritual: {
        name: 'Rumtek Monastery',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        description: 'A grand architectural shrine structure acting as a pillar center for Tibetan Buddhist teachings.'
      },
      nature: {
        name: 'Tsomgo Lake',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'High-altitude glacial valleys reflecting the soaring snowy peaks of the Himalayas.'
      },
      coastal: { // Fallback to High Lakes
        name: 'Gurudongmar High Lake',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'One of the highest alpine lakes in the world, sacred and clear as crystal.'
      },
      wildlife: {
        name: 'Khangchendzonga Park',
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80',
        description: 'A UNESCO Biosphere world site sheltering red pandas, musk deer, and snow leopards.'
      }
    }
  },
  TN: {
    id: 'TN',
    name: 'Tamil Nadu',
    color: '#ffccff',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    description: 'A cultural bastion possessing thousands of massive stone-sculpted Dravidian temples and deeply rooted classical arts.',
    path: 'M 240 475 L 265 455 L 285 510 L 245 520 Z',
    categories: {
      heritage: {
        name: 'Tirumalai Nayakkar Mahal',
        image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
        description: 'A classic 17th-century palace in Madurai famous for its massive majestic pillars.'
      },
      spiritual: {
        name: 'Meenakshi Amman Temple',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a456673?auto=format&fit=crop&w=800&q=80',
        description: 'A massive architectural masterpiece featuring 14 magnificent colorful gopuram towers.'
      },
      nature: {
        name: 'Ooty & Nilgiri Hills',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        description: 'Swaying blue mountain ridges packed with eucalyptus woodlands and old tea gardens.'
      },
      coastal: {
        name: 'Marina Beach & Mahabalipuram',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'India\'s longest urban sand stretch meeting historic rock-cut temple shorelines.'
      },
      wildlife: {
        name: 'Mudumalai Tiger Reserve',
        image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=800&q=80',
        description: 'An integral wildlife corridor linking the Western and Eastern Ghats elephant bands.'
      }
    }
  },
  TG: {
    id: 'TG',
    name: 'Telangana',
    color: '#ffe6cc',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=800&q=80',
    description: 'A historic territory featuring powerful Islamic fort architecture, rich culinary layers, and deep heritage arts.',
    path: 'M 215 350 L 255 340 L 265 385 L 225 395 Z',
    categories: {
      heritage: {
        name: 'Chowmahalla Palace',
        image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=800&q=80',
        description: 'The opulent official seat and grand palace of the Nizams of Hyderabad.'
      },
      spiritual: {
        name: 'Ramappa Temple',
        image: 'https://images.unsplash.com/photo-1608958416715-99882a466185?auto=format&fit=crop&w=800&q=80',
        description: 'A UNESCO world heritage Kakatiya marvel featuring unique floating brick roofs.'
      },
      nature: {
        name: 'Ananthagiri Hills',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'Densely forested hill ranges generating the primary flow channel of the Musi River.'
      },
      coastal: { // Fallback to Lakes
        name: 'Hussain Sagar Promenade',
        image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
        description: 'A beautiful urban lake featuring a massive monolithic Buddha statue in the center.'
      },
      wildlife: {
        name: 'Eturnagaram Sanctuary',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80',
        description: 'One of the oldest forest reserves in Telangana, split cleanly by the Godavari water path.'
      }
    }
  },
  TR: {
    id: 'TR',
    name: 'Tripura',
    color: '#ccffff',
    path: 'M 400 230 L 415 230 L 405 250 L 392 245 Z',
    categories: {
      heritage: {
        name: 'Ujjayanta Palace',
        image: 'https://images.unsplash.com/photo-1600100397608-f010e42ec164?auto=format&fit=crop&w=800&q=80',
        description: 'A magnificent white marble palace in Agartala, now serving as a state museum.'
      },
      spiritual: {
        name: 'Tripura Sundari Temple',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a456673?auto=format&fit=crop&w=800&q=80',
        description: 'A historic 500-year-old structural Shakti Peeth shrine shaped like a tortoise shell.'
      },
      nature: {
        name: 'Unakoti Rock Carvings',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        description: 'A mystical hill site showcasing massive historical stone relief faces of Lord Shiva.'
      },
      coastal: { // Fallback to Water Palaces
        name: 'Neermahal Lake Palace',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'A spectacular water palace situated directly in the middle of Rudrasagar Lake.'
      },
      wildlife: {
        name: 'Sepahijala Sanctuary',
        image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=800&q=80',
        description: 'A bio-rich territory hosting a high concentration of unique Phayre\'s leaf monkeys.'
      }
    }
  },
  UP: {
    id: 'UP',
    name: 'Uttar Pradesh',
    color: '#cc99cc',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    description: 'A grand northern plain holding immense spiritual river ghats, soaring Islamic architecture, and critical historical empires.',
    path: 'M 235 170 L 300 185 L 285 240 L 225 215 Z',
    categories: {
      heritage: {
        name: 'Bara Imambara Palace',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        description: 'A monumental palace complex in Lucknow featuring the legendary Bhool Bhulaiya maze.'
      },
      spiritual: {
        name: 'Varanasi Ganga Ghats',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a456673?auto=format&fit=crop&w=800&q=80',
        description: 'The ancient spiritual heart of India lined with historic brick and stone river stairs.'
      },
      nature: {
        name: 'Vindhyachal Ranges',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        description: 'Low-lying forested hill ridges dotted with seasonal lookouts and cascade drops.'
      },
      coastal: { // Fallback to River Confluences
        name: 'Triveni Sangam (Prayagraj)',
        image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
        description: 'The magnificent holy confluence point of the Ganges and Yamuna rivers.'
      },
      wildlife: {
        name: 'Dudhwa National Park',
        image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=800&q=80',
        description: 'Terai marshy alluvial grasslands protecting wild tigers and swamp deer herds.'
      }
    }
  },
  UK: {
    id: 'UK',
    name: 'Uttarakhand',
    color: '#d9f2d9',
    path: 'M 200 145 L 220 150 L 210 170 L 190 160 Z',
    categories: {
      heritage: {
        name: 'Kasmanda Palace (Mussoorie)',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        description: 'An elegant heritage palace built during the British Raj era in the hills.'
      },
      spiritual: {
        name: 'Kedarnath Temple',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        description: 'Majestic high-altitude Himalayan stone temples holding immense spiritual gravity.'
      },
      nature: {
        name: 'Valley of Flowers',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'A UNESCO Alpine meadow exploding with hundreds of species of wild flowers.'
      },
      coastal: { // Fallback to Lakes
        name: 'Naini Lake Front',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'An eye-shaped mountain lake mirror nestled in the heart of Nainital.'
      },
      wildlife: {
        name: 'Jim Corbett National Park',
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80',
        description: 'India\'s oldest national park, establishing an unmatched legacy for tiger tracking.'
      }
    }
  },
  WB: {
    id: 'WB',
    name: 'West Bengal',
    color: '#ffeb99',
    image: 'https://images.unsplash.com/photo-1545229765-7ff6feee35f2?auto=format&fit=crop&w=800&q=80',
    description: 'A rich territory blending colonial architecture, Himalayan peaks, and sprawling marshy mangrove deltas.',
    path: 'M 360 255 L 395 255 L 385 310 L 350 280 Z',
    categories: {
      heritage: {
        name: 'Cooch Behar Palace',
        image: 'https://images.unsplash.com/photo-1545229765-7ff6feee35f2?auto=format&fit=crop&w=800&q=80',
        description: 'An elegant structure modeled directly after Buckingham Palace in London.'
      },
      spiritual: {
        name: 'Dakshineswar Kali Temple',
        image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=800&q=80',
        description: 'A classic 19th-century Navaratna-style shrine resting over the Hooghly river banks.'
      },
      nature: {
        name: 'Darjeeling Himalayan Ridges',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        description: 'High tea-plantation slopes presenting world-class views of Mount Kangchenjunga.'
      },
      coastal: {
        name: 'Digha Beach Front',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'A wide, shallow flat beach lined with beautiful casuarina tree stands.'
      },
      wildlife: {
        name: 'Sundarbans Mangrove Forest',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80',
        description: 'The world\'s largest delta mangrove grid, home to swimming Royal Bengal Tigers.'
      }
    }
  },
  JK: {
    id: 'JK',
    name: 'Jammu & Kashmir',
    color: '#e6ffcc',
    image: 'https://images.unsplash.com/photo-1566838217578-1903568a76d9?auto=format&fit=crop&w=800&q=80',
    description: 'Breathtaking paradise landscapes filled with pristine pine meadows, high holy shrines, and floating houseboats.',
    path: 'M 135 75 L 165 85 L 155 120 L 130 110 Z',
    categories: {
      heritage: {
        name: 'Amar Mahal Palace',
        image: 'https://images.unsplash.com/photo-1566838217578-1903568a76d9?auto=format&fit=crop&w=800&q=80',
        description: 'A beautiful French chateau-style palace overlooking the Tawi River in Jammu.'
      },
      spiritual: {
        name: 'Vaishno Devi Temple',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        description: 'A highly sacred hill cave shrine nestled inside the Trikuta Mountains.'
      },
      nature: {
        name: 'Gulmarg Meadows',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'Breathtaking verdant pine valleys that transform into premium snow ski fields.'
      },
      coastal: { // Fallback to Lakes
        name: 'Dal Lake Houseboats',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'The jewel waters of Srinagar, flanked by grand historical Mughal pleasure gardens.'
      },
      wildlife: {
        name: 'Dachigam National Park',
        image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=800&q=80',
        description: 'The premier home sanctuary safeguarding the critically endangered Hangul (Kashmir Stag).'
      }
    }
  },
  LA: {
    id: 'LA',
    name: 'Ladakh',
    color: '#e6f2ff',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    description: 'A stark, high-altitude cold desert world layered with turquoise alpine lake boundaries and grand Buddhist fortresses.',
    path: 'M 145 80 L 190 85 L 180 115 L 150 105 Z',
    categories: {
      heritage: {
        name: 'Leh Palace',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'A historic nine-story Tibetan-style palace overlooking the mountain town of Leh.'
      },
      spiritual: {
        name: 'Thiksey Monastery',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        description: 'A majestic twelve-story white gompa complex resembling Lhasa\'s Potala Palace.'
      },
      nature: {
        name: 'Pangong Tso Lake',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        description: 'An iconic high-altitude saline lake changing brilliant colors from blue to green.'
      },
      coastal: { // Fallback to Lake Shores
        name: 'Tso Moriri Lake Shore',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'A tranquil blue saltwater wetland edge trapped beneath giant ice fields.'
      },
      wildlife: {
        name: 'Hemis National Park',
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80',
        description: 'The global capital sanctuary for watching the elusive wild Snow Leopards.'
      }
    }
  },
  DL: {
    id: 'DL',
    name: 'Delhi',
    color: '#ffcccc',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80',
    description: 'The historic capital city of India where political strongholds, historic tomb empires, and modern design converge.',
    path: 'M 180 170 L 185 170 L 185 175 L 180 175 Z',
    categories: {
      heritage: {
        name: 'Rashtrapati Bhavan',
        image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80',
        description: 'The monumental 340-room presidential residence, a masterpiece of architectural history.'
      },
      spiritual: {
        name: 'Akshardham Temple',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        description: 'Incredible modern feats of master stone crafting and universal prayer spaces.'
      },
      nature: { // Fallback to Tombs & Parks
        name: 'Lodi Gardens',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        description: 'A sprawling city park showcasing old Sayyid and Lodhi dynasty architectural tombs.'
      },
      coastal: { // Fallback to Rivers
        name: 'Yamuna Ghat Overlooks',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'Historic landing steps attracting flocks of winter seagulls along the river banks.'
      },
      wildlife: {
        name: 'Asola Bhatti Sanctuary',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80',
        description: 'A protected ridge corridor sheltering leopards, jackals, and native thorny scrub forests.'
      }
    }
  }
};

// INTERACTIVE COMPONENT IMPLEMENTATION
