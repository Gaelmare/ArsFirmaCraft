// priority: 1
ServerEvents.tags('block', event => {
  event.add('minecraft:mineable/pickaxe', 'firmaciv:cleat')
})

ServerEvents.recipes(event => {

  event.replaceInput(
    { input: 'minecraft:compass'},
    'minecraft:compass',
    'firmaciv:firmaciv_compass'
  )
  
})