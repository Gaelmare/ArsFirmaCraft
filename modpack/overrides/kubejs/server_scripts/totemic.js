// priority: 1

ServerEvents.recipes(event => {

  event.remove({ input: 'totemic:cedar_planks', output: 'minecraft:stick'})

  event.remove({ id: 'totemic:cedar_hanging_sign'})

  event.replaceOutput({ input: 'totemic:buffalo_hide' , output: 'minecraft:leather'},
   'minecraft:leather', 'tfc:medium_raw_hide')

  event.replaceInput(
    { input: 'totemic:cedar_planks' },
    'totemic:cedar_planks',
    'tfc:wood/planks/white_cedar'
  )

  event.replaceInput(
    { input: 'totemic:cedar_leaves' },
    'totemic:cedar_leaves',
    '#minecraft:leaves'
  )



  event.remove({ id: 'totemic:wind_chime' })

  event.shaped('totemic:wind_chime', [
    'LLL',
    'SSS',
    'PPP'
  ],
  {
    L: '#totemic:cedar_logs',
    S: '#forge:string',
    P: '#forge:copper_pipe'
  })



//  event.replaceInput(
//    { input: 'totemic:buffalo_hide' },
//    'totemic:buffalo_hide',
//    '#forge:leather'
//    )

  event.replaceInput(
    { output: 'totemic:totem_whittling_knife' },
    'minecraft:iron_ingot',
    'tfc:metal/knife_blade/copper'
  )

  event.recipes.tfc.anvil('2x totemic:iron_bells', 'tfc:metal/ingot/wrought_iron', ['draw_not_last','upset_not_last','bend_last']).tier(3)

})

ServerEvents.tags('item', event => {
    event.remove('forge:leather', 'totemic:buffalo_hide')
    //event.add('minecraft:logs_that_burn', '#tfc:firepit_logs')
    const logs = event.get('tfc:firepit_logs').getObjectIds()
    const blacklist = Ingredient.of(/minecraft:.*/)
    logs.forEach(log => {
      if (!blacklist.test(log)) event.add('minecraft:logs_that_burn', log)
    })
    event.removeAll('totemic:cedar_logs')
    event.add('totemic:cedar_logs', '#tfc:white_cedar_logs')
})

ServerEvents.entityLootTables( event => {
  event.modifyEntity('tfc:wildebeest', table => {
    table.addPool(pool => {
      pool.addItem('totemic:buffalo_tooth', 1, [0, 2])
      pool.addItem('totemic:buffalo_hide', 1, [0, 2])
    })
  })
  event.modifyEntity('tfc:yak', table => {
    table.addPool(pool => {
      pool.addItem('totemic:buffalo_tooth', 1, [0, 2])
      pool.addItem('totemic:buffalo_hide', 1, [0, 2])
    })
  })
  event.modifyEntity('tfc:musk_ox', table => {
    table.addPool(pool => {
      pool.addItem('totemic:buffalo_tooth', 1, [0, 2])
      pool.addItem('totemic:buffalo_hide', 1, [0, 2])
    })
  })
})