// priority: 1

let tfc_rocks = [
  'granite',
  'diorite',
  'gabbro',
  'shale',
  'claystone',
  'limestone',
  'conglomerate',
  'dolomite',
  'chert',
  'chalk',
  'rhyolite',
  'basalt',
  'andesite',
  'dacite',
  'quartzite',
  'slate',
  'phyllite',
  'schist',
  'gneiss',
  'marble'
]

let deposit_ores = [
  "native_copper",
  "native_silver",
  "native_gold",
  "cassiterite"
]

let ore_grades = [
  "poor",
  "normal",
  "rich"
]

let tfc_graded_ores = [
  "native_copper",
  "native_gold",
  "hematite",
  "native_silver",
  "cassiterite",
  "bismuthinite",
  "garnierite",
  "malachite",
  "magnetite",
  "limonite",
  "sphalerite",
  "tetrahedrite"
]

let ie_graded_ores = [
  "bauxite",
  "galena",
  "uraninite"
]

let tfc_non_graded_ores =[
  "bituminous_coal",
  "lignite",
  "gypsum",
  "graphite",
  "sulfur",
  "cinnabar",
  "cryolite",
  "saltpeter",
  "sylvite",
  "borax",
  "halite"
]

let tfc_gems = [
  "amethyst",
  "diamond",
  "emerald",
  "lapis_lazuli",
  "opal",
  "pyrite",
  "ruby",
  "sapphire",
  "topaz"
]

let non_tfc_brick = [
  "supplementaries:ash_bricks"
]

ServerEvents.tags('block', event => {

  non_tfc_brick.forEach(brick_block => {
    event.add('tfc:forge_insulation', brick_block)
    event.add('tfc:bloomery_insulation', brick_block)
    event.add('firmalife:oven_insulation', brick_block)
  })

  event.add('firmalife:oven_insulation', '#minecraft:concrete')

})

ServerEvents.tags('item', event => {

  tfc_rocks.forEach(rock =>[
    event.add('forge:cobblestone_slabs', 'tfc:rock/cobble/' + rock + '_slab'),
    event.add('forge:cobblestone_slabs', 'tfc:rock/mossy_cobble/' + rock + '_slab'),
    event.add('minecraft:stone_buttons', 'tfc:rock/button/' + rock),
    event.add('forge:ingots/brick', 'tfc:brick/' + rock)
  ])

  event.add('tfc:coloured_steel_sheet', 'tfc:metal/double_sheet/blue_steel')
  event.add('tfc:coloured_steel_sheet', 'tfc:metal/double_sheet/red_steel')

//  event.remove('minecraft:candles', '#tfc:candles')

  event.add('firmalife:foods/raw_fish', 'tfc:food/calamari')
  event.add('forge:raw_fishes', 'tfc:food/calamari')

  event.add('tfc:chicken_food','minecraft:baked_potato')
  event.add('tfc:compost_greens_high','minecraft:baked_potato')
  event.add('tfc:dog_food','minecraft:baked_potato')
  event.add('tfc:duck_food','minecraft:baked_potato')
  event.add('tfc:foods','minecraft:baked_potato')
  event.add('firmalife:foods/pizza_ingredients','minecraft:baked_potato')
  event.add('tfc:foods/usable_in_salad','minecraft:baked_potato')
  event.add('tfc:foods/usable_in_sandwich','minecraft:baked_potato')
  event.add('tfc:foods/vegetables','minecraft:baked_potato')
  event.add('tfc:goat_food','minecraft:baked_potato')
  event.add('tfc:pig_food','minecraft:baked_potato')
  event.add('tfc:quail_food','minecraft:baked_potato')
  event.add('forge:vegetables','minecraft:baked_potato')

  event.add('forge:chains', 'tfc:metal/chain/bismuth_bronze')
  event.add('forge:chains', 'tfc:metal/chain/black_bronze')
  event.add('forge:chains', 'tfc:metal/chain/bronze')
  event.add('forge:chains', 'tfc:metal/chain/copper')
  event.add('forge:chains', 'tfc:metal/chain/steel')
  event.add('forge:chains', 'tfc:metal/chain/wrought_iron')
  event.add('forge:chains', 'tfc:metal/chain/black_steel')
  event.add('forge:chains', 'tfc:metal/chain/blue_steel')
  event.add('forge:chains', 'tfc:metal/chain/red_steel')
  event.add('forge:chain_meshes', 'kubejs:steel_chain_mesh')
  event.add('forge:chain_meshes', 'kubejs:black_steel_chain_mesh')
  event.add('forge:chain_meshes', 'kubejs:blue_steel_chain_mesh')
  event.add('forge:chain_meshes', 'kubejs:red_steel_chain_mesh')
  event.add('tfc:magma', 'tfc:rock/magma/granite')
  event.add('tfc:magma', 'tfc:rock/magma/diorite')
  event.add('tfc:magma', 'tfc:rock/magma/gabbro')
  event.add('tfc:magma', 'tfc:rock/magma/rhyolite')
  event.add('tfc:magma', 'tfc:rock/magma/basalt')
  event.add('tfc:magma', 'tfc:rock/magma/andesite')
  event.add('tfc:magma', 'tfc:rock/magma/dacite')
  event.add('forge:ingots/zinc', 'tfc:metal/ingot/zinc')
  event.add('tfc:top_cut_gems', 'tfc:gem/diamond')
  event.add('tfc:top_cut_gems', 'tfc:gem/ruby')
  event.add('tfc:top_cut_gems', 'tfc:gem/sapphire')
  event.add('tfc:coral', 'tfc:coral/fire_coral')
  event.add('tfc:coral', 'tfc:coral/tube_coral')
  event.add('tfc:coral', 'tfc:coral/brain_coral')
  event.add('tfc:coral', 'tfc:coral/horn_coral')
  event.add('forge:bells', 'tfc:brass_bell')
  event.add('forge:bells', 'tfc:bronze_bell')
  event.add('forge:bells', 'minecraft:bell')
  event.add('forge:ingots/zinc', 'tfc:metal/ingot/zinc')
  event.add('forge:copper_pipe', 'firmalife:copper_pipe')
  event.add('minecraft:axes', '#tfc:axes')

})


