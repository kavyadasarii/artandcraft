(function () {
  'use strict';

  /* ============================================================
     BLOG POSTS DATA — 7 posts, each with rich multi-block content
  ============================================================ */
  var POSTS = {

    /* ── 1. WATERCOLOR BEGINNERS ─────────────────────────────── */
    'watercolor-beginners': {
      category: 'Painting', readTime: '8 min read',
      title: 'Watercolor for Absolute Beginners: 5 Mistakes to Avoid',
      excerpt: 'From overworking your paper to buying the wrong brush first — the small fixes that make your first few paintings look far less frustrating and a lot more intentional.',
      author: 'Maya Rao, Studio Lead', date: 'Jul 18, 2026',
      cover: 'https://images.pexels.com/photos/6925029/pexels-photo-6925029.jpeg?auto=compress&cs=tinysrgb&w=1400',
      coverCaption: 'Watercolour palette and brushes at ArtCraft Studio — Hyderabad',
      introQuote: 'Watercolour punishes impatience and rewards observation. The moment you learn to wait for the paint, everything changes.',
      tags: ['Watercolor', 'Painting', 'Beginner', 'Brushes', 'Paper', 'Technique'],
      likes: 38,
      related: ['colored-pencils', 'store-art-supplies', 'sketching-basics'],
      stats: [
        { value: '5', label: 'Common Mistakes' },
        { value: '8 min', label: 'Read Time' },
        { value: '200+', label: 'Students Helped' },
        { value: '3', label: 'Brush Types' }
      ],
      gallery: [
        { src: 'https://images.pexels.com/photos/1153895/pexels-photo-1153895.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Wet-on-wet watercolour blooms' },
        { src: 'https://images.pexels.com/photos/3817572/pexels-photo-3817572.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Brushes and water jars at the studio' },
        { src: 'https://images.pexels.com/photos/6925383/pexels-photo-6925383.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Colour mixing on a porcelain palette' }
      ],
      keyTakeaways: [
        'Never go back into wet paint — wait until it is completely dry before adding another layer.',
        'Use at least 200 gsm cold-press paper; anything thinner will buckle and ruin your wash.',
        'Keep your brush loaded with water — watercolour should flow like skim milk, not toothpaste.',
        'Limit your palette to 6 colours to begin with. You can mix anything from a small, well-chosen set.',
        'Paint backgrounds first, details last — the opposite of instinct for most beginners.'
      ],
      sections: [
        {
          id: 's1', heading: 'Mistake 1 — Overworking Wet Paint',
          body: 'The number one error beginners make with watercolour is returning to a wash that is still wet. The moment your brush touches wet pigment a second time, the fibres disturb the pigment particles that are already settling into the paper, producing a permanent cloudy bloom that no amount of dabbing can fix. This is called "backrun" or "blooming" — and while experienced painters sometimes use it deliberately for texture, for a beginner it looks like a mistake because it is one.',
          body2: 'The solution is deceptively simple: set a timer. Two minutes of real patience is all the average wash needs before it is safe to revisit. In the studio we joke that a good watercolourist is really just someone who has learned to make a cup of tea at the right moment. Use a hairdryer on its low-heat setting to speed drying between layers, but keep it moving — holding it in one place creates its own kind of bloom.',
          tip: 'Work on two paintings simultaneously. While one dries you paint on the other. You will produce twice the work and ruin half as much.',
          tallImg: { src: 'https://images.pexels.com/photos/1153895/pexels-photo-1153895.jpeg?auto=compress&cs=tinysrgb&w=1400', caption: 'Wet-on-wet watercolour wash drying naturally — patience is the technique' }
        },
        {
          id: 's2', heading: 'Mistake 2 — Using the Wrong Paper',
          body: 'Standard printer paper buckles at the first wash. Sketch-pad paper is only marginally better — it is too smooth, absorbs water unevenly, and pills when you try to lift colour. For watercolour you need cold-press paper at a minimum of 200 gsm, and ideally 300 gsm if you plan to use wet-on-wet techniques. Cold-press has a slight tooth that holds pigment without being so rough it destroys your brushwork.',
          body2: 'Hot-press paper is smoother and gives crisp, fine details — ideal for botanical illustration. Rough press is heavily textured and catches pigment on the peaks of the surface, creating a granulated, atmospheric look. For your first sessions, cold-press 300 gsm is the right choice: it is forgiving enough to absorb re-working and textured enough to produce interesting results without effort.',
          tip: 'Stretch your paper before painting. Soak a sheet for two minutes, drain it, tape all four edges to a board with gummed tape, and let it dry flat. It will not buckle at all, even under heavy washes.',
          dualImg: [
            { src: 'https://images.pexels.com/photos/6814528/pexels-photo-6814528.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Cold-press 300 gsm — the beginner standard' },
            { src: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Hot-press paper — smooth surface for fine detail' }
          ],
          facts: [
            { icon: 'fa-solid fa-weight-hanging', text: 'Min. 200 gsm for watercolour' },
            { icon: 'fa-solid fa-droplet', text: 'Soak & stretch for zero buckling' },
            { icon: 'fa-solid fa-border-top-left', text: 'Cold-press texture recommended' }
          ]
        },
        {
          id: 's3', heading: 'Mistake 3 — Too Little Water on the Brush',
          body: 'Watercolour without water is just coloured powder stuck to a brush. The paint needs to be fluid enough to flow freely and spread into the paper fibres rather than sitting on top. Beginners often work with a near-dry brush because they are afraid of the paint spreading too far — but controlling a loaded brush is a skill, and the only way to develop it is to load the brush properly first.',
          body2: 'Test your mixture on a scrap piece of paper before committing to your main sheet. The paint should flow off the brush in a controlled stream when you tip the brush slightly. If it drips instantly, add a little more pigment. If it barely moves, add more water. The correct consistency depends on the effect you want — granulating washes need more water, glazing layers need less.',
          warn: 'Never leave your brushes resting in the water jar between strokes. The bristles bend permanently against the bottom of the jar within minutes. Rest them flat or tip-up in a brush holder.',
          inlineImg: { src: 'https://images.pexels.com/photos/3817572/pexels-photo-3817572.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Brushes and water jars set up for watercolour painting' }
        },
        {
          id: 's4', heading: 'Mistake 4 — Buying One Brush for Everything',
          body: 'Many beginners buy a single medium-round brush and expect it to handle every task from sweeping sky washes to painting fine leaf veins. It cannot do both well. You need at minimum three brushes: a large round or mop for background washes, a round size 8 for most mid-detail work, and a small round (size 2 or 4) for fine lines and highlights. These three brushes will serve you for your first year of painting.',
          body2: 'Brush quality matters more than brand. Look for brushes that come to a clean point when wet, hold their shape after multiple strokes, and spring back after bending. Natural hair brushes (kolinsky sable being the gold standard) hold more water and release it more evenly than synthetic alternatives, but good quality synthetic brushes have improved dramatically and are a better choice for beginners who are still learning how to clean and care for their tools.',
          steps: [
            'Round mop size 12–14 — broad washes, sky and water backgrounds',
            'Round size 8 — the workhorse; 80% of your painting happens here',
            'Round size 2–4 — fine lines, leaf veins, eye details, signatures',
            'Flat 1-inch hake — seamless graduated washes, large backgrounds',
            'Rigger / liner — single unbroken lines, rigging, calligraphy'
          ],
          tip: 'Always wash brushes in clean water with a small drop of brush soap after every session. Pigment left in the ferrule will eventually splay the bristles permanently.'
        },
        {
          id: 's5', heading: 'Mistake 5 — Ignoring Value Before Colour',
          body: 'Colour is seductive and beginners dive into mixing before they understand value — the relative lightness and darkness of different areas of a painting. Value, not colour, is what makes a painting feel three-dimensional and lit. You can paint a luminous, convincing scene using only one colour if your values are correct. Conversely, even the most beautiful palette cannot save a painting with flat, undifferentiated values.',
          body2: 'Before you start any watercolour painting, do a pencil or ink value sketch first. This is called a thumbnail and it takes five minutes. Assign three values: light (the paper), mid-tone, and dark. Plan where each one will go before you open a single paint tube. Your painting will be dramatically more successful as a result — not because the technique changed, but because the decision-making happened before the paint hit the paper.',
          pullQuote: '"Colour gets the credit. Value does the work."',
          pullQuoteCite: '— Maya Rao, ArtCraft Studio Lead'
        }
      ],
      supplies: [
        { emoji: '🖌️', name: 'Winsor & Newton Cotman', note: 'Student grade, excellent pigment for beginners' },
        { emoji: '📄', name: 'Fabriano Artistico 300gsm', note: 'Cold-press, best value for beginners' },
        { emoji: '🎨', name: 'Daniel Smith Essentials', note: 'Professional pigments, small set of 6' },
        { emoji: '💧', name: 'Porcelain mixing palette', note: 'Stays cleaner than plastic, colour true' },
        { emoji: '🖊️', name: 'Masking fluid + old brush', note: 'Reserves white areas before painting' },
        { emoji: '📐', name: 'Gummed tape + board', note: 'For stretching paper before painting' }
      ]
    },

    /* ── 2. COLORED PENCILS ──────────────────────────────────── */
    'colored-pencils': {
      category: 'Drawing', readTime: '6 min read',
      title: 'Choosing Your First Set of Colored Pencils',
      excerpt: 'Wax-based or oil-based? Tin of 12 or tin of 36? Professional or student grade? Here is everything that actually matters when you are buying your first set.',
      author: 'Arjun Mehta, Drawing Specialist', date: 'Jul 12, 2026',
      cover: 'https://images.pexels.com/photos/6952402/pexels-photo-6952402.jpeg?auto=compress&cs=tinysrgb&w=1400',
      coverCaption: 'Coloured pencil display at ArtCraft Supply Studio — Hyderabad',
      introQuote: 'The best coloured pencil is the one that does not break when you apply pressure — and the second best is one that blends smoothly with its neighbours.',
      tags: ['Coloured Pencils', 'Drawing', 'Beginner', 'Tools', 'Blending', 'Wax', 'Oil'],
      likes: 27,
      related: ['sketching-basics', 'store-art-supplies', 'watercolor-beginners'],
      stats: [
        { value: '2', label: 'Core Types' },
        { value: '36', label: 'Recommended Set' },
        { value: '5', label: 'Top Brands Tested' },
        { value: '6 min', label: 'Read Time' }
      ],
      gallery: [
        { src: 'https://images.pexels.com/photos/5065876/pexels-photo-5065876.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Organised tin of coloured pencils' },
        { src: 'https://images.pexels.com/photos/6952402/pexels-photo-6952402.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Full range spread for colour comparison' },
        { src: 'https://images.pexels.com/photos/7125353/pexels-photo-7125353.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Layering technique on smooth Bristol paper' }
      ],
      keyTakeaways: [
        'Start with wax-based pencils — they are softer, easier to blend, and widely available.',
        'A set of 36 gives enough colour range for most subjects without being overwhelming.',
        'Match pencil type to paper: soft wax on smooth Bristol, harder oil-based on textured paper.',
        'Store pencils horizontally — dropping them cracks the core even when the casing looks intact.',
        'Always sharpen slowly with a helical sharpener to protect the soft wax core from snapping.'
      ],
      sections: [
        {
          id: 's1', heading: 'Wax-Based vs. Oil-Based: The Core Difference',
          body: 'Every coloured pencil core is held together by a binder — either a wax compound or an oil compound. Wax-based pencils (Prismacolor Premier, Faber-Castell Polychromos\'s softer cousins, Derwent Studio) have a creamy, buttery feel. They blend easily by layering and burnishing, produce rich saturated colour quickly, and are the first choice of most portrait and still-life artists. The downside: heavy wax bloom — a white haze that appears on the surface of heavily worked areas over time. It wipes off easily but can be annoying if you are not expecting it.',
          body2: 'Oil-based pencils (Faber-Castell Polychromos, Lyra Rembrandt) have a harder, drier core that holds a point longer, making them ideal for intricate detail work, architectural drawing, and fine botanicals. They do not bloom, they layer cleanly without muddying, and they are more lightfast. The trade-off is that they require more layers to build colour saturation and are slightly harder to blend without a blending pencil or solvent.',
          tip: 'Use a colourless blending pencil (available from Prismacolor and Faber-Castell) to blend wax pencils without muddying the colours. It is essentially a clear wax crayon.',
          dualImg: [
            { src: 'https://images.pexels.com/photos/5065876/pexels-photo-5065876.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Wax-based pencils — buttery blend on left' },
            { src: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Oil-based pencils — crisp, fine detail on right' }
          ]
        },
        {
          id: 's2', heading: 'How Many Colours Do You Actually Need?',
          body: 'A tin of 12 looks attractive but limits you immediately. You will spend more time trying to mix colours that should simply be in the tin, and coloured pencils do not mix the way watercolours do — layering creates optical blends, not pigment blends, so having the right colour nearby matters more. A set of 24 is workable. A set of 36 is our recommendation for beginners: it covers the main hue groups (reds, oranges, yellows, greens, blues, purples) with enough variety in each to handle most subjects without frustration.',
          body2: 'Sets of 72 and 120 are aspirational but can be paralysing. Choosing from 120 colours mid-drawing is cognitively exhausting, and large sets are expensive to replace individual pencils from if one colour runs out. Better to start with 36 and add individual pencils as specific gaps appear in your colour range.',
          facts: [
            { icon: 'fa-solid fa-hashtag', text: '36 colours is the ideal starter count' },
            { icon: 'fa-solid fa-palette', text: 'Optical blends, not pigment mixes' },
            { icon: 'fa-solid fa-magnifying-glass', text: 'Buy extra white and black separately' }
          ],
          inlineImg: { src: 'https://images.pexels.com/photos/6952402/pexels-photo-6952402.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Full fan of coloured pencils in an array' }
        },
        {
          id: 's3', heading: 'Paper Type — The Overlooked Variable',
          body: 'Coloured pencil on the wrong paper is a frustrating experience. Smooth printer paper fills up with pigment in two or three layers and becomes shiny and unworkable. You need a paper with enough tooth (texture) to grab multiple layers of pigment. Bristol smooth paper (270 gsm) is the most popular choice — it has a slight tooth that allows 8–10 layers of heavy burnishing before the tooth fills. Stonehenge printmaking paper is even more receptive and is a favourite of professional coloured pencil artists. For sketching and practice, a dedicated coloured pencil pad with 120–160 gsm textured pages is more than adequate.',
          body2: 'Toned papers — mid-grey, cream, or tan — allow you to use the paper colour as a mid-tone and add both darks and lights, which speeds up the process dramatically. A cream-toned paper for portraits, for instance, means you can leave the paper as the skin mid-tone and only add shadows and highlights, halving the number of layers you need.',
          warn: 'Avoid glossy or coated papers entirely. The coating repels the waxy pigment and nothing will stick past the first light layer.',
          tip: 'Matboard offcuts from framing shops are an excellent textured surface for coloured pencil and are often free or very cheap at local framers.'
        },
        {
          id: 's4', heading: 'Layering and Burnishing Techniques',
          body: 'Coloured pencil realism is built through layers. Each layer should be lighter than you think — start with very light pressure and build up slowly. Hard pressure early on fills the paper tooth immediately and you lose the ability to add more layers. Work from light colours to dark, not dark to light, since you cannot successfully lighten coloured pencil without losing the texture below.',
          body2: 'Burnishing is the final stage: heavy, firm pressure with a light colour (white, cream, or a colourless blender) over the entire surface to fuse all the layers together and produce a smooth, almost painted finish. Burnished areas have a beautiful gloss and depth. Once burnished you cannot easily add more layers, so burnish only when you are satisfied with the colours underneath.',
          steps: [
            'Apply a light base layer with very light pressure — just a hint of colour',
            'Build mid-tones with medium pressure, keeping strokes consistent in direction',
            'Add shadows with darker pencils, blending edges with a mid-tone',
            'Apply highlights last with a white or very light pencil on top of everything',
            'Burnish the entire surface with firm pressure using a white or clear blender'
          ]
        },
        {
          id: 's5', heading: 'Caring for and Storing Your Pencils',
          body: 'The most common complaint we hear at the ArtCraft counter is "my pencil broke inside without me doing anything." This almost always means the pencil was dropped at some point, even from a short height. The internal wax or oil core cracks on impact even when the wooden casing shows no damage at all — and the crack only reveals itself when you try to sharpen the pencil and it crumbles.',
          body2: 'Store coloured pencils flat in their tin or in a fabric roll. Never stand them point-down in a pot. If you transport them, use a dedicated padded pencil roll. A sharpened point resting against a hard surface while being bounced in a bag is another guaranteed way to snap the core. When sharpening, use a quality helical sharpener (the kind where you twist the pencil rather than the body) and turn slowly. A blade sharpener can be used, but apply even less pressure near the tip to avoid snapping the exposed core.',
          pullQuote: '"A cracked core is almost always a dropped pencil. Store them flat and transport them in a roll."',
          pullQuoteCite: '— Arjun Mehta, ArtCraft Drawing Specialist'
        }
      ],
      supplies: [
        { emoji: '✏️', name: 'Prismacolor Premier 36', note: 'Soft wax core, excellent for blending' },
        { emoji: '✏️', name: 'Faber-Castell Polychromos 36', note: 'Oil-based, superior lightfastness' },
        { emoji: '📄', name: 'Stonehenge Printmaking Paper', note: 'Professional coloured-pencil surface' },
        { emoji: '📄', name: 'Bristol Smooth 270gsm', note: 'Best all-rounder for beginners' },
        { emoji: '🔧', name: 'Kum Masterpiece Sharpener', note: 'Helical blade, protects soft cores' },
        { emoji: '⬜', name: 'Prismacolor Colorless Blender', note: 'Fuses layers without adding colour' }
      ]
    },

    /* ── 3. AIR-DRY CLAY ─────────────────────────────────────── */
    'air-dry-clay': {
      category: 'Sculpting', readTime: '7 min read',
      title: 'Air-Dry vs. Polymer Clay: Which Should You Start With?',
      excerpt: 'No kiln, no oven, no problem — but each type of clay has specific trade-offs in durability, detail, working time, and finish. Here is everything you need to know before you buy your first block.',
      author: 'Priya Nair, Sculpture Tutor', date: 'Jul 5, 2026',
      cover: 'https://images.pexels.com/photos/6692632/pexels-photo-6692632.jpeg?auto=compress&cs=tinysrgb&w=1400',
      coverCaption: 'Clay sculpting in progress at ArtCraft Studio — Hyderabad',
      introQuote: 'Clay is the most democratic medium. It costs almost nothing and responds entirely to patience, not talent.',
      tags: ['Clay', 'Sculpting', 'Beginner', 'Air-Dry', 'Polymer', 'Ceramics', 'Modelling'],
      likes: 31,
      related: ['pottery-workshop', 'fabric-scraps', 'watercolor-beginners'],
      stats: [
        { value: '2', label: 'Clay Types' },
        { value: '72hrs', label: 'Air-Dry Time' },
        { value: '130°C', label: 'Polymer Cure Temp' },
        { value: '7 min', label: 'Read Time' }
      ],
      gallery: [
        { src: 'https://images.pexels.com/photos/6692632/pexels-photo-6692632.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Throwing on the wheel — studio session' },
        { src: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Centering clay with both hands' },
        { src: 'https://images.pexels.com/photos/7303018/pexels-photo-7303018.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Finished pieces — air-dry and polymer side by side' }
      ],
      keyTakeaways: [
        'Air-dry clay requires no heat but is more brittle and sensitive to humidity once dry.',
        'Polymer clay stays workable indefinitely at room temperature and cures in a standard home oven.',
        'For large decorative work: choose air-dry. For jewellery and miniatures: choose polymer.',
        'Score and slip all joints on air-dry clay or they will crack open as the piece shrinks while drying.',
        'Always bake polymer clay on a ceramic tile — it distributes heat evenly and prevents scorching.'
      ],
      sections: [
        {
          id: 's1', heading: 'Air-Dry Clay — Everything You Need to Know',
          body: 'Air-dry clay is a compound of natural clay, cellulose fibres, and binders that allow it to harden at room temperature through evaporation rather than heat. It is non-toxic, widely available, and the most affordable clay option for home use. When freshly opened it has a smooth, slightly sticky feel and is easy to pinch, coil, and slab-build. It begins to firm up after about 30 minutes of exposure to air and achieves full hardness in 24–72 hours depending on the thickness of the piece.',
          body2: 'The main limitations of air-dry clay are brittleness and moisture sensitivity. Once dry, it is significantly more fragile than fired ceramic — thin forms like handles or extended limbs will snap under light force. It is also not waterproof: sustained contact with water softens and eventually dissolves a finished piece. For display pieces, planters, and wall decorations this is usually fine. For anything that will hold water or receive heavy use, it is not the right choice.',
          tip: 'Cover your work loosely with a plastic bag overnight to slow drying and prevent surface cracking. Fast drying on the outside while the inside is still wet causes the surface to crack.',
          tallImg: { src: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1400', caption: 'Shaping air-dry clay tiles at ArtCraft Studio' }
        },
        {
          id: 's2', heading: 'Polymer Clay — Everything You Need to Know',
          body: 'Polymer clay is a PVC-based modelling compound that contains plasticizers — these keep it soft and workable until you apply heat. It does not dry out at room temperature; an unopened block will remain workable for years. This is its greatest advantage: you can work on a polymer clay piece indefinitely, put it down for days, come back, and it will be exactly as you left it. Once you are satisfied, you bake it in a standard domestic oven at 110–130°C for 30–60 minutes and the plasticizers cure, leaving you with a hard, durable, waterproof piece.',
          body2: 'Polymer clay excels at fine detail. Its smooth, plasticky texture accepts tools beautifully and can capture extremely fine impressions. It can be sanded with wet-and-dry sandpaper after curing, drilled, carved, buffed to a shine, painted with acrylics, or sealed with compatible varnishes. It is the material of choice for miniature sculpture, doll-making, jewellery, and detailed figurines.',
          tip: 'Bake polymer clay on a ceramic tile inside the oven. The tile holds even heat and prevents the bottom of the piece from over-curing and going shiny. Never use a glass dish — it can create hot spots.',
          dualImg: [
            { src: 'https://images.pexels.com/photos/6692632/pexels-photo-6692632.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Air-dry clay — large decorative forms' },
            { src: 'https://images.pexels.com/photos/7303018/pexels-photo-7303018.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Polymer clay — fine jewellery and miniatures' }
          ]
        },
        {
          id: 's3', heading: 'Choosing the Right Clay for Your Project',
          body: 'The most important question is not "which clay is better" but "what are you making?" Jewellery, figurines under 10 cm, miniatures, decorative pins, and cane work are all better in polymer clay because the fine detail is achievable and the finished piece is durable and waterproof. Large decorative vessels, wall art, planters (not for actual planting), sculptural faces, and items you want to paint heavily with acrylics are better in air-dry clay because the larger working size is comfortable and acrylic paint adheres directly without a sealant.',
          body2: 'Consider your environment too. Polymer clay must be baked, and some brands release very mild fumes during curing. Always bake with adequate ventilation. Air-dry clay dries unpredictably in very humid climates — in Hyderabad\'s monsoon months, air-dry pieces may take four to five days to harden fully, and pieces with very thin sections may never fully firm up. For year-round reliability in humid conditions, polymer clay is the more consistent choice.',
          facts: [
            { icon: 'fa-solid fa-ring', text: 'Jewellery & minis → Polymer' },
            { icon: 'fa-solid fa-vase', text: 'Large vessels & art → Air-Dry' },
            { icon: 'fa-solid fa-temperature-high', text: 'Polymer cures at 110–130°C' }
          ],
          warn: 'Never microwave polymer clay — it cures unevenly and can burn. Never use your baking dishes for food after using them for polymer clay.'
        },
        {
          id: 's4', heading: 'Essential Tools for Both Types',
          body: 'Both air-dry and polymer clay respond to a similar basic toolkit, though the specifics differ slightly. For air-dry clay, a smooth non-stick surface (silicone mat or oilcloth) is essential because the clay sticks to wood and will absorb the texture of rough surfaces. A rolling pin or acrylic roller gives you consistent slab thickness. Water is your lubricant — a small bowl nearby keeps the clay workable and allows you to smooth surfaces and score joints.',
          body2: 'For polymer clay, your hands warm the clay before you work it, which makes it more pliable. If a block is very stiff, knead it for several minutes or rest it against your body for warmth. A pasta machine (dedicated to clay use only) is a revelation for conditioning large quantities and achieving even thickness.',
          steps: [
            'Smooth rolling pin or acrylic roller — for consistent slab thickness',
            'Silicone mat — non-stick, easy to clean, prevents texture transfer',
            'Needle tool — for piercing, scoring, and surface texture',
            'Wooden modelling tool — for smoothing seams and shaping curves',
            'Wire cutter — for trimming slab edges and removing pieces from the work surface',
            'Small sponge and water bowl (air-dry) or conditioning machine (polymer)'
          ]
        },
        {
          id: 's5', heading: 'Finishing and Painting Your Piece',
          body: 'Air-dry clay accepts acrylic paint directly once fully dry. Sand lightly with 180-grit sandpaper to smooth any rough surfaces, wipe with a damp cloth, let dry completely, and paint. Two thin coats of acrylic gesso as a primer will give you a much smoother surface to work on and improve adhesion. Seal the finished painted piece with a matte or gloss acrylic varnish for protection.',
          body2: 'Polymer clay can be painted with acrylic paint after curing, but the smooth surface means adhesion can be inconsistent. Lightly sand with 400-grit wet-and-dry paper before painting to give the surface some tooth. Alternatively, bake a thin layer of slightly tinted liquid polymer onto the surface as a primer coat. For a professional finish, buff the cured piece (before painting) with a denim cloth to bring up a natural shine — no varnish needed.',
          pullQuote: '"Every sculptor\'s journey starts with a single block of clay and a willingness to be surprised by what emerges from it."',
          pullQuoteCite: '— Priya Nair, ArtCraft Sculpture Tutor'
        }
      ],
      supplies: [
        { emoji: '🫙', name: 'Crayola Air-Dry Clay 2.5kg', note: 'White, smooth, excellent for beginners' },
        { emoji: '🎨', name: 'Fimo Professional Polymer Clay', note: 'Consistent texture, 150+ colours available' },
        { emoji: '🖊️', name: 'Staedtler Modelling Tool Set', note: 'Loop tools, ball styluses, needle tools' },
        { emoji: '🟩', name: 'Silicone non-stick mat', note: 'Essential — prevents clay from sticking to the table' },
        { emoji: '📋', name: 'Ceramic baking tile', note: 'For polymer — even heat distribution in oven' },
        { emoji: '🧴', name: 'Acrylic sealant varnish', note: 'Waterproofs and protects the finished piece' }
      ]
    },

    /* ── 4. FABRIC SCRAPS ────────────────────────────────────── */
    'fabric-scraps': {
      category: 'Crafting', readTime: '5 min read',
      title: '5 Ways to Use Leftover Fabric Scraps',
      excerpt: 'Before you toss that overflowing offcut bin, here are five genuinely useful projects that put every last scrap to work — from 30-minute pincushions to full canvas textile art.',
      author: 'Sneha Kulkarni, Craft Tutor', date: 'Jun 28, 2026',
      cover: 'https://images.pexels.com/photos/6358783/pexels-photo-6358783.jpeg?auto=compress&cs=tinysrgb&w=1400',
      coverCaption: 'Fabric scraps and craft materials at ArtCraft — Hyderabad',
      introQuote: 'The most creative constraint a maker can have is a bin of scraps and no budget for new materials.',
      tags: ['Fabric', 'Crafting', 'Upcycling', 'DIY', 'Sewing', 'Quilting', 'Zero-Waste'],
      likes: 19,
      related: ['yarn-weights', 'pottery-workshop', 'air-dry-clay'],
      stats: [
        { value: '5', label: 'Project Ideas' },
        { value: '30min', label: 'Shortest Project' },
        { value: '0₹', label: 'Extra Materials Needed' },
        { value: '5 min', label: 'Read Time' }
      ],
      gallery: [
        { src: 'https://images.pexels.com/photos/6358783/pexels-photo-6358783.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Fabric tools and ribbons at the studio' },
        { src: 'https://images.pexels.com/photos/6631891/pexels-photo-6631891.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Handmade pincushions from fabric scraps' },
        { src: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Patchwork pieces being assembled' }
      ],
      keyTakeaways: [
        'Sort your scraps by colour and fabric type before starting — it saves enormous time mid-project.',
        'Even tiny scraps under 5 cm square have uses: stuffing for pincushions, tassels, and confetti art.',
        'Always pre-wash your fabrics before cutting — shrinkage after making a project is devastating.',
        'Iron scraps flat before storing them. Creased fabric is far harder to cut accurately and precisely.',
        'Keep pinking shears specifically for fabric edges — they slow fraying and look professionally finished.'
      ],
      sections: [
        {
          id: 's1', heading: '1. Reusable Patchwork Gift Wrap',
          body: 'Japanese furoshiki — the ancient art of wrapping objects in fabric — is experiencing a global revival, and it is the perfect use for your largest, cleanest fabric offcuts. Cut squares and rectangles of complementary prints, iron them flat, and use them in place of paper gift wrap. The recipient gets a piece of fabric along with their gift, and if they are a crafter themselves, they will recognise and appreciate it.',
          body2: 'For a clean edge, fold 1 cm to the wrong side and press, fold again, and stitch or glue. Alternatively, use pinking shears for a zigzag edge that is both decorative and slower to fray than a straight cut. Mix patterns deliberately — stripes with florals, solids with geometric prints — for a visually interesting result. Tie with a ribbon cut from another offcut, or use a length of jute twine for a more rustic look.',
          tip: 'Use pinking shears for a decorative zigzag edge that is faster to finish than a hemmed edge and frays much more slowly.',
          inlineImg: { src: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Fabric squares cut and ready for patchwork gift wrapping' }
        },
        {
          id: 's2', heading: '2. Stuffed Pincushions',
          body: 'A pincushion is the quintessential scrap project and takes under 30 minutes from start to finished object. Cut two identical shapes from your scrap — a 10 cm circle, an 8 cm square, or a heart using a simple paper template. Place the right sides together, sew around the edge leaving a 3 cm gap for turning, turn right-side-out, stuff firmly with leftover batting, dried rice, or even tightly balled-up fabric scraps, and slip-stitch the gap closed.',
          body2: 'The trick to a beautiful pincushion is stuffing it firmly enough that pins go in and come out cleanly without the cushion collapsing. Under-stuffed pincushions fold when you insert a pin, which makes it harder to grip and remove. Make a batch of ten during an afternoon — they are excellent gifts for sewing friends and take no materials beyond what is already in your scrap bin.',
          dualImg: [
            { src: 'https://images.pexels.com/photos/6631891/pexels-photo-6631891.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Finished pincushions in bright fabric prints' },
            { src: 'https://images.pexels.com/photos/6358783/pexels-photo-6358783.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Tools and trimmings for pincushion making' }
          ],
          tip: 'Fill pincushions with emery sand (from emery boards or loose emery powder) in the centre, wrapped in batting, to keep your pins sharp as you insert and remove them.'
        },
        {
          id: 's3', heading: '3. Fabric Bookmarks and Tassels',
          body: 'Long thin fabric strips — even a centimetre wide — make excellent bookmarks. Cut a strip 4–5 cm wide and 25–30 cm long. Fold lengthwise with right sides together, sew along the long edge, turn right-side-out, press flat, and tuck in the raw ends. Topstitch around the entire edge if you want a crisp, professional finish. A tassel at one end — made from looping thread or thin fabric strips around a cardboard rectangle, tying the top, and cutting the bottom loops — adds a luxurious touch.',
          body2: 'Tassels are their own product: you can attach them to zipper pulls, bag handles, keychains, and curtain ties. Make them from embroidery thread, strips of silk or satin offcuts, or even cut lengths of yarn. A 5 cm cardboard square gives you a compact tassel; a 15 cm square gives you a long, dramatic one. Mix four or five different thread or fabric colours wound together for an artisanal multicolour effect.',
          facts: [
            { icon: 'fa-solid fa-scissors', text: 'Strips as narrow as 1cm are usable' },
            { icon: 'fa-solid fa-bookmark', text: 'Bookmark size: 4cm × 25cm' },
            { icon: 'fa-solid fa-grip-lines', text: 'Tassel length = cardboard height' }
          ]
        },
        {
          id: 's4', heading: '4. Quilted Pot Holders and Coasters',
          body: 'A quilted pot holder is a genuinely useful object and a satisfying first sewing project. Stack three or four layers of cotton fabric scraps — the outer two should be your prettiest fabric, the inner layers can be anything cotton or canvas. Add a layer of cotton batting in the centre for heat resistance. Pin all layers together and sew in a grid pattern of parallel lines about 3 cm apart across the entire surface. The grid quilting adds grip, stabilises the layers, and produces a professional-looking texture.',
          body2: 'Coasters follow the same principle with smaller dimensions — typically 10 × 10 cm. For a fully reversible coaster, cut all layers to the same size, sew with right sides together (top fabric to base fabric), leave a gap for turning, turn right-side-out, press, and topstitch close to the edge. No visible raw edges and the quilting lines hold all layers in place without catching the raw edges inside.',
          steps: [
            'Cut all layers to a uniform 20 × 20 cm square for pot holders (10 × 10 for coasters)',
            'Stack: outer fabric — cotton batting — inner fabric — base fabric',
            'Pin generously through all layers to prevent shifting',
            'Sew a grid of parallel lines every 3 cm across the entire surface',
            'Finish the raw edges with bias binding cut from another fabric scrap',
            'Fold binding to the back, slip-stitch or machine-stitch the fold down'
          ]
        },
        {
          id: 's5', heading: '5. Textile Collage Art on Canvas',
          body: 'Gluing and stitching fabric scraps to a stretched canvas produces textile art that is genuinely exhibition-worthy. Start with a base layer of PVA glue brushed onto the canvas. Tear (rather than cut) your fabric scraps for raw, organic edges — torn edges are less flat and give more dimension than clean-cut edges. Press each piece into the glue while it is still wet, overlapping pieces to build up layers and colour.',
          body2: 'Once the base layer is dry, add embellishments: hand or machine stitching through the canvas, buttons, ribbon, lace offcuts, and even natural materials like dried leaves or pressed flowers. Frame without glass so the texture is visible. This is one of our most popular beginner workshops at ArtCraft because the result looks incredibly sophisticated with almost no technical skill required — the scraps do most of the visual work.',
          pullQuote: '"The richest textile art often comes from what everyone else throws away. Your offcut bin is a gallery waiting to happen."',
          pullQuoteCite: '— Sneha Kulkarni, ArtCraft Craft Tutor'
        }
      ],
      supplies: [
        { emoji: '✂️', name: 'Pinking shears', note: 'Decorative zigzag edge, slows fraying' },
        { emoji: '🧵', name: 'Embroidery thread multi-pack', note: 'Tassels, bookmarks, and surface decoration' },
        { emoji: '🟧', name: 'Cotton batting offcuts', note: 'Stuffing for pincushions and pot holders' },
        { emoji: '🧴', name: 'PVA glue (acid-free)', note: 'For textile collage on canvas' },
        { emoji: '📌', name: 'Quilting pins (long)', note: 'Holds multiple fabric layers together precisely' },
        { emoji: '📏', name: 'Quilting ruler (15 × 60cm)', note: 'Accurate strips and squares from offcuts' }
      ]
    },

    /* ── 5. POTTERY WORKSHOP ─────────────────────────────────── */
    'pottery-workshop': {
      category: 'Workshops', readTime: '6 min read',
      title: 'What to Expect at Your First Pottery Workshop',
      excerpt: 'From what to wear to how messy it actually gets, from centering clay to collecting your finished piece six weeks later — a complete walkthrough for first-timers.',
      author: 'Rohan Desai, Workshop Coordinator', date: 'Jun 20, 2026',
      cover: 'https://images.pexels.com/photos/8382222/pexels-photo-8382222.jpeg?auto=compress&cs=tinysrgb&w=1400',
      coverCaption: 'Pottery wheel session at ArtCraft Supply Studio — Hyderabad',
      introQuote: 'There are no perfect pots at a first pottery class. There are only honest ones, and honest ones are always beautiful.',
      tags: ['Pottery', 'Workshops', 'Beginner', 'Clay', 'Wheel', 'Ceramic', 'Glazing'],
      likes: 44,
      related: ['air-dry-clay', 'fabric-scraps', 'yarn-weights'],
      stats: [
        { value: '3hrs', label: 'Workshop Duration' },
        { value: '6wks', label: 'Collection Time' },
        { value: '1260°C', label: 'Glaze Fire Temp' },
        { value: '6 min', label: 'Read Time' }
      ],
      gallery: [
        { src: 'https://images.pexels.com/photos/8382222/pexels-photo-8382222.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Students throwing on the wheel' },
        { src: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Centering clay — the first skill' },
        { src: 'https://images.pexels.com/photos/6692632/pexels-photo-6692632.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'A bowl taking shape on the wheel' }
      ],
      keyTakeaways: [
        'Wear clothes you do not mind ruining — clay stains are stubborn and arms are not covered by the apron.',
        'Centering takes most beginners the entire first session. This is normal. It builds muscle memory.',
        'Keep water on the clay at all times while throwing — dry clay on the wheel causes friction burns.',
        'Your first pot will be imperfect. Your tenth will be better. Your hundredth will be good.',
        'Pieces are collected 4–6 weeks after the workshop once bisque and glaze firing is complete.'
      ],
      sections: [
        {
          id: 's1', heading: 'Before You Arrive — What to Wear and Bring',
          body: 'Pottery is messy in a deeply specific way. Clay is fine enough to float in water and spreads everywhere — your forearms, your face (somehow), the cuffs of sleeves you forgot to roll up, and occasionally your hair if you push it back mid-session. We provide aprons, but aprons protect your torso, not your arms or lower legs. Wear clothes you genuinely could throw away and not feel sad.',
          body2: 'Roll sleeves up past the elbow before you start. Remove rings, bangles, and watches — these collect clay in their crevices and jewellery can scratch the surface of a piece you are trying to smooth. Tie your hair back securely. Bring an old towel for your commute home and a bag to carry damp clay-covered aprons in if you decide to take them.',
          tip: 'Some students bring a change of clothes. If you have an important meeting after the workshop, this is genuinely worth considering.',
          dualImg: [
            { src: 'https://images.pexels.com/photos/8382222/pexels-photo-8382222.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Students at the wheel — workshop in progress' },
            { src: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Working clay with water on the wheel' }
          ]
        },
        {
          id: 's2', heading: 'The First 45 Minutes — Centering',
          body: 'Centering is the process of pressing a ball of clay into the exact geometric centre of a spinning pottery wheel head using firm, controlled pressure. It sounds simple. It is not. The clay resists constantly — it wobbles, it leans, it throws your hands off if you relax even slightly. Most beginners spend the majority of their first session on this single skill, which can be demoralising if you are expecting to produce a beautiful bowl in the first hour.',
          body2: 'Do not be demoralised. Centering is a physical skill that lives in your muscles, not your brain. Every experienced potter you have ever admired was once in exactly your position, fighting the same lump of clay, producing the same asymmetrical mess. Our tutors will guide your hands on your first attempt — literally place their hands over yours and demonstrate the pressure and angle required. Accept this help. It is far faster than watching a video or trying to intuit it from a diagram.',
          warn: 'The most common centering mistake is holding your elbows too high. Brace them firmly against your thighs and use your whole body weight — not just arm strength.',
          tallImg: { src: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1400', caption: 'Both hands braced, even pressure — the centering technique' }
        },
        {
          id: 's3', heading: 'Opening, Pulling, and Forming',
          body: 'Once the clay is centred — or close enough to begin — you push a thumb firmly into the middle to open the form. This is a significant moment. For the first time the clay looks like something that could become a vessel. You widen the opening with both thumbs, feeling for the thickness of the base with your fingertips pressing from below. The floor should be about 1 cm thick at minimum — thinner and it becomes fragile after firing.',
          body2: 'Pulling the walls up is a meditative rhythm: both hands apply even pressure from inside and outside simultaneously as the wheel spins, drawing the clay upward in a slow, controlled column. The coordination is counter-intuitive at first — you are pulling the clay toward you while the wheel takes it away. Each pull lifts the walls slightly higher and thins them slightly more. Do not try to make the walls tall in one pull; three or four gentle pulls produce better results than one aggressive one.',
          facts: [
            { icon: 'fa-solid fa-hand', text: 'Base thickness: min. 1 cm' },
            { icon: 'fa-solid fa-arrow-up', text: '3–4 gentle pulls per form' },
            { icon: 'fa-solid fa-droplet', text: 'Water on clay at all times' }
          ]
        },
        {
          id: 's4', heading: 'After the Session — Drying, Trimming, and Firing',
          body: 'Your piece is not finished when you step away from the wheel. It goes through a careful sequence of drying, trimming, two firings, and glazing before it is ready to collect. First, it is left to dry to "leather hard" stage — firm enough to handle without distorting, but still damp enough to trim. This takes 24–48 hours depending on the climate.',
          body2: 'At the next class, the leather-hard piece is inverted on the wheel and trimmed with metal trimming tools to refine the base, even out the walls, and add any foot ring. After trimming, it continues drying to "bone dry" — completely dry, usually another 24–48 hours. It then goes into the bisque kiln, firing to approximately 1000°C. After bisque firing, you apply glaze (we mix all our glazes in-house at ArtCraft) in the next session. The glaze-coated piece is then fired for the final time to approximately 1260°C, where the glaze melts into a permanent glassy surface.',
          steps: [
            'Wheel throwing — your hands meet clay for the first time',
            'Leather-hard stage — 24–48 hours of careful drying',
            'Trimming session — refining the form and adding the foot ring',
            'Bone-dry stage — fully dehydrated, fragile, ready for the kiln',
            'Bisque firing at 1000°C — permanently sets the clay',
            'Glazing session — you choose and apply the colour',
            'Glaze firing at 1260°C — glaze melts into a hard glassy surface',
            'Collection — usually 2–4 weeks after the glaze firing'
          ]
        },
        {
          id: 's5', heading: 'What You Take Home and What Comes Next',
          body: 'You will collect one finished piece — usually a small bowl or cylinder between 8–15 cm tall. It will be imperfect in a number of ways: slightly off-centre, perhaps a little thick-walled, possibly with glaze drips or uneven colour. None of this matters in the slightest. Every experienced potter has a shelf full of these early pieces, and they are often more beloved than later, more technically accomplished work because they are evidence of the beginning.',
          body2: 'Most students book a second session. The most common feedback we hear at ArtCraft is: "I had no idea I would be this bad at it, or that I would enjoy it this much." Pottery is one of those rare crafts where the process is the entire point — the finished object is almost secondary to the experience of making it. If you felt that in your first session, you are already a potter.',
          pullQuote: '"Your first pot will be lopsided, possibly cracked, absolutely yours, and possibly the best thing you have ever made."',
          pullQuoteCite: '— Rohan Desai, ArtCraft Workshop Coordinator'
        }
      ],
      supplies: [
        { emoji: '🏺', name: 'ArtCraft Studio Clay (Stoneware)', note: 'Smooth throwing clay, wedged and ready' },
        { emoji: '🔧', name: 'Pottery trimming tool set', note: 'Ribbon and loop tools for leather-hard work' },
        { emoji: '🧽', name: 'Natural sea sponge', note: 'Smoothing surfaces and controlling water' },
        { emoji: '🪢', name: 'Cut-off wire (twisted)', note: 'Removes the finished pot from the wheel head' },
        { emoji: '🎨', name: 'Underglazes (in-studio)', note: 'Applied pre-firing for detailed colour work' },
        { emoji: '🪣', name: 'Slop bucket and splash pan', note: 'Keeps the studio usable — bring old clothes' }
      ]
    },

    /* ── 6. YARN WEIGHTS ─────────────────────────────────────── */
    'yarn-weights': {
      category: 'Crafting', readTime: '7 min read',
      title: 'A Beginner\'s Guide to Yarn Weights',
      excerpt: 'Lace, fingering, sport, DK, worsted, bulky, super bulky — the label is a roadmap if you know how to read it. Here is everything you need to understand yarn weight before your next project.',
      author: 'Divya Krishnan, Craft Specialist', date: 'Jun 14, 2026',
      cover: 'https://images.pexels.com/photos/15391101/pexels-photo-15391101.jpeg?auto=compress&cs=tinysrgb&w=1400',
      coverCaption: 'Yarn wall at ArtCraft Supply Studio — Hyderabad',
      introQuote: 'The yarn label is a love letter. Learn to read it and you will never buy the wrong weight again, spend half a project frogging back, or end a scarf two feet short.',
      tags: ['Yarn', 'Knitting', 'Crochet', 'Beginner', 'Crafting', 'Fibre', 'Weight'],
      likes: 22,
      related: ['fabric-scraps', 'pottery-workshop', 'sketching-basics'],
      stats: [
        { value: '8', label: 'Weight Categories' },
        { value: '5mm', label: 'Worsted Needle Size' },
        { value: '2hrs', label: 'Hat in Bulky Yarn' },
        { value: '7 min', label: 'Read Time' }
      ],
      gallery: [
        { src: 'https://images.pexels.com/photos/15391101/pexels-photo-15391101.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Full yarn weight range on display' },
        { src: 'https://images.pexels.com/photos/6631911/pexels-photo-6631911.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Fine lace yarn on 1.5mm needles' },
        { src: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Chunky bulky yarn for arm-knitting' }
      ],
      keyTakeaways: [
        'The Craft Yarn Council numbering system (0–7) is the universal standard — look for the skein symbol on the label.',
        'Worsted weight (level 4) on 5 mm needles is the best starting point for most beginners.',
        'Fibre content affects feel, warmth, and washability — not just the weight category.',
        'Always swatch before starting a garment project — gauge determines the finished size.',
        'Substitute yarn weights at your own risk — going up one weight in a pattern changes the entire drape and dimension.'
      ],
      sections: [
        {
          id: 's1', heading: 'The CYC Weight System — Explained',
          body: 'The Craft Yarn Council (CYC) established a universal yarn weight numbering system used by almost every major yarn manufacturer worldwide. Yarn weights run from 0 (lace, the thinnest) through to 7 (jumbo, the thickest). Each weight has a recommended needle size range and a standard gauge — the number of stitches and rows you should achieve over a 10 × 10 cm swatch with the recommended needle in stockinette stitch. When a pattern specifies a weight, it means any yarn in that weight category will (after swatching) produce the stated dimensions.',
          body2: 'On the yarn label, look for a small icon of a skein of yarn with a number 0–7 inside a diamond. This is the standardised weight indicator. Some older or boutique yarns use names only (fingering, sport, DK, worsted, bulky) without a number — the table below maps the names to numbers so you can always translate.',
          facts: [
            { icon: 'fa-solid fa-0', text: 'Lace — 1.5 to 2.25mm needles' },
            { icon: 'fa-solid fa-3', text: 'DK — 3.75 to 4.5mm needles' },
            { icon: 'fa-solid fa-4', text: 'Worsted — 4.5 to 5.5mm needles' },
            { icon: 'fa-solid fa-6', text: 'Bulky — 8 to 12mm needles' }
          ],
          tallImg: { src: 'https://images.pexels.com/photos/15391101/pexels-photo-15391101.jpeg?auto=compress&cs=tinysrgb&w=1400', caption: 'Yarn weights arranged from lace (far left) to jumbo (far right) at ArtCraft Studio' }
        },
        {
          id: 's2', heading: 'Lace and Fingering (Weights 0–1)',
          body: 'Lace (weight 0) and fingering (weight 1) are ultra-thin yarns, worked on 1.5–3.5 mm needles and producing a fine, delicate fabric with 28 or more stitches per 10 cm. These weights are for experienced knitters and crocheters. Shawls, socks, and traditional lace patterns that require blocking (pinning the damp finished piece to shape and letting it dry) live in this weight range.',
          body2: 'Fingering is also the standard weight for hand-knitted socks, where durability and the ability to fit inside a shoe are paramount. Many fingering yarns include 20–25% nylon content specifically for this purpose — nylon dramatically extends the life of a knitted sock in the heel and toe areas where friction is highest. For purely decorative lace, 100% merino or silk laceweight gives an exquisite drape that synthetic blends cannot match.',
          warn: 'Do not start with lace or fingering weight if you are a beginner. The small needle size and the fine yarn make it extremely difficult to see your stitches, count your rows, or identify and fix mistakes.',
          inlineImg: { src: 'https://images.pexels.com/photos/6631911/pexels-photo-6631911.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Fine lace yarn on tiny needles showing the delicate fabric produced' }
        },
        {
          id: 's3', heading: 'DK and Worsted (Weights 3–4) — The Beginner Sweet Spot',
          body: 'DK (double knit, weight 3) and worsted (weight 4) are the most versatile and beginner-friendly yarn weights. Worsted on 5 mm needles gives a standard gauge of 20 stitches and 28 rows per 10 cm — this is the baseline gauge for thousands of published patterns and the point from which most pattern designers begin. If you can only own one yarn weight, own worsted.',
          body2: 'DK is lighter and produces a more refined, drapey fabric than worsted. It is excellent for garments worn in warmer weather — cardigans, tank tops, and lightweight scarves. Worsted is warmer, sturdier, and works up faster — better for hats, mittens, bags, and toys that need structure. Both weights are widely available in every fibre from acrylic to cashmere, and they are easy to frog (unravel) and reknit when you need to fix a mistake, making them the most forgiving weights for learning.',
          tip: 'Always knit a gauge swatch before starting a garment in any weight. Even if the yarn is the right weight, your tension may differ from the pattern designer\'s, changing the finished dimensions dramatically.',
          dualImg: [
            { src: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'DK weight — fine, drapey, good for garments' },
            { src: 'https://images.pexels.com/photos/15391101/pexels-photo-15391101.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Worsted weight — the universal beginner standard' }
          ]
        },
        {
          id: 's4', heading: 'Bulky and Super Bulky (Weights 5–6)',
          body: 'Bulky yarns are instant gratification for crafters. A hat in bulky yarn on 8 mm needles takes under two hours. A throw blanket in super bulky takes a weekend. The stitches are large enough to see clearly, count easily, and fix without magnification — which makes these weights excellent for teaching children or for knitters with vision difficulties or arthritis. Arm-knitting (using your forearms as needles) and finger-knitting are only possible with super bulky and jumbo weights.',
          body2: 'The trade-off is limited fibre variety. While worsted is available in every imaginable fibre, super bulky is mostly acrylic, wool blends, and a few luxury roving options. Fine fibres like silk or cashmere are rarely spun to this thickness because the resulting yarn would be prohibitively expensive and structurally fragile. Acrylic bulky yarns are machine-washable and durable — the right choice for children\'s items and home accessories that see heavy use.',
          steps: [
            'Weight 5 (Bulky): 8–9mm needles, 14 stitches per 10cm — hats in 2 hours',
            'Weight 6 (Super Bulky): 10–15mm needles, 7–12 stitches per 10cm — blankets in a weekend',
            'Weight 7 (Jumbo): 15mm+ or arm-knitting — fastest possible results',
            'Best fibre for bulky: thick-and-thin wool, merino roving, aran wool',
            'Best fibre for super bulky: acrylic blends, chenille, velvet-style yarns'
          ]
        },
        {
          id: 's5', heading: 'Fibre Content — The Other Half of the Label',
          body: 'Weight tells you how thick the yarn is. Fibre tells you how it will feel on the body, how it will wash, how durable it is, and how much it will cost. Acrylic is the entry-level choice: durable, machine-washable, colourfast, and inexpensive. It does not breathe as well as natural fibres and can pill with heavy use. For children\'s items and home accessories, it is the most practical choice.',
          body2: 'Wool is warm, elastic, and breathes — but requires hand-washing or careful machine-washing on a wool cycle. Superwash wool has been treated to be machine-washable and is a much more practical option for garments worn regularly. Merino is the softest wool variety and is suitable for items worn next to the skin. Cotton is cool and absorbent — ideal for summer garments and dishcloths — but has no stretch, which makes it harder to knit with and means garments may stretch out of shape with use. Silk and alpaca are luxury additions that add drape, sheen, and softness to any blend.',
          pullQuote: '"The right yarn for a beginner is the one that does not make you want to quit. That is almost always worsted weight in a machine-washable wool or good quality acrylic."',
          pullQuoteCite: '— Divya Krishnan, ArtCraft Craft Specialist'
        }
      ],
      supplies: [
        { emoji: '🧶', name: 'Paintbox Simply DK', note: 'Excellent value, wide colour range, beginner-friendly' },
        { emoji: '🧶', name: 'Lion Brand Wool-Ease Worsted', note: 'Superwash wool blend — warm and machine-washable' },
        { emoji: '🪡', name: 'Circular needles 5mm × 80cm', note: 'Versatile — flat and in-the-round projects' },
        { emoji: '🪡', name: 'Crochet hook set 3.5–10mm', note: 'Covers DK through super bulky weights' },
        { emoji: '📐', name: 'Stitch gauge ruler', note: 'Measures your gauge accurately before starting' },
        { emoji: '🔔', name: 'Stitch markers (locking)', note: 'Mark increases, decreases, and pattern repeats' }
      ]
    },

    /* ── 7. STORE ART SUPPLIES ───────────────────────────────── */
    'store-art-supplies': {
      category: 'Painting', readTime: '6 min read',
      title: 'How to Store Your Art Supplies So They Actually Last',
      excerpt: 'Cracked paint tubes, warped paper, and splayed brush bristles are almost always storage and handling problems — not quality problems. Here is how to fix them permanently.',
      author: 'Karan Sharma, Studio Manager', date: 'Jun 6, 2026',
      cover: 'https://images.pexels.com/photos/28480214/pexels-photo-28480214.jpeg?auto=compress&cs=tinysrgb&w=1400',
      coverCaption: 'Organised art supply storage at ArtCraft — Hyderabad',
      introQuote: 'Good storage is an act of respect for your craft and for your tools. A well-maintained brush lasts decades. A neglected one lasts months.',
      tags: ['Storage', 'Art Supplies', 'Organisation', 'Painting', 'Tips', 'Care', 'Studio'],
      likes: 35,
      related: ['watercolor-beginners', 'colored-pencils', 'sketching-basics'],
      stats: [
        { value: '3', label: 'Storage Rules' },
        { value: '10+yrs', label: 'Brush Lifespan (Proper Care)' },
        { value: '1', label: 'Box Rule' },
        { value: '6 min', label: 'Read Time' }
      ],
      gallery: [
        { src: 'https://images.pexels.com/photos/28480214/pexels-photo-28480214.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Organised paint tubes in a storage tray' },
        { src: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Brushes stored tip-up in a ceramic cup' },
        { src: 'https://images.pexels.com/photos/6925029/pexels-photo-6925029.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Colour palette and organised supplies on a studio desk' }
      ],
      keyTakeaways: [
        'Acrylic paint tubes must be stored upright with caps tightly closed — they dry permanently once exposed to air.',
        'Never store brushes tip-down in water — ferrule glue loosens and bristles splay permanently.',
        'Paper should be stored flat and horizontal in a dark, dry environment away from external walls.',
        'Coloured pencils stored vertically fall and crack their internal cores even without visible damage.',
        'The One Box Rule: all supplies in one dedicated space saves more time than any labelling system.'
      ],
      sections: [
        {
          id: 's1', heading: 'Paint Tubes, Pots, and Palettes',
          body: 'Acrylic paint is a polymer emulsion — it is liquid while wet and permanently solid when dry. Unlike watercolour, dried acrylic cannot be rewetted and used again. This means air is your enemy. Store all acrylic tubes standing upright with caps tightly closed after every session. Before you cap a tube, wipe the thread of the nozzle with a damp cloth to clear any paint residue that might dry and glue the cap on permanently.',
          body2: 'For palettes, a stay-wet palette (a sealed box with a damp membrane inside) keeps acrylic paint workable for days. Alternatively, spray your palette with water and seal it in an airtight ziplock bag between sessions. Watercolour tubes can be stored cap-down or horizontal since dried watercolour can be rewetted — but store them by colour family in small ziplock bags so you can find a colour quickly without handling every tube.',
          tip: 'Wipe the thread of every paint tube before recapping. A thin ring of dried paint on the thread eventually welds the cap shut permanently. A pair of pliers opens it — but usually splits the tube in the process.',
          dualImg: [
            { src: 'https://images.pexels.com/photos/28480214/pexels-photo-28480214.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Acrylic tubes stored upright — correct method' },
            { src: 'https://images.pexels.com/photos/6925029/pexels-photo-6925029.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Stay-wet palette in use — paint remains workable for days' }
          ]
        },
        {
          id: 's2', heading: 'Brushes — The Most Mistreated Tool',
          body: 'A quality brush treated correctly will last for years to decades. A quality brush treated carelessly will be useless within a season. The three most common ways brushes are destroyed: stored tip-down in water, left paint-clogged in the ferrule, and dried with the bristles bent against a hard surface. All three are completely avoidable.',
          body2: 'The ferrule is the metal band that connects the bristles to the handle. It is crimped, not glued, which means the bristles are held by mechanical compression rather than adhesive. Water that wicks up into the ferrule during long soaking periods loosens this compression over time, and once loosened the bristles splay outward and never return to a clean point. After every session, wash your brushes under running water (not soaking in a jar), reshape the bristle tip with your fingers, and lay them flat or store them tip-up in a roll.',
          warn: 'Do not leave brushes soaking in a water jar between strokes. Even 10 minutes with the tip resting on the jar bottom begins to bend the bristles. Use a brush holder clip on the jar rim to suspend the brush with the tip just above the water.',
          inlineImg: { src: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Quality artist brushes stored tip-up in a ceramic holder' }
        },
        {
          id: 's3', heading: 'Paper and Canvas — Flat, Dark, and Dry',
          body: 'The two enemies of paper and canvas are moisture and uneven pressure. Paper stored vertically bows toward whichever face is at the bottom over time, producing a permanent curve that cannot be fully flattened. Store all paper and watercolour pads flat, stacked horizontally, in a cool, dark, dry location. A dedicated flat file (map drawer cabinet) is ideal, but a flat storage box under the bed works perfectly for most home studios.',
          body2: 'Do not store paper or canvases near external walls in climates with significant temperature variation. The wall surface changes temperature as the outside temperature changes, creating a condensation cycle on the adjacent surfaces. In Hyderabad\'s monsoon months, this can mean a stack of paper absorbing enough moisture to buckle permanently within a week. Store at least 15–20 cm away from external walls, and consider silica gel sachets in any sealed storage box.',
          facts: [
            { icon: 'fa-solid fa-arrows-left-right-to-line', text: 'Store paper flat — never vertical' },
            { icon: 'fa-solid fa-temperature-low', text: 'Away from external walls — 15cm minimum' },
            { icon: 'fa-solid fa-box', text: 'Silica gel sachets in sealed boxes' }
          ],
          tip: 'Use acid-free tissue paper between watercolour paintings stored together. Wet paintings in contact with each other will transfer colour and texture between the sheets.'
        },
        {
          id: 's4', heading: 'Coloured Pencils, Pastels, and Drawing Tools',
          body: 'Coloured pencils are deceptively fragile. The wax or oil core inside the wooden casing can crack on impact without any visible damage to the outside, and the crack only reveals itself when you try to sharpen the pencil and the core crumbles into fragments. Avoid this by never dropping pencils (easier said than done), storing them flat in a tin, and transporting them in a padded roll rather than loose in a bag.',
          body2: 'Pastels — both soft chalk pastels and oil pastels — require their own storage logic. Soft pastels should always remain in the tray they came in, colour-separated by the foam dividers. Pastels stored loosely together grind against each other, abrade to dust, and contaminate each other\'s colours with adjacent pigment. Oil pastels must be kept away from direct sunlight and heat: they become greasy and unworkable at temperatures above 30°C, which in a Hyderabad summer means even a windowsill can destroy them.',
          steps: [
            'Coloured pencils: flat in a tin or padded fabric roll — never vertical',
            'Soft pastels: in their original tray with foam dividers, or in a dedicated pastel box',
            'Oil pastels: in a cool, dark location, away from windows and heat sources',
            'Charcoal sticks: in the original box lying flat, not standing upright',
            'Graphite pencils: any orientation is fine — the core is hard and does not crack',
            'Erasers: in a sealed bag away from heat — they harden and yellow in sunlight'
          ]
        },
        {
          id: 's5', heading: 'The One Box Rule',
          body: 'The most practical piece of studio organisation advice we give at every ArtCraft workshop is this: if your art supplies live in more than three locations around your home, you will spend 20% of your creative time just finding things. The activation energy of having to hunt for supplies before you can start is a genuine barrier to making art. You will reach for whatever is within arm\'s reach, which means you will keep using the same limited tools and skipping the ones buried in a drawer.',
          body2: 'Dedicate one shelf, one drawer unit, one trolley, or one suitcase to all your supplies and equipment. Everything goes in it. Label every section. When you finish a session, everything goes back before you leave the table. The ten minutes of tidying after each session saves you an hour of frustration before the next one, and knowing exactly where every tool lives means you spend your creative energy on art, not archaeology.',
          pullQuote: '"A tidy studio is not the sign of an idle artist. It is the sign of a prepared one."',
          pullQuoteCite: '— Karan Sharma, ArtCraft Studio Manager'
        }
      ],
      supplies: [
        { emoji: '🗄️', name: 'A3 flat file / map drawer', note: 'Best paper storage — acid-free, perfectly flat' },
        { emoji: '🧴', name: 'Stay-wet acrylic palette', note: 'Keeps acrylic workable for days between sessions' },
        { emoji: '🌀', name: 'Fabric brush roll (12-slot)', note: 'Stores and transports brushes safely tip-up' },
        { emoji: '🧽', name: 'Brush soap (General\'s)', note: 'Deep-cleans bristles without damaging them' },
        { emoji: '📦', name: 'Storage trolley with drawers', note: 'Mobile studio unit — pull out what you need' },
        { emoji: '💧', name: 'Silica gel sachets', note: 'Prevents moisture damage in sealed paper storage' }
      ]
    },

    /* ── BONUS: SKETCHING BASICS ─────────────────────────────── */
    'sketching-basics': {
      category: 'Drawing', readTime: '8 min read',
      title: 'Sketching Basics: The 5 Lines Every Artist Must Master',
      excerpt: 'From contour to gesture, from hatching to the lost edge — the foundational marks that make every drawing more confident, expressive, and alive on the page.',
      author: 'Arjun Mehta, Drawing Specialist', date: 'May 30, 2026',
      cover: 'https://images.pexels.com/photos/5965592/pexels-photo-5965592.jpeg?auto=compress&cs=tinysrgb&w=1400',
      coverCaption: 'Sketching practice at ArtCraft Studio — Hyderabad',
      introQuote: 'Drawing is the art of putting lines exactly where lines need to be. Everything else — shading, colour, composition — is built on top of that single truth.',
      tags: ['Sketching', 'Drawing', 'Beginner', 'Lines', 'Technique', 'Contour', 'Gesture'],
      likes: 29,
      related: ['colored-pencils', 'store-art-supplies', 'watercolor-beginners'],
      stats: [
        { value: '5', label: 'Line Types' },
        { value: '10min', label: 'Daily Practice' },
        { value: '30sec', label: 'Gesture Sessions' },
        { value: '8 min', label: 'Read Time' }
      ],
      gallery: [
        { src: 'https://images.pexels.com/photos/5965592/pexels-photo-5965592.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Sketchbook open at a figure study' },
        { src: 'https://images.pexels.com/photos/6177613/pexels-photo-6177613.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Cross-hatching technique in pencil' },
        { src: 'https://images.pexels.com/photos/7125353/pexels-photo-7125353.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Contour line drawing of a hand' }
      ],
      keyTakeaways: [
        'Contour drawing forces you to observe rather than assume — the most important habit in all of drawing.',
        'Hatching and cross-hatching can produce every tonal value without blending or erasing.',
        'Gesture drawing builds the muscle memory that makes all other drawing faster and more confident.',
        'The box method (structure lines) prevents the proportion errors that plague self-taught beginners.',
        'Lost edges — where two values merge — are what separate a drawing that looks alive from one that looks diagrammatic.'
      ],
      sections: [
        {
          id: 's1', heading: 'Line 1 — The Contour Line',
          body: 'Contour drawing is the practice of drawing the outline of a subject — both its outer silhouette and the internal edges and ridges of its form — as a single continuous line. The pencil follows the edge of the object while your eye follows the same edge on the subject itself, and the coordination between eye and hand produces a line that contains far more observational information than a line drawn from memory or imagination.',
          body2: 'The classic training exercise is blind contour drawing: you look only at the subject (a hand, a leaf, a shoe) and draw its outline without looking at your paper at all. The results look distorted and strange — proportions are exaggerated, the line loops back on itself — but that is precisely the point. The goal is not a recognisable drawing. The goal is to retrain your eye to look at the subject, not at the line you are making. After two weeks of 10-minute daily blind contour sessions, your observational accuracy in all other drawing improves dramatically.',
          tip: 'Use a 2B or 3B pencil for contour work. The softer lead flows without pressure, discouraging the stiff, tentative marks that beginners make when they are concentrating too hard on the line rather than the subject.',
          tallImg: { src: 'https://images.pexels.com/photos/7125353/pexels-photo-7125353.jpeg?auto=compress&cs=tinysrgb&w=1400', caption: 'Contour drawing of a hand — no looking at the paper' }
        },
        {
          id: 's2', heading: 'Line 2 — Hatching and Cross-Hatching',
          body: 'Hatching is the technique of drawing parallel lines close together to create the illusion of tone and shadow. The closer the lines, the darker the area appears. The further apart, the lighter. A master of hatching can produce every tonal value from the white of untouched paper to near-black using only a single pencil — no blending, no smudging, no eraser.',
          body2: 'Cross-hatching adds a second set of parallel lines at an angle to the first — typically 45–90 degrees. This creates a woven mesh of lines that holds more pigment per unit area than single hatching, producing deeper, denser darks. Curved hatching follows the form of the subject (a cheek, a sphere, a muscle) and gives the drawing a three-dimensional quality. The direction of the hatching strokes is never arbitrary in skilled work — they always describe the surface they are covering.',
          inlineImg: { src: 'https://images.pexels.com/photos/6177613/pexels-photo-6177613.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Close-up of hatching and cross-hatching technique on drawing paper' },
          facts: [
            { icon: 'fa-solid fa-bars', text: 'Hatching = parallel lines for tone' },
            { icon: 'fa-solid fa-hashtag', text: 'Cross-hatching = second layer at 45°' },
            { icon: 'fa-solid fa-circle-half-stroke', text: 'Line direction describes the form' }
          ]
        },
        {
          id: 's3', heading: 'Line 3 — The Gesture Line',
          body: 'Gesture drawing captures the movement, weight, and energy of a subject in 30–120 seconds. You are not drawing what a figure looks like — you are drawing how it moves. The gesture is the thrust of the action, the weight bearing down on a hip, the spring in a reaching arm. Gesture drawings look loose and scrawly; that is intentional. They are not finished work. They are the warm-up that makes all finished work better.',
          body2: 'The physical technique of gesture drawing requires using the whole arm, not just the wrist. Long, flowing lines drawn from the shoulder produce very different marks than short, careful lines drawn from the wrist — and gesture lines should always be the former. Work on large paper (A3 minimum) to force your arm to move fully. Set a timer — 30 seconds, 60 seconds, 2 minutes — and stop when it rings, regardless of how incomplete the drawing feels. The incompleteness is the lesson.',
          tip: 'Use Line of Action (line-of-action.com) or SenshiStock on DeviantArt for free gesture pose references. Ten minutes of 30-second poses each morning is the practice that separates drawing students who improve from those who plateau.',
          dualImg: [
            { src: 'https://images.pexels.com/photos/5965592/pexels-photo-5965592.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Sketchbook page of gesture studies — loose and energetic' },
            { src: 'https://images.pexels.com/photos/6952402/pexels-photo-6952402.jpeg?auto=compress&cs=tinysrgb&w=700', caption: 'Pencils arranged for a warm-up session' }
          ]
        },
        {
          id: 's4', heading: 'Line 4 — Structural Lines and the Box Method',
          body: 'Every complex object can be broken down into simple 3D geometric primitives: boxes, cylinders, spheres, cones, and wedges. The box method teaches you to see these underlying structures before you draw any surface detail. A head is an egg sitting on a cylinder. An arm is a cylinder. A car is a series of overlapping rectangular boxes. By drawing the underlying geometric structure first — loosely, in light pencil — you establish proportions and perspective before committing to surface details.',
          body2: 'This approach prevents the most common beginner proportion error: starting with a detail (an eye, a fingertip, a door handle) and trying to build outward. The detail is always the wrong size relative to the whole when you start from it. Starting from the structure — the bounding box, the basic proportions — and working inward to detail is how professional illustrators, animators, and fine artists work. It feels backward at first because it delays the satisfying detail work, but the results are incomparably better.',
          steps: [
            'Observe the subject and identify its main geometric shapes — what boxes, spheres, cylinders?',
            'Lightly sketch the bounding box of the entire composition first',
            'Place the major geometric forms within the bounding box',
            'Check proportions — is the head the right size relative to the body?',
            'Add cylindrical and spherical sub-forms over the box structure',
            'Refine with observational detail, tracing the structure you have already established',
            'Erase construction lines when you are satisfied with the form'
          ]
        },
        {
          id: 's5', heading: 'Line 5 — The Lost Edge',
          body: 'In life, not all edges are equally visible. Where two areas of similar value (similar lightness or darkness) meet, the boundary between them seems to dissolve — this is called a lost edge. Where two areas of high contrast (very light against very dark) meet, the edge is sharp, crisp, and clearly defined — a found edge. The strategic distribution of lost and found edges across a drawing is what creates depth, atmosphere, and a sense of where the light is coming from.',
          body2: 'Beginners instinctively outline everything with the same weight and crispness — every edge is a found edge. This produces drawings that look flat, diagrammatic, and over-worked, even if the individual elements are drawn accurately. The fix is to identify which edges the eye naturally sees most clearly (usually the point of highest contrast in the light-source direction) and sharpen only those, while softening or eliminating the rest. A single hard edge surrounded by soft ones draws the viewer\'s eye exactly where you want it.',
          warn: 'You cannot add lost edges with an eraser at the end of a drawing — you must plan for them throughout. Leave uncertain edges undrawn and let the paper do the work.',
          pullQuote: '"A drawing is not a record of what you saw. It is a record of what you chose to pay attention to — and what you had the discipline to leave out."',
          pullQuoteCite: '— Arjun Mehta, ArtCraft Drawing Specialist'
        }
      ],
      supplies: [
        { emoji: '✏️', name: 'Staedtler Mars Lumograph 2B–6B', note: 'The professional standard for sketching pencils' },
        { emoji: '📄', name: 'A4 / A3 layout paper pad', note: 'Slightly transparent — trace-friendly for construction' },
        { emoji: '📓', name: 'Moleskine Art Sketchbook', note: 'Hardback, lay-flat binding, 165gsm paper' },
        { emoji: '⬜', name: 'Faber-Castell Kneaded Eraser', note: 'Lifts graphite without abrading the paper surface' },
        { emoji: '🔧', name: 'Kum Long Point Sharpener', note: 'Produces a long, slender point for fine control' },
        { emoji: '📱', name: 'Line of Action app (free)', note: 'Timed pose references for daily gesture practice' }
      ]
    }
  };

  /* ============================================================
     DOM ELEMENT CREATOR
  ============================================================ */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  /* ============================================================
     STATS BAR
  ============================================================ */
  function renderStats(stats) {
    var bar = document.getElementById('bdStatsBar');
    if (!bar || !stats) return;
    stats.forEach(function (s) {
      var chip = el('div', 'bd-stat-chip');
      chip.appendChild(el('span', 'bd-stat-value', s.value));
      chip.appendChild(el('span', 'bd-stat-label', s.label));
      bar.appendChild(chip);
    });
  }

  /* ============================================================
     GALLERY STRIP
  ============================================================ */
  function renderGallery(images) {
    var grid = document.getElementById('bdGalleryGrid');
    if (!grid || !images) return;
    images.forEach(function (img) {
      var item = el('div', 'bd-gallery-item');
      var pic = document.createElement('img');
      pic.src = img.src; pic.alt = img.caption || ''; pic.loading = 'lazy';
      var ov = el('div', 'bd-gallery-overlay');
      ov.appendChild(el('span', 'bd-gallery-caption-text', img.caption || ''));
      item.appendChild(pic); item.appendChild(ov);
      grid.appendChild(item);
    });
  }

  /* ============================================================
     KEY TAKEAWAYS BOX
  ============================================================ */
  function renderKeyTakeaways(points) {
    var container = document.getElementById('bdKeyTakeaways');
    if (!container || !points || !points.length) return;
    var box = el('div', 'bd-key-takeaways');
    var hdr = el('div', 'bd-kt-header');
    var icon = el('div', 'bd-kt-icon'); icon.innerHTML = '<i class="fa-solid fa-star"></i>';
    hdr.appendChild(icon);
    hdr.appendChild(el('span', 'bd-kt-title', 'Key Takeaways'));
    box.appendChild(hdr);
    var ul = el('ul', 'bd-kt-list');
    points.forEach(function (pt) {
      var li = el('li');
      li.innerHTML = '<i class="fa-solid fa-circle-check bd-kt-check"></i><span>' + pt + '</span>';
      ul.appendChild(li);
    });
    box.appendChild(ul);
    container.appendChild(box);
  }

  /* ============================================================
     SUPPLIES GRID
  ============================================================ */
  function renderSupplies(items) {
    var container = document.getElementById('bdSuppliesGrid');
    if (!container || !items || !items.length) return;
    var section = el('div', 'bd-supplies-section');
    var hdr = el('div', 'bd-supplies-header');
    var icon = el('div', 'bd-supplies-icon'); icon.innerHTML = '<i class="fa-solid fa-bag-shopping"></i>';
    hdr.appendChild(icon);
    hdr.appendChild(el('span', 'bd-supplies-title', 'Recommended Supplies'));
    section.appendChild(hdr);
    var grid = el('div', 'bd-supplies-grid');
    items.forEach(function (item) {
      var card = el('div', 'bd-supply-card');
      card.innerHTML = '<span class="bd-supply-ico">' + item.emoji + '</span>' +
        '<div><p class="bd-supply-name">' + item.name + '</p>' +
        '<p class="bd-supply-note">' + item.note + '</p></div>';
      grid.appendChild(card);
    });
    section.appendChild(grid);
    container.appendChild(section);
  }

  /* ============================================================
     SECTION RENDERER — now handles many more block types
  ============================================================ */
  function renderSection(sec) {
    var frag = document.createDocumentFragment();

    // Heading
    var h = el('h2', 'bd-section-heading', sec.heading);
    h.id = sec.id;
    frag.appendChild(h);

    // First body paragraph
    if (sec.body) { frag.appendChild(el('p', 'bd-para', sec.body)); }

    // Fact chips row
    if (sec.facts && sec.facts.length) {
      var fr = el('div', 'bd-fact-row');
      sec.facts.forEach(function (f) {
        fr.innerHTML += '<span class="bd-fact-chip"><i class="' + f.icon + '"></i>' + f.text + '</span>';
      });
      frag.appendChild(fr);
    }

    // Second body paragraph
    if (sec.body2) { frag.appendChild(el('p', 'bd-para', sec.body2)); }

    // Tip box
    if (sec.tip) {
      var tipBox = el('div', 'bd-tip-box');
      tipBox.innerHTML = '<i class="fa-solid fa-lightbulb bd-tip-icon"></i>' +
        '<p><strong>Studio tip:</strong> ' + sec.tip + '</p>';
      frag.appendChild(tipBox);
    }

    // Warning box
    if (sec.warn) {
      var warnBox = el('div', 'bd-warn-box');
      warnBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation bd-warn-icon"></i><p>' + sec.warn + '</p>';
      frag.appendChild(warnBox);
    }

    // Tall image
    if (sec.tallImg) {
      var tw = el('div', 'bd-tall-img-wrap');
      var ti = document.createElement('img'); ti.src = sec.tallImg.src; ti.alt = sec.tallImg.caption || ''; ti.loading = 'lazy';
      var tc = el('div', 'bd-tall-img-caption', sec.tallImg.caption || '');
      tw.appendChild(ti); tw.appendChild(tc);
      frag.appendChild(tw);
    }

    // Standard inline image
    if (sec.inlineImg) {
      var wrap = el('div', 'bd-inline-img-wrap');
      var img = document.createElement('img');
      img.src = sec.inlineImg.src; img.alt = sec.inlineImg.alt || ''; img.loading = 'lazy';
      wrap.appendChild(img);
      frag.appendChild(wrap);
    }

    // Dual side-by-side images
    if (sec.dualImg && sec.dualImg.length === 2) {
      var dual = el('div', 'bd-dual-img');
      sec.dualImg.forEach(function (d) {
        var fig = document.createElement('figure');
        var dimg = document.createElement('img'); dimg.src = d.src; dimg.alt = d.caption || ''; dimg.loading = 'lazy';
        var dcap = el('figcaption', '', d.caption || '');
        fig.appendChild(dimg); fig.appendChild(dcap);
        dual.appendChild(fig);
      });
      frag.appendChild(dual);
    }

    // Steps list
    if (sec.steps && sec.steps.length) {
      var ol = el('ol', 'bd-step-list');
      sec.steps.forEach(function (step, i) {
        var li = el('li');
        li.innerHTML = '<span class="bd-step-num">' + (i + 1) + '</span><span class="bd-step-text">' + step + '</span>';
        ol.appendChild(li);
      });
      frag.appendChild(ol);
    }

    // Pull quote
    if (sec.pullQuote) {
      var pq = el('div', 'bd-pull-quote');
      var bq = el('blockquote', '', sec.pullQuote);
      if (sec.pullQuoteCite) { bq.innerHTML += '<cite>' + sec.pullQuoteCite + '</cite>'; }
      pq.appendChild(bq);
      frag.appendChild(pq);
    }

    // Dashed divider after each section
    frag.appendChild(el('hr', 'bd-section-divider'));

    return frag;
  }

  /* ============================================================
     TAGS
  ============================================================ */
  function renderTags(tags) {
    var tagsRow = document.getElementById('bdTagsRow');
    if (!tagsRow) return;
    tags.forEach(function (tag) {
      var a = el('a', 'bd-tag', tag);
      a.href = 'blog.html';
      tagsRow.appendChild(a);
    });
  }

  /* ============================================================
     RELATED POSTS GRID
  ============================================================ */
  function renderRelated(slugs) {
    var grid = document.getElementById('bdRelatedGrid');
    if (!grid) return;
    var count = 0;
    slugs.forEach(function (slug) {
      var post = POSTS[slug];
      if (!post || count >= 3) return;
      count++;
      var card = el('a', 'blog-card reveal');
      card.href = 'blog details.html?post=' + slug;
      card.setAttribute('data-category', post.category.toLowerCase());
      card.innerHTML =
        '<div class="blog-photo">' +
          '<img src="' + post.cover + '" alt="' + post.title + '" loading="lazy">' +
          '<span class="blog-cat-tag">' + post.category + '</span>' +
        '</div>' +
        '<div class="blog-body">' +
          '<div class="blog-meta">' + post.date + ' &middot; ' + post.readTime + '</div>' +
          '<h3>' + post.title + '</h3>' +
          '<p>' + post.excerpt + '</p>' +
          '<span class="blog-link">Read more <i class="fa-solid fa-arrow-right"></i></span>' +
        '</div>';
      grid.appendChild(card);
    });
  }

  /* ============================================================
     TOC
  ============================================================ */
  function buildToc(sections) {
    var toc = document.getElementById('bdToc');
    if (!toc) return;
    sections.forEach(function (sec) {
      var a = el('a', '', sec.heading);
      a.href = '#' + sec.id;
      toc.appendChild(a);
    });
  }

  /* ============================================================
     READING PROGRESS BAR
  ============================================================ */
  function initProgressBar() {
    var bar = document.createElement('div');
    bar.className = 'bd-progress-bar'; bar.id = 'bdProgressBar';
    document.body.prepend(bar);
    window.addEventListener('scroll', function () {
      var docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      bar.style.width = (docH > 0 ? Math.min((window.scrollY / docH) * 100, 100) : 0) + '%';
    }, { passive: true });
  }

  /* ============================================================
     TOC ACTIVE TRACKING
  ============================================================ */
  function initTocTracking(sections) {
    var links = document.querySelectorAll('#bdToc a');
    if (!links.length) return;
    var headings = sections.map(function (s) { return document.getElementById(s.id); }).filter(Boolean);
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY + 140;
      var active = headings[0];
      headings.forEach(function (h) { if (h.offsetTop <= scrollY) active = h; });
      links.forEach(function (link) {
        link.classList.toggle('toc-active', link.getAttribute('href') === '#' + (active && active.id));
      });
    }, { passive: true });
  }

  /* ============================================================
     CLIPBOARD & SHARE
  ============================================================ */
  function copyLink() {
    var url = window.location.href;
    if (navigator.clipboard) { navigator.clipboard.writeText(url).then(showToast); }
    else {
      var ta = document.createElement('textarea'); ta.value = url;
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      showToast();
    }
  }
  function showToast() {
    var toast = document.getElementById('bdToast');
    if (!toast) return;
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 2800);
  }

  /* ============================================================
     REACTIONS (like / bookmark)
  ============================================================ */
  function initReactions(post) {
    var likeBtn = document.getElementById('bdLikeBtn');
    var bookmarkBtn = document.getElementById('bdBookmarkBtn');
    var shareInline = document.getElementById('bdShareInline');
    var slug = getSlug();
    var liked = localStorage.getItem('bd-liked-' + slug) === 'true';
    var saved = localStorage.getItem('bd-saved-' + slug) === 'true';
    var count = post.likes + (liked ? 1 : 0);

    function updateLike() {
      if (!likeBtn) return;
      likeBtn.classList.toggle('liked', liked);
      likeBtn.innerHTML = (liked ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>') +
        ' <span>' + count + '</span> Likes';
    }
    function updateBookmark() {
      if (!bookmarkBtn) return;
      bookmarkBtn.classList.toggle('saved', saved);
      bookmarkBtn.innerHTML = saved ? '<i class="fa-solid fa-bookmark"></i> Saved' : '<i class="fa-regular fa-bookmark"></i> Save';
    }

    if (likeBtn) { updateLike(); likeBtn.addEventListener('click', function () { liked = !liked; count = post.likes + (liked ? 1 : 0); localStorage.setItem('bd-liked-' + slug, liked); updateLike(); }); }
    if (bookmarkBtn) { updateBookmark(); bookmarkBtn.addEventListener('click', function () { saved = !saved; localStorage.setItem('bd-saved-' + slug, saved); updateBookmark(); }); }
    if (shareInline) { shareInline.addEventListener('click', copyLink); }
  }

  /* ============================================================
     NEWSLETTER
  ============================================================ */
  function initNewsletter() {
    var form = document.getElementById('bdNewsletterForm');
    var success = document.getElementById('bdNewsletterSuccess');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = Array.prototype.every.call(form.querySelectorAll('[required]'), function (f) { return f.checkValidity(); });
      if (!valid) return;
      if (success) success.classList.add('show');
      form.reset();
      setTimeout(function () { if (success) success.classList.remove('show'); }, 6000);
    });
  }

  /* ============================================================
     SCROLL REVEAL
  ============================================================ */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('in-view'); obs.unobserve(entry.target); }
        });
      }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });
      els.forEach(function (e) { obs.observe(e); });
    } else {
      els.forEach(function (e) { e.classList.add('in-view'); });
    }
  }

  /* ============================================================
     URL SLUG
  ============================================================ */
  function getSlug() {
    return new URLSearchParams(window.location.search).get('post') || 'watercolor-beginners';
  }

  /* ============================================================
     MAIN INIT
  ============================================================ */
  function init() {
    var slug = getSlug();
    var post = POSTS[slug] || POSTS['watercolor-beginners'];

    // Page metadata
    document.title = post.title + ' — ArtCraft Supply Studio';
    var metaDesc = document.getElementById('page-meta-desc');
    if (metaDesc) metaDesc.setAttribute('content', post.excerpt);

    // Share links
    var twitterLink = document.getElementById('bdShareTwitter');
    var fbLink = document.getElementById('bdShareFacebook');
    var copyBtn = document.getElementById('bdShareCopy');
    var pageUrl = encodeURIComponent(window.location.href);
    var pageTitle = encodeURIComponent(post.title);
    if (twitterLink) twitterLink.href = 'https://twitter.com/intent/tweet?text=' + pageTitle + '&url=' + pageUrl;
    if (fbLink) fbLink.href = 'https://www.facebook.com/sharer/sharer.php?u=' + pageUrl;
    if (copyBtn) copyBtn.addEventListener('click', copyLink);

    // Section 1 — Hero
    var els = {
      catPill: document.getElementById('bd-category-pill'),
      catCrumb: document.getElementById('bd-cat-breadcrumb'),
      readTime: document.getElementById('bd-read-time'),
      title: document.getElementById('bd-title'),
      excerpt: document.getElementById('bd-excerpt'),
      author: document.getElementById('bd-author'),
      date: document.getElementById('bd-date')
    };
    if (els.catPill) els.catPill.textContent = post.category;
    if (els.catCrumb) els.catCrumb.textContent = post.category;
    if (els.readTime) els.readTime.textContent = post.readTime;
    if (els.title) els.title.textContent = post.title;
    if (els.excerpt) els.excerpt.textContent = post.excerpt;
    if (els.author) els.author.textContent = post.author;
    if (els.date) els.date.textContent = post.date + ' · ArtCraft Supply Studio';

    // Stats bar
    renderStats(post.stats);

    // Section 2 — Cover
    var coverImg = document.getElementById('bd-cover-img');
    var coverCap = document.getElementById('bd-cover-caption');
    if (coverImg) { coverImg.src = post.cover; coverImg.alt = post.title; }
    if (coverCap) coverCap.textContent = post.coverCaption || '';

    // Gallery strip
    renderGallery(post.gallery);

    // Section 3 — Article
    var introText = document.getElementById('bdIntroText');
    if (introText) introText.textContent = post.introQuote || '';

    renderKeyTakeaways(post.keyTakeaways);

    var sectionsContainer = document.getElementById('bdArticleSections');
    if (sectionsContainer) {
      post.sections.forEach(function (sec) { sectionsContainer.appendChild(renderSection(sec)); });
    }

    renderSupplies(post.supplies);

    buildToc(post.sections);
    renderTags(post.tags || []);

    // Section 4 — Author bio
    var bioName = document.getElementById('bdBioName');
    if (bioName) bioName.textContent = post.author;

    // Section 5 — Related
    renderRelated(post.related || []);

    // Interactions & UI
    initReactions(post);
    initNewsletter();
    initProgressBar();
    initReveal();
    initTocTracking(post.sections);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
