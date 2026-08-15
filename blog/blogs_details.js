(function () {
  'use strict';

  var POSTS = {

    
    'watercolor-beginners': {
      category: 'Painting', readTime: '8 min read',
      title: 'Watercolor Mastery for Artists: Layering, Pigments & Brushwork Techniques',
      excerpt: 'Discover how to control water flow, mix vibrant artist-grade pigments, and master delicate washes to elevate your watercolor artwork from beginner sketches to breathtaking studio paintings.',
      author: 'Maya Rao, Studio Lead', date: 'Jul 18, 2026',
      cover: 'images/blog-featured-art.png',
      coverCaption: 'Studio watercolor painting session at ArtCraft Studio — Hyderabad',
      introQuote: 'Watercolour punishes impatience and rewards observation. The moment you learn to wait for the paint, everything changes.',
      tags: ['Watercolor', 'Painting', 'Beginner', 'Brushes', 'Paper', 'Technique'],
      likes: 58,
      related: ['paints-colors', 'brushes-palette-knives', 'canvas-priming'],
      stats: [
        { value: '5', label: 'Mastery Lessons' },
        { value: '8 min', label: 'Read Time' },
        { value: '250+', label: 'Artists Trained' },
        { value: '3', label: 'Brush Types' }
      ],
      gallery: [
        { src: 'images/blog-featured-art.png', caption: 'Watercolor layering and brushwork techniques' },
        { src: 'images/blog-paints-art.png', caption: 'Mixing pure pigment washes on porcelain palette' },
        { src: 'images/blog-brushes-art.png', caption: 'Fine Kolinsky sable round brushes for details' }
      ],
      keyTakeaways: [
        'Never go back into wet paint — wait until it is completely dry before adding another layer.',
        'Use at least 300 gsm cold-press paper; anything thinner will buckle and ruin your wash.',
        'Keep your brush loaded with water — watercolour should flow like skim milk, not toothpaste.',
        'Limit your palette to 6 split-primary colours to begin with. You can mix any vibrant hue.',
        'Paint backgrounds first, details last — building luminosity from light to dark.'
      ],
      sections: [
        {
          id: 's1', heading: 'Lesson 1 — Overworking Wet Paint & Timing Washes',
          body: 'The number one error beginners make with watercolour is returning to a wash that is still wet. The moment your brush touches wet pigment a second time, the fibres disturb the pigment particles settling into the paper, producing a permanent cloudy bloom.',
          body2: 'The solution is patient timing. Set a timer or work on two paintings simultaneously while one dries naturally.',
          tip: 'Work on two paintings simultaneously. While one dries, you paint on the other.',
          tallImg: { src: 'images/blog-featured-art.png', caption: 'Wet-on-wet watercolour wash drying naturally — patience is the technique' }
        },
        {
          id: 's2', heading: 'Lesson 2 — Paper GSM Weight & Cold-Press Texture Selection',
          body: 'For watercolour you need cold-press paper at a minimum of 200 gsm, and ideally 300 gsm if you plan to use wet-on-wet techniques. Cold-press has a slight tooth that holds pigment without destroying brushwork.',
          body2: 'Hot-press paper is smoother and gives crisp fine details for botanical illustration. Rough press is heavily textured for granulating landscapes.',
          tip: 'Stretch your paper before painting. Soak a sheet for two minutes, tape edges to a board with gummed tape, and let it dry flat.',
          dualImg: [
            { src: 'images/blog-canvas-art.png', caption: 'Cold-press 300 gsm paper texture' },
            { src: 'images/children-painting-hero.png', caption: 'Children and beginners painting with watercolors' }
          ],
          facts: [
            { icon: 'fa-solid fa-weight-hanging', text: 'Min. 300 gsm for watercolour' },
            { icon: 'fa-solid fa-droplet', text: 'Soak & stretch for zero buckling' },
            { icon: 'fa-solid fa-border-top-left', text: 'Cold-press texture recommended' }
          ]
        },
        {
          id: 's3', heading: 'Lesson 3 — Water-to-Pigment Ratios & Flow Control',
          body: 'Watercolour without water is just coloured powder stuck to a brush. The paint needs to be fluid enough to flow freely into paper fibres.',
          body2: 'Test your mixture on scrap paper before committing to your main sheet. The paint should flow in a controlled stream when tipped.',
          warn: 'Never leave brushes resting in the water jar between strokes. Rest them flat or tip-up in a holder.',
          inlineImg: { src: 'images/blog-brushes-art.png', alt: 'Brushes and water jars set up for watercolour painting' }
        }
      ],
      supplies: [
        { emoji: '🖌️', name: 'Winsor & Newton Cotman Watercolor Set', note: 'Student grade, excellent pigment for beginners' },
        { emoji: '📄', name: 'Fabriano Artistico 300gsm Cold-Press', note: 'Best value 100% cotton paper' },
        { emoji: '🎨', name: 'Daniel Smith Essentials 6 Tube Set', note: 'Professional split-primary pigments' },
        { emoji: '💧', name: 'Porcelain palette & water jars', note: 'Stays clean and keeps color mixes true' }
      ]
    },

    
    'colored-pencils': {
      category: 'Drawing & Sketching', readTime: '6 min read',
      title: 'Drawing & Sketching: Mastering Graphite & Charcoal Shading',
      excerpt: 'From light values to dark shadows, explore cross-hatching, blending stumps, and charcoal techniques for lifelike portrait and landscape sketching.',
      author: 'Arjun Mehta, Drawing Specialist', date: 'Jul 12, 2026',
      cover: 'images/blog-drawing-art.png',
      coverCaption: 'Graphite pencil and charcoal artwork session at ArtCraft Studio — Hyderabad',
      introQuote: 'A great drawing is built not from lines, but from the rhythm of light, shadow, and tone.',
      tags: ['Drawing', 'Sketching', 'Graphite', 'Charcoal', 'Shading', 'Technique'],
      likes: 48,
      related: ['paper-arts', 'canvas-priming', 'watercolor-beginners'],
      stats: [
        { value: '6B–2H', label: 'Pencil Grade Range' },
        { value: '6 min', label: 'Read Time' },
        { value: '300+', label: 'Students Trained' },
        { value: '3', label: 'Shading Methods' }
      ],
      gallery: [
        { src: 'images/blog-drawing-art.png', caption: 'Detailed graphite portrait sketch in progress' },
        { src: 'images/blog-paper-art.png', caption: 'Textured paper surface for charcoal blending' },
        { src: 'images/blog-canvas-art.png', caption: 'Studio drawing setup with easels and pencils' }
      ],
      keyTakeaways: [
        'Master value range from 2H (light values) to 6B (deep dark shadows).',
        'Use kneaded erasers to lift highlights cleanly without abrading cotton paper fibers.',
        'Apply tortillons (blending stumps) in circular motions for smooth skin tones and gradients.',
        'Fix charcoal sketches with workable spray fixative to prevent smudging.',
        'Keep a light wrist touch — pressure builds tone, not harsh gouged lines.'
      ],
      sections: [
        {
          id: 's1', heading: 'Graphite Grades & Charcoal Selection',
          body: 'Drawing is the foundation of all visual art. Understanding hard (H) vs soft (B) graphite pencils allows you to build luminous light values and deep velvet blacks across your sketchbook.',
          body2: 'Vine charcoal offers instant gestural freedom for large quick studies, while compressed charcoal sticks provide intense jet-black contrast for finished studio drawings.',
          tip: 'Sharpen drawing pencils with a utility knife to expose 1cm of lead for broad side-shading.'
        }
      ],
      supplies: [
        { emoji: '✏️', name: 'Faber-Castell 9000 Drawing Pencil Set', note: 'Full 12-pencil range from 8B to 2H' },
        { emoji: '🪵', name: 'Coates Willow Charcoal Sticks', note: 'Natural organic vine charcoal' },
        { emoji: '⚪', name: 'Faber-Castell Kneaded Eraser', note: 'Lifts graphite highlights without residue' }
      ]
    },

    'paper-arts': {
      category: 'Paper & Canvas', readTime: '5 min read',
      title: 'Paper Arts & Quilling: Crafting 3D Sculptural Paper Masterpieces',
      excerpt: 'Transform heavy cardstock, handmade origami sheets, and textured paper into delicate 3D paper sculptures, quilled floral art, and embossed paper designs.',
      author: 'Aanya Sharma, Paper Craft Specialist', date: 'Jul 5, 2026',
      cover: 'images/blog-paper-art.png',
      coverCaption: 'Paper quilling and 3D paper craft artwork at ArtCraft Studio — Hyderabad',
      introQuote: 'Paper is more than a surface — it is a structural sculpture waiting to be folded, quilled, and brought to life.',
      tags: ['Paper Arts', 'Quilling', 'Origami', '3D Craft', 'Sculpture', 'Paper'],
      likes: 42,
      related: ['canvas-priming', 'colored-pencils', 'brushes-palette-knives'],
      stats: [
        { value: '3D', label: 'Sculptural Paper' },
        { value: '5 min', label: 'Read Time' },
        { value: '180+', label: 'Artists Trained' },
        { value: '4', label: 'Paper GSM Weights' }
      ],
      gallery: [
        { src: 'images/blog-paper-art.png', caption: 'Intricate paper quilling peacocks and floral art' },
        { src: 'images/blog-canvas-art.png', caption: 'Primed paper and linen canvas textures' },
        { src: 'images/blog-drawing-art.png', caption: 'Precision sketching for paper artwork guides' }
      ],
      keyTakeaways: [
        'Select paper weight between 120 gsm and 220 gsm for ideal quilling elasticity and structural hold.',
        'Use slotted quilling tools for tight coils, and needle tools for open, fluid scroll shapes.',
        'Apply acid-free PVA glue sparingly with a fine precision tip to prevent paper warping.',
        'Score all fold lines lightly with a bone folder before shaping 3D origami structures.',
        'Frame quilled artwork in deep shadow-box frames to protect delicate 3D paper layers from dust.'
      ],
      sections: [
        {
          id: 's1', heading: 'The Art of Quilling — Coils, Scrolls & Fused Strips',
          body: 'Paper quilling involves rolling, shaping, and gluing narrow paper strips to form intricate decorative artwork. From vibrant mandala spirals to delicate floral petals, quilling combines geometric precision with organic grace.',
          body2: 'To master tight coils and teardrop rolls, start with 3mm to 5mm quilling paper strips. Uniform tension while rolling on a slotted needle tool ensures consistent coil sizes across complex compositions.',
          tip: 'Use a circle sizing board to ensure all flower petals match in diameter before gluing.'
        },
        {
          id: 's2', heading: 'Paper Selection — GSM Weights & Texture Varieties',
          body: 'Not all paper reacts the same to folding and rolling. Texturing cardstock with 160 gsm gives maximum structural strength for standing 3D sculptures, whereas 90 gsm handmade cotton paper offers rich fiber character for organic flower petals.',
          body2: 'Avoid glossy coated papers as glue cannot penetrate the surface seal. Stick to matte, un-coated acid-free cotton rag or premium cardstock.',
          tip: 'Bone folders prevent fiber tearing along folded paper edges.'
        }
      ],
      supplies: [
        { emoji: '📄', name: 'ArtCraft Quilling Paper Strips 5mm', note: 'Acid-free, 160 gsm vibrant color pack' },
        { emoji: '🖋️', name: 'Slotted & Needle Quilling Tool Set', note: 'Dual stainless steel tips with ergonomic grip' },
        { emoji: '🧴', name: 'Fine-tip Acid-free Craft PVA Glue', note: 'Dries crystal clear without buckling paper' },
        { emoji: '📐', name: 'Quilling Template Board & Pins', note: 'Precision sizing template for floral petals' }
      ]
    },

    'canvas-priming': {
      category: 'Paper & Canvas', readTime: '4 min read',
      title: 'Paper & Canvas Selection: Priming, Gesso & Surface Textures',
      excerpt: 'Learn how paper GSM weights, cold-pressed textures, and triple-gessoed linen canvases affect paint absorption, vibrancy, and longevity.',
      author: 'Vikram Verma, Studio Materials Director', date: 'Jun 28, 2026',
      cover: 'images/blog-canvas-art.png',
      coverCaption: 'Stretched linen canvas priming session at ArtCraft Studio — Hyderabad',
      introQuote: 'The foundation of every enduring masterpiece lies in the quality of its ground and canvas preparation.',
      tags: ['Canvas', 'Gesso', 'Priming', 'Linen', 'Cotton Duck', 'Paper'],
      likes: 35,
      related: ['paints-colors', 'brushes-palette-knives', 'watercolor-beginners'],
      stats: [
        { value: '3', label: 'Gesso Layers' },
        { value: '4 min', label: 'Read Time' },
        { value: '450gsm', label: 'Linen Canvas Weight' },
        { value: '100%', label: 'Archival Standard' }
      ],
      gallery: [
        { src: 'images/blog-canvas-art.png', caption: 'Applying acrylic gesso to stretched raw linen canvas' },
        { src: 'images/blog-brushes-art.png', caption: 'Wide priming brushes and palette knife application' },
        { src: 'images/blog-paints-art.png', caption: 'Testing paint luminosity on gessoed vs raw canvas' }
      ],
      keyTakeaways: [
        'Triple-gesso raw canvas to seal cotton fibers against oil paint acid decay.',
        'Sandal lightly with 220-grit sandpaper between gesso coats for silk-smooth painting surfaces.',
        'Choose Belgian linen over cotton duck for superior tensile strength and archival permanence.',
        'Use cold-press 300 gsm paper for heavy watercolor washes to avoid buckling.',
        'Toned grounds (burnt sienna or neutral grey) establish immediate contrast harmony.'
      ],
      sections: [
        {
          id: 's1', heading: 'Understanding Gesso Grounds & Surface Preparation',
          body: 'Gesso is an acrylic binder mixed with chalk, gypsum, and titanium dioxide pigment. It seals porous canvas fibers while providing the ideal tooth for oil and acrylic paints.',
          body2: 'Applying 2 to 3 thin, criss-cross layers of gesso creates a flexible, durable ground that prevents oil paint solvents from rotting raw canvas over decades.',
          tip: 'Tint your gesso with a touch of raw umber or yellow ochre to eliminate intimidating stark white canvas.'
        }
      ],
      supplies: [
        { emoji: '🖼️', name: 'Belgian Linen Canvas Roll 450gsm', note: 'Heavyweight, archival fine-weave linen' },
        { emoji: '🖌️', name: 'Liquitex Professional Acrylic Gesso', note: 'High-opacity, flexible white ground' },
        { emoji: '🧹', name: '2-inch Wide Flat Hake Priming Brush', note: 'Smooth, streak-free gesso application' }
      ]
    },

    'brushes-palette-knives': {
      category: 'Brushes', readTime: '4 min read',
      title: 'Brushes & Palette Knives: Master Brush Strokes & Impasto Textures',
      excerpt: 'Discover which brush shapes — flat, filbert, fan, or round — create dynamic strokes, and how palette knives build dramatic impasto textures.',
      author: 'Kabir Mehta, Master Painter', date: 'Jun 20, 2026',
      cover: 'images/blog-brushes-art.png',
      coverCaption: 'Fine artist paintbrushes and palette knives at ArtCraft Studio — Hyderabad',
      introQuote: 'Brushes dictate your rhythm; palette knives carve your energy directly onto the canvas.',
      tags: ['Brushes', 'Palette Knives', 'Impasto', 'Technique', 'Acrylic', 'Oil'],
      likes: 51,
      related: ['paints-colors', 'watercolor-beginners', 'colored-pencils'],
      stats: [
        { value: '4', label: 'Essential Shapes' },
        { value: '4 min', label: 'Read Time' },
        { value: 'Sable', label: 'Natural Hair' },
        { value: 'Stainless', label: 'Steel Knives' }
      ],
      gallery: [
        { src: 'images/blog-brushes-art.png', caption: 'Assorted filbert, flat, and round sable brushes' },
        { src: 'images/blog-paints-art.png', caption: 'Impasto paint mixing with stainless steel palette knives' },
        { src: 'images/blog-featured-art.png', caption: 'Detail brushwork on watercolor landscape' }
      ],
      keyTakeaways: [
        'Filbert brushes combine the coverage of flat brushes with the soft blended edges of round brushes.',
        'Flexible stainless steel palette knives allow thick, sculptural impasto strokes without destroying canvas fibers.',
        'Clean oil brushes in natural solvent and shape bristles with brush soap before drying horizontally.',
        'Use synthetic sable for heavy-body acrylics, and genuine Kolinsky sable for delicate watercolor washes.'
      ],
      sections: [
        {
          id: 's1', heading: 'Selecting Brush Shapes for Architectural & Organic Strokes',
          body: 'Understanding brush hair physics transforms how paint lands on canvas. Flat brushes deliver crisp sharp edges for urban landscapes, while filberts excel at organic portraits and foliage curves.',
          body2: 'Palette knives inject raw sculptural energy. By loading paint onto the back of an offset trowel knife, you can slice thick clean color ridges across wet paint without muddying layers beneath.',
          tip: 'Store brushes lying flat or hanging tip-down to prevent water from degrading internal ferrule glue.'
        }
      ],
      supplies: [
        { emoji: '🖌️', name: 'Da Vinci Kolinsky Sable Round Set', note: 'Unmatched water retention & needle point' },
        { emoji: '🔪', name: 'RGM Italian Stainless Steel Palette Knives', note: 'Flexible offset trowel blades' },
        { emoji: '🧼', name: 'The Masters Brush Cleaner & Preserver', note: 'Restores stiff bristles and cleans pigment' }
      ]
    },

    'paints-colors': {
      category: 'Paints & Colors', readTime: '5 min read',
      title: 'Paints & Colors: Mastering Color Wheels & Lightfast Pigment Mixing',
      excerpt: 'Understand primary color temperature, complementary contrast, and lightfast ratings to mix clean, vibrant hues without muddying your palette.',
      author: 'Maya Rao & Studio Team', date: 'Jun 14, 2026',
      cover: 'images/blog-paints-art.png',
      coverCaption: 'Oil and acrylic color mixing palette at ArtCraft Studio — Hyderabad',
      introQuote: 'Color harmony is not accidental — it is the science of lightfast pigments meeting color temperature awareness.',
      tags: ['Paints', 'Colors', 'Color Mixing', 'Pigments', 'Lightfast', 'Acrylic', 'Oil'],
      likes: 64,
      related: ['brushes-palette-knives', 'canvas-priming', 'watercolor-beginners'],
      stats: [
        { value: '12', label: 'Color Wheel Hues' },
        { value: '5 min', label: 'Read Time' },
        { value: 'ASTM 1', label: 'Max Lightfastness' },
        { value: 'Warm/Cool', label: 'Split Primaries' }
      ],
      gallery: [
        { src: 'images/blog-paints-art.png', caption: 'Glass color palette with vibrant acrylic paint tubes' },
        { src: 'images/blog-brushes-art.png', caption: 'Mixing clean secondary hues with palette spatula' },
        { src: 'images/blog-featured-art.png', caption: 'Luminous glazing on dry oil painting layers' }
      ],
      keyTakeaways: [
        'Split-primary palettes (warm red/cool red, warm blue/cool blue, warm yellow/cool yellow) prevent muddy secondary mixes.',
        'Always check the ASTM lightfastness rating (I or II) on paint tubes for 100+ year gallery permanence.',
        'Use glass or porcelain palettes — plastic absorbs oil binders and stains pigment true values.',
        'Glaze thin transparent layers over dry opaque underpaintings for glowing luminosity.'
      ],
      sections: [
        {
          id: 's1', heading: 'The Split-Primary Palette & Color Temperature Science',
          body: 'Mixing pure oranges, greens, and purples requires understanding bias. A cool red (Quinacridone) mixed with cool blue (Ultramarine) produces radiant violet, whereas warm Cadmium Red contains yellow bias that turns purple into dull brown.',
          body2: 'By mastering a 6-tube split primary palette, you eliminate color mud forever while reducing studio tube clutter.',
          tip: 'Add a tiny dab of burnt umber to tone down neon greens for realistic landscape trees.'
        }
      ],
      supplies: [
        { emoji: '🎨', name: 'Golden Heavy Body Acrylic Split Primary Set', note: 'Pure single-pigment lightfast colors' },
        { emoji: '🪟', name: 'Tempered Glass Studio Mixing Palette', note: 'Easy razor scraping & true color neutrality' },
        { emoji: '💧', name: 'Acrylic Retarder & Slo-Glo Medium', note: 'Extends open drying time for seamless blends' }
      ]
    },

    
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

    
    'store-art-supplies': {
      category: 'Brushes', readTime: '4 min read',
      title: 'Art Tools & Studio Care: Preserving Paints, Brushes & Easels',
      excerpt: 'Keep brush bristles smooth with natural soaps, prevent acrylic paint tubes from hardening, and organize studio tools for maximum lifespan.',
      author: 'Karan Sharma, Studio Manager', date: 'Jun 6, 2026',
      cover: 'images/blog-tools-art.png',
      coverCaption: 'Organized studio tools and paint storage at ArtCraft Studio — Hyderabad',
      introQuote: 'Good storage is an act of respect for your craft — a well-maintained tool lasts decades.',
      tags: ['Storage', 'Art Supplies', 'Brushes', 'Organisation', 'Studio Care'],
      likes: 39,
      related: ['brushes-palette-knives', 'paints-colors', 'colored-pencils'],
      stats: [
        { value: '10+yrs', label: 'Tool Lifespan' },
        { value: '4 min', label: 'Read Time' },
        { value: '100%', label: 'Clean Bristle Guarantee' }
      ],
      gallery: [
        { src: 'images/blog-tools-art.png', caption: 'Organized workbench with studio tools and easels' },
        { src: 'images/blog-brushes-art.png', caption: 'Fine brushes stored tip-up in ceramic holders' },
        { src: 'images/blog-paints-art.png', caption: 'Sealed paint tubes arranged on color rack' }
      ],
      keyTakeaways: [
        'Wipe paint tube threads with a damp cloth before capping to prevent cap freezing.',
        'Never store paintbrushes resting on their bristles — always store flat or tip-up in brush jars.',
        'Store canvas rolls and paper flat in climate-controlled spaces away from humidity.',
        'Clean oil and acrylic brushes thoroughly with natural brush soap after every session.'
      ],
      sections: [
        {
          id: 's1', heading: 'Studio Tool Maintenance & Storage Hygiene',
          body: 'Proper tool preservation saves thousands of rupees over an artist\'s career while ensuring your brushes maintain needle points and flexible spring.',
          body2: 'Acrylic paints harden permanently if exposed to air; cleaning tube caps prevents dry crust formation that ruins tube seals.',
          tip: 'Use conditioning brush preserver soap to reshape bent sable bristles overnight.'
        }
      ],
      supplies: [
        { emoji: '🧼', name: 'The Masters Brush Cleaner 1oz', note: 'Restores stiff acrylic & oil bristles' },
        { emoji: '🗄️', name: 'ArtCraft Wooden Studio Supply Organizer', note: 'Solid beechwood rack for tools & tubes' },
        { emoji: '🧴', name: 'Safflower Oil Brush Wash & Cleaner', note: 'Solvent-free natural cleaner for oil paints' }
      ]
    },

    
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

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

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

  function renderSection(sec) {
    var frag = document.createDocumentFragment();

    
    var h = el('h2', 'bd-section-heading', sec.heading);
    h.id = sec.id;
    frag.appendChild(h);

    if (sec.body) { frag.appendChild(el('p', 'bd-para', sec.body)); }

    if (sec.facts && sec.facts.length) {
      var fr = el('div', 'bd-fact-row');
      sec.facts.forEach(function (f) {
        fr.innerHTML += '<span class="bd-fact-chip"><i class="' + f.icon + '"></i>' + f.text + '</span>';
      });
      frag.appendChild(fr);
    }

    if (sec.body2) { frag.appendChild(el('p', 'bd-para', sec.body2)); }


    if (sec.tip) {
      var tipBox = el('div', 'bd-tip-box');
      tipBox.innerHTML = '<i class="fa-solid fa-lightbulb bd-tip-icon"></i>' +
        '<p><strong>Studio tip:</strong> ' + sec.tip + '</p>';
      frag.appendChild(tipBox);
    }

    if (sec.warn) {
      var warnBox = el('div', 'bd-warn-box');
      warnBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation bd-warn-icon"></i><p>' + sec.warn + '</p>';
      frag.appendChild(warnBox);
    }

    if (sec.tallImg) {
      var tw = el('div', 'bd-tall-img-wrap');
      var ti = document.createElement('img'); ti.src = sec.tallImg.src; ti.alt = sec.tallImg.caption || ''; ti.loading = 'lazy';
      var tc = el('div', 'bd-tall-img-caption', sec.tallImg.caption || '');
      tw.appendChild(ti); tw.appendChild(tc);
      frag.appendChild(tw);
    }

    if (sec.inlineImg) {
      var wrap = el('div', 'bd-inline-img-wrap');
      var img = document.createElement('img');
      img.src = sec.inlineImg.src; img.alt = sec.inlineImg.alt || ''; img.loading = 'lazy';
      wrap.appendChild(img);
      frag.appendChild(wrap);
    }

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

    if (sec.steps && sec.steps.length) {
      var ol = el('ol', 'bd-step-list');
      sec.steps.forEach(function (step, i) {
        var li = el('li');
        li.innerHTML = '<span class="bd-step-num">' + (i + 1) + '</span><span class="bd-step-text">' + step + '</span>';
        ol.appendChild(li);
      });
      frag.appendChild(ol);
    }

   
    if (sec.pullQuote) {
      var pq = el('div', 'bd-pull-quote');
      var bq = el('blockquote', '', sec.pullQuote);
      if (sec.pullQuoteCite) { bq.innerHTML += '<cite>' + sec.pullQuoteCite + '</cite>'; }
      pq.appendChild(bq);
      frag.appendChild(pq);
    }

    
    frag.appendChild(el('hr', 'bd-section-divider'));

    return frag;
  }

  function renderTags(tags) {
    var tagsRow = document.getElementById('bdTagsRow');
    if (!tagsRow) return;
    tags.forEach(function (tag) {
      var a = el('a', 'bd-tag', tag);
      a.href = 'blog.html';
      tagsRow.appendChild(a);
    });
  }

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

  function buildToc(sections) {
    var toc = document.getElementById('bdToc');
    if (!toc) return;
    sections.forEach(function (sec) {
      var a = el('a', '', sec.heading);
      a.href = '#' + sec.id;
      toc.appendChild(a);
    });
  }

  function initProgressBar() {
    var bar = document.createElement('div');
    bar.className = 'bd-progress-bar'; bar.id = 'bdProgressBar';
    document.body.prepend(bar);
    window.addEventListener('scroll', function () {
      var docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      bar.style.width = (docH > 0 ? Math.min((window.scrollY / docH) * 100, 100) : 0) + '%';
    }, { passive: true });
  }

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

  
  function clearContainers() {
    var ids = [
      'bdStatsBar',
      'bdGalleryGrid',
      'bdKeyTakeaways',
      'bdArticleSections',
      'bdSuppliesGrid',
      'bdTagsRow',
      'bdRelatedGrid',
      'bdToc'
    ];
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.innerHTML = '';
    });
  }

  function getSlug() {
    return new URLSearchParams(window.location.search).get('post') || 'watercolor-beginners';
  }

  function init() {
    clearContainers();
    window.scrollTo(0, 0);

    var slug = getSlug();
    var post = POSTS[slug] || POSTS['watercolor-beginners'];

    
    document.title = post.title + ' — ArtCraft Supply Studio';
    var metaDesc = document.getElementById('page-meta-desc');
    if (metaDesc) metaDesc.setAttribute('content', post.excerpt);

    
    var twitterLink = document.getElementById('bdShareTwitter');
    var fbLink = document.getElementById('bdShareFacebook');
    var copyBtn = document.getElementById('bdShareCopy');
    var pageUrl = encodeURIComponent(window.location.href);
    var pageTitle = encodeURIComponent(post.title);
    if (twitterLink) twitterLink.href = 'https://twitter.com/intent/tweet?text=' + pageTitle + '&url=' + pageUrl;
    if (fbLink) fbLink.href = 'https://www.facebook.com/sharer/sharer.php?u=' + pageUrl;
    if (copyBtn) copyBtn.addEventListener('click', copyLink);

    
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

    
    renderStats(post.stats);

    
    var coverImg = document.getElementById('bd-cover-img');
    var coverCap = document.getElementById('bd-cover-caption');
    if (coverImg) { coverImg.src = post.cover; coverImg.alt = post.title; }
    if (coverCap) coverCap.textContent = post.coverCaption || '';

   
    renderGallery(post.gallery);

    
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

    
    var bioName = document.getElementById('bdBioName');
    if (bioName) bioName.textContent = post.author;

    
    renderRelated(post.related || []);

    
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