ServerEvents.recipes(event => {

  event.recipes.tfc.welding('kubejs:steel_chain_mesh', 'tfc:metal/chain/steel', 'tfc:metal/chain/steel',4)
  event.recipes.tfc.welding('kubejs:black_steel_chain_mesh', 'tfc:metal/chain/black_steel', 'tfc:metal/chain/black_steel',5)
  event.recipes.tfc.welding('kubejs:blue_steel_chain_mesh', 'tfc:metal/chain/blue_steel', 'tfc:metal/chain/blue_steel',6)
  event.recipes.tfc.welding('kubejs:red_steel_chain_mesh', 'tfc:metal/chain/red_steel', 'tfc:metal/chain/red_steel',6)


  event.recipes.tfc.welding('tfc:metal/double_sheet/black_steel', 'tfc:metal/sheet/black_steel', 'tfc:metal/sheet/black_steel',5)
  event.recipes.tfc.welding('tfc:metal/double_sheet/blue_steel', 'tfc:metal/sheet/blue_steel', 'tfc:metal/sheet/blue_steel',6)
  event.recipes.tfc.welding('tfc:metal/double_sheet/red_steel', 'tfc:metal/sheet/red_steel', 'tfc:metal/sheet/red_steel',6)


  event.shapeless('4x kubejs:sugarcane_strip',[
      'tfc:food/sugarcane',
      '#tfc:knives'
  ]).damageIngredient(Ingredient.of('#tfc:knives'))


  event.shapeless('tfc:candle',[
    'supplementaries:soap',
    '#tfc:candles'
  ])
/*
  event.shaped('4x minecraft:bricks', [
    'BMB',
    'MBM',
    'BMB'recipe
  ],{
    B: 'minecraft:brick',
    M: 'tfc:mortar'
  })
  */

// Still here, after all these years!
  event.shaped('minecraft:bucket', [
    'IRI',
    'IBI',
    ' I '
  ],{
    R: 'tfc:metal/bucket/red_steel',
    B: 'tfc:metal/bucket/blue_steel',
    I: 'tfc:metal/ingot/wrought_iron'
  }).id('essentialsplus:you_won_tfc')

  event.recipes.tfc.barrel_sealed(8000)
    .outputItem('tfc:soaked_papyrus_strip')
    .inputs('kubejs:sugarcane_strip', TFC.fluidStackIngredient('minecraft:water', 200))

    event.replaceInput(
      { output: 'tfc:cake' },
      '#tfc:musk_ox_food',
      '#tfc:foods/flour'
      )

  event.replaceInput(
    { input: 'minecraft:copper_block' },
    'minecraft:copper_block',
    'tfc:metal/block/copper'
    )

  event.replaceInput(
    { input: 'minecraft:slime_ball' },
    'minecraft:slime_ball',
    'tfc:glue'
    )

  event.replaceInput(
    { input: 'minecraft:torch'},
    'minecraft:torch',
    'tfc:torch'
    )

  event.replaceInput(
    { input: 'minecraft:crafting_table' },
    'minecraft:crafting_table',
    '#tfc:workbenches'
    )
})

ItemEvents.foodEaten(['minecraft:pumpkin_pie',
                      'firmalife:food/cooked_pie'
  ],event =>{
  event.server.schedule(1, callback => {
    event.player.giveInHand('firmalife:pie_pan')
  })
}

)
