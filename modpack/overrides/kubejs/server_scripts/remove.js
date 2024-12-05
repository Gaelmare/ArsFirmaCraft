// priority: 0

const remove = [
  'totemic:stripped_cedar_wood',
  'totemic:cedar_wood',
  'totemic:stripped_cedar_log',
  'totemic:cedar_log',
  'totemic:cedar_leaves',
  'totemic:cedar_sapling',
  'totemic:cedar_planks',
  'totemic:cedar_button',
  'totemic:cedar_fence',
  'totemic:cedar_fence_gate',
  'totemic:cedar_pressure_plate',
  'totemic:cedar_slab',
  'totemic:cedar_stairs',
  'totemic:cedar_door',
  'totemic:cedar_trapdoor',
  'totemic:cedar_sign',
  'totemic:cedar_hanging_sign',
  'comforts:rope_and_nail',
  'minecraft:flower_banner_pattern',
  'minecraft:creeper_banner_pattern',
  'minecraft:skull_banner_pattern',
  'minecraft:mojang_banner_pattern',
  'minecraft:globe_banner_pattern',
  'minecraft:piglin_banner_pattern',
  'minecraft:torch',
  'supplementaries:pulley_block',
  'supplementaries:speaker_block',
  'supplementaries:hourglass',
  'supplementaries:hat_stand',
  'supplementaries:timber_frame',
  'supplementaries:timber_brace',
  'supplementaries:timber_cross_brace',
  'supplementaries:blue_bomb',
  'supplementaries:bomb',
  'supplementaries:altimeter',
  'supplementaries:slingshot',
  'supplementaries:goblet',
  'supplementaries:weathervane',
  'supplementaries:bubble_blower',
  'supplementaries:gold_door',
  'supplementaries:gold_trapdoor',
  'supplementaries:iron_gate',
  'supplementaries:key',
  'supplementaries:netherite_door',
  'supplementaries:netherite_trapdoor',
  'supplementaries:wrench',
  'supplementaries:soap',
  'supplementaries:flag_white',
  'supplementaries:flag_light_gray',
  'supplementaries:flag_gray',
  'supplementaries:flag_black',
  'supplementaries:flag_red',
  'supplementaries:flag_orange',
  'supplementaries:flag_yellow',
  'supplementaries:flag_lime',
  'supplementaries:flag_green',
  'supplementaries:flag_cyan',
  'supplementaries:flag_light_blue',
  'supplementaries:flag_blue',
  'supplementaries:flag_purple',
  'supplementaries:flag_magenta',
  'supplementaries:flag_pink',
  'supplementaries:crank',
  'supplementaries:wind_vane',
  'supplementaries:safe',
  'supplementaries:planter',
  'supplementaries:cage',
  'supplementaries:crystal_display',
  'supplementaries:doormat',
  'supplementaries:spring_launcher',
  'supplementaries:relayer',
  'supplementaries:lock_block',
  //---------------------------------------------------
  //if it has a recipe WE added it goes above this line
  //FULLY REMOVED
  //if it is being completly removed from the pack it goes below this line
  //DO NOT USE THIS TO GET RID OF VANILLA RECIPES THAT HAVE TFC VERSIONS
  //FOR EXAMPLE minecraft:pistons
  //---------------------------------------------------
  'minecraft:cake',
  'minecraft:pumpkin',
  'minecraft:pumpkin_seeds',
  'minecraft:sand',
  'astikorcarts:wheel',
  'astikorcarts:plow',
  'astikorcarts:supply_cart',
  'astikorcarts:animal_cart',
  "minecraft:shears",
  "minecraft:chain",
  "minecraft:blast_furnace",
  "supplementaries:candle_holder_white",
  'supplementaries:candle_holder',
  "minecraft:stonecutter",
  "minecraft:iron_bars",
  "minecraft:iron_block",
  'minecraft:copper_ingot',
  'supplementaries:daub_frame',
  'supplementaries:daub',
  'supplementaries:daub_brace',
  'supplementaries:daub_cross_brace',
  'supplementaries:sconce',
  'supplementaries:sconce_soul',
  'supplementaries:sconce_lever',
  'supplementaries:stone_tile',
  'supplementaries:stone_tile_stairs',
  'supplementaries:stone_tile_slab',
  'supplementaries:stone_tile_wall',
  'supplementaries:blackstone_tile',
  'supplementaries:blackstone_tile_stairs',
  'supplementaries:blackstone_tile_slab',
  'supplementaries:blackstone_tile_wall',
  'supplementaries:lapis_bricks',
  'supplementaries:lapis_bricks_stairs',
  'supplementaries:lapis_bricks_slab',
  'supplementaries:lapis_bricks_wall',
  'supplementaries:raked_gravel',
  'supplementaries:wild_flax',
  'supplementaries:flax_seeds',
  'supplementaries:flax_block',
  'supplementaries:flax',
  'supplementaries:stone_lamp',
  'supplementaries:end_stone_lamp',
  'supplementaries:deepslate_lamp',
  'supplementaries:blackstone_lamp',
  'supplementaries:bellows',
  'supplementaries:pancake',
];


ServerEvents.recipes(event => {

  event.remove({id: 'supplementaries:ash_bricks'})

  event.remove({mod: 'astikorcarts' })

  event.remove({input: 'minecraft:iron'})

  event.remove({id: 'supplementaries:candle_holders/candle_holder'})

  event.remove({id: 'comforts:sleeping_bag_to_white'})
  event.remove({id: 'comforts:hammock_to_white'})
  event.remove({id: 'comforts:sleeping_bag_white'})
  event.remove({id: 'comforts:hammock_white'})

  let colours = [ //You can use this section to batch remove anything using all colors
  'red',
  'green',
  'brown',
  'blue',
  'purple',
  'cyan',
  'light_gray',
  'gray',
  'pink',
  'lime',
  'yellow',
  'light_blue',
  'magenta',
  'orange',
  'black'
  ].forEach(colour =>[
    event.remove('supplementaries:flag_' + colour),
    event.remove({id: 'supplementaries:candle_holders/candle_holder_' + colour}),
    event.remove({id: 'supplementaries:based_candles/'+colour+'_candle_holder'}),
    event.remove({id: 'comforts:sleeping_bag_' + colour}),
    event.remove({id: 'comforts:hammock_' + colour})
  ])

  event.remove({ mod: 'chalk', output: '#chalk:chalks' })

  function myFunction(value) {
    event.remove({ output: value })
  }

  remove.forEach(myFunction);

  console.log('Hello! The recipe event has fired!')
})
