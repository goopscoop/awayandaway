import daImg from '../../img/da-600.jpg';

const SET_CURRENTLY_SELECTED_BOOK = 'SET_CURRENTLY_SELECTED_BOOK';
const OPEN_PREVIEW= 'OPEN_PREVIEW';
const CLOSE_PREVIEW = 'CLOSE_PREVIEW';
const EXPAND_PREVIEW = 'EXPAND_PREVIEW';
const RETRACT_PREVIEW = 'RETRACT_PREVIEW';

export function openPreview(){
  return {
    type: OPEN_PREVIEW
  }
}

export function closePreview(){
  return {
    type: CLOSE_PREVIEW
  }
}

export function expandPreview(){
  return {
    type: EXPAND_PREVIEW
  }
}

export function setCurrentlySelected(i){
  return {
    type: SET_CURRENTLY_SELECTED_BOOK,
    i
  }
}

export function retractPreview(){
  return {
    type: RETRACT_PREVIEW
  }
}

const initialState = {
  currentlySelected: 0,
  isPreviewOpen: false,
  isPreviewEpanded: false,
  books: [{
      title: 'Discovering Aberration',
      types: ['novel', 'ebook', 'print'],
      genre: ['adventure', 'satire', 'mystery'],
      pages: 100,
      shortDesc: 'An ancient map stolen. A lost civilization discovered. A terrible secret unleashed.',
      longDesc: `<p>Thaddeus Lumpen's archaeology career is near collapse, thanks to the machinations of rivals who would kill to claim a discovery for themselves. In desperation he turns to Freddy Fitzgerald, a rebellious writer who still maintains connections from his days as a street hooligan. For Lumpen to get ahead of his even less scrupulous competitors he must steal an ancient map and forge a path to an island where a lost civilization waits to be found. For Freddy, it's a chance to sell the story of a lifetime.</p>
  <p>But nothing is as simple as it appears from halfway across the world. Old acquaintances become enemies, professional rivalries turn violent, and a notorious gang lord wants his map back. The island itself holds dangers that Freddy and Lumpen couldn't have prepared to face--and horrifying secrets that might be better left buried. Beset by wild beasts, cutthroat competitors, and dangers darker still, the two men fight not for glory, but their own survival... before the island pushes them past the brink of insanity.</p>`,
      quote: 'test',
      quoteBy: 'test person',
      img: daImg,
      buyUrl: 'http://www.amazon.com/Discovering-Aberration-Steampunk-Adventure-Novel-ebook/dp/B00IIGG32M/',
      cta: 'An Island of Madness'
    },
    {
      title: 'Discovering Aberration2',
      types: ['novel', 'ebook', 'print'],
      genre: ['horror'],
      pages: 100,
      shortDesc: 'An ancient map stolen. A lost civilization discovered. A terrible secret unleashed.',
      longDesc: `<p>Thaddeus Lumpen's archaeology career is near collapse, thanks to the machinations of rivals who would kill to claim a discovery for themselves. In desperation he turns to Freddy Fitzgerald, a rebellious writer who still maintains connections from his days as a street hooligan. For Lumpen to get ahead of his even less scrupulous competitors he must steal an ancient map and forge a path to an island where a lost civilization waits to be found. For Freddy, it's a chance to sell the story of a lifetime.</p>
  <p>But nothing is as simple as it appears from halfway across the world. Old acquaintances become enemies, professional rivalries turn violent, and a notorious gang lord wants his map back. The island itself holds dangers that Freddy and Lumpen couldn't have prepared to face--and horrifying secrets that might be better left buried. Beset by wild beasts, cutthroat competitors, and dangers darker still, the two men fight not for glory, but their own survival... before the island pushes them past the brink of insanity.</p>`,
      img: daImg,
      buyUrl: 'http://www.amazon.com/Discovering-Aberration-Steampunk-Adventure-Novel-ebook/dp/B00IIGG32M/',
      cta: 'Adventure Awaits'
    },
    {
      title: 'Discovering Aberration3',
      types: ['novel', 'ebook', 'print'],
      pages: 100,
      genre: ['adventure', 'satire', 'mystery'],
      shortDesc: 'An ancient map stolen. A lost civilization discovered. A terrible secret unleashed.',
      longDesc: `<p>Thaddeus Lumpen's archaeology career is near collapse, thanks to the machinations of rivals who would kill to claim a discovery for themselves. In desperation he turns to Freddy Fitzgerald, a rebellious writer who still maintains connections from his days as a street hooligan. For Lumpen to get ahead of his even less scrupulous competitors he must steal an ancient map and forge a path to an island where a lost civilization waits to be found. For Freddy, it's a chance to sell the story of a lifetime.</p>
  <p>But nothing is as simple as it appears from halfway across the world. Old acquaintances become enemies, professional rivalries turn violent, and a notorious gang lord wants his map back. The island itself holds dangers that Freddy and Lumpen couldn't have prepared to face--and horrifying secrets that might be better left buried. Beset by wild beasts, cutthroat competitors, and dangers darker still, the two men fight not for glory, but their own survival... before the island pushes them past the brink of insanity.</p>`,
      img: daImg,
      buyUrl: 'http://www.amazon.com/Discovering-Aberration-Steampunk-Adventure-Novel-ebook/dp/B00IIGG32M/',
      cta: 'Adventure Awaits'
    },
    {
      title: 'Discovering Aberration4',
      types: ['novel', 'ebook', 'print'],
      pages: 100,
      genre: ['adventure', 'satire', 'mystery'],
      shortDesc: 'An ancient map stolen. A lost civilization discovered. A terrible secret unleashed.',
      longDesc: `<p>Thaddeus Lumpen's archaeology career is near collapse, thanks to the machinations of rivals who would kill to claim a discovery for themselves. In desperation he turns to Freddy Fitzgerald, a rebellious writer who still maintains connections from his days as a street hooligan. For Lumpen to get ahead of his even less scrupulous competitors he must steal an ancient map and forge a path to an island where a lost civilization waits to be found. For Freddy, it's a chance to sell the story of a lifetime.</p>
  <p>But nothing is as simple as it appears from halfway across the world. Old acquaintances become enemies, professional rivalries turn violent, and a notorious gang lord wants his map back. The island itself holds dangers that Freddy and Lumpen couldn't have prepared to face--and horrifying secrets that might be better left buried. Beset by wild beasts, cutthroat competitors, and dangers darker still, the two men fight not for glory, but their own survival... before the island pushes them past the brink of insanity.</p>`,
      quote: 'test',
      quoteBy: 'test person',
      img: daImg,
      buyUrl: 'http://www.amazon.com/Discovering-Aberration-Steampunk-Adventure-Novel-ebook/dp/B00IIGG32M/',
      cta: 'An Island of Madness'
    },
    {
      title: 'Discovering Aberration',
      types: ['novel', 'ebook', 'print'],
      pages: 100,
      genre: ['adventure', 'satire', 'mystery'],
      shortDesc: 'An ancient map stolen. A lost civilization discovered. A terrible secret unleashed.',
      longDesc: `<p>Thaddeus Lumpen's archaeology career is near collapse, thanks to the machinations of rivals who would kill to claim a discovery for themselves. In desperation he turns to Freddy Fitzgerald, a rebellious writer who still maintains connections from his days as a street hooligan. For Lumpen to get ahead of his even less scrupulous competitors he must steal an ancient map and forge a path to an island where a lost civilization waits to be found. For Freddy, it's a chance to sell the story of a lifetime.</p>
  <p>But nothing is as simple as it appears from halfway across the world. Old acquaintances become enemies, professional rivalries turn violent, and a notorious gang lord wants his map back. The island itself holds dangers that Freddy and Lumpen couldn't have prepared to face--and horrifying secrets that might be better left buried. Beset by wild beasts, cutthroat competitors, and dangers darker still, the two men fight not for glory, but their own survival... before the island pushes them past the brink of insanity.</p>`,
      img: daImg,
      buyUrl: 'http://www.amazon.com/Discovering-Aberration-Steampunk-Adventure-Novel-ebook/dp/B00IIGG32M/',
      cta: 'Adventure Awaits'
    },
    {
      title: 'Discovering Aberration',
      types: ['novel', 'ebook', 'print'],
      pages: 100,
      genre: ['adventure', 'satire', 'mystery'],
      shortDesc: 'An ancient map stolen. A lost civilization discovered. A terrible secret unleashed.',
      longDesc: `<p>Thaddeus Lumpen's archaeology career is near collapse, thanks to the machinations of rivals who would kill to claim a discovery for themselves. In desperation he turns to Freddy Fitzgerald, a rebellious writer who still maintains connections from his days as a street hooligan. For Lumpen to get ahead of his even less scrupulous competitors he must steal an ancient map and forge a path to an island where a lost civilization waits to be found. For Freddy, it's a chance to sell the story of a lifetime.</p>
  <p>But nothing is as simple as it appears from halfway across the world. Old acquaintances become enemies, professional rivalries turn violent, and a notorious gang lord wants his map back. The island itself holds dangers that Freddy and Lumpen couldn't have prepared to face--and horrifying secrets that might be better left buried. Beset by wild beasts, cutthroat competitors, and dangers darker still, the two men fight not for glory, but their own survival... before the island pushes them past the brink of insanity.</p>`,
      img: daImg,
      buyUrl: 'http://www.amazon.com/Discovering-Aberration-Steampunk-Adventure-Novel-ebook/dp/B00IIGG32M/',
      cta: 'Adventure Awaits'
    }]
};

export default function reducer(state = initialState, action){
  switch (action.type){
  case SET_CURRENTLY_SELECTED_BOOK:
    return Object.assign({},
      state,
      {
        currentlySelected: action.i
      });
  case OPEN_PREVIEW:
    return Object.assign({},
      state,
      {
        isPreviewOpen: true
      });
  case CLOSE_PREVIEW:
    return Object.assign({},
      state,
      {
        isPreviewOpen: false,
        isPreviewEpanded: false,
      });
  case EXPAND_PREVIEW:
    return Object.assign({},
      state,
      {
        isPreviewEpanded: true
      });
  case RETRACT_PREVIEW:
    return Object.assign({},
      state,
      {
        isPreviewEpanded: false
      });
  default:
    return state;
  }
}