export type Discovery = {
  slug: string
  name: string
  region: string
  category: string
  summary: string
  image: string
}

export const discoveries: Discovery[] = [
  { slug:'cocoa-fine-cacao', name:'Cocoa & fine cacao', region:'Eastern Province', category:'Agriculture', summary:'A discovery page for Sierra Leonean cacao supply, story and value-add opportunities.', image:'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1600&q=85' },
  { slug:'natural-fibres', name:'Natural fibres', region:'Northern Province', category:'Materials', summary:'Explore local fibre traditions, makers, possible applications and responsible sourcing routes.', image:'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1600&q=85' },
  { slug:'palm-craftwork', name:'Palm-derived craftwork', region:'Southern Province', category:'Craft & culture', summary:'Community-made pieces and material stories presented for discovery, not mass-market commoditisation.', image:'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1600&q=85' },
  { slug:'coffee-highlands', name:'Highland coffee', region:'Eastern Province', category:'Agriculture', summary:'A sourcing story for specialty coffee opportunities and smallholder value addition.', image:'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=85' },
  { slug:'clay-ceramics', name:'Natural clay & ceramics', region:'Western Area', category:'Materials', summary:'Discover locally crafted ceramics, clay stories and small-batch design collaborations.', image:'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1600&q=85' },
  { slug:'spice-gardens', name:'Aromatic spice crops', region:'Northern Province', category:'Agriculture', summary:'Explore aromatic crops, producer stories and opportunities for responsible ingredient sourcing.', image:'https://images.unsplash.com/photo-1509351631168-9b7d2ef0a7c9?auto=format&fit=crop&w=1600&q=85' },
]

export const regions = [
  { slug:'eastern-province', name:'Eastern Province', note:'Forest, agriculture, mining and producer communities.' },
  { slug:'northern-province', name:'Northern Province', note:'Farms, fibres, makers and market towns.' },
  { slug:'southern-province', name:'Southern Province', note:'Coastal communities, crafts and agricultural value chains.' },
  { slug:'western-area', name:'Western Area', note:'Freetown, creative industries, logistics and services.' },
  { slug:'north-west-province', name:'North West Province', note:'Port-linked trade, agriculture and local enterprises.' },
]

export const categories = ['Agriculture','Materials','Craft & culture','Food ingredients','Services','Stories']
