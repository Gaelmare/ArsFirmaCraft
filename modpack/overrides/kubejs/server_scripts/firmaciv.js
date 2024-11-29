// priority: 1

ServerEvents.recipes(event => {

  event.replaceInput(
    { input: 'minecraft:compass'},
    'minecraft:compass',
    'firmaciv:firmaciv_compass'
  )
  
})