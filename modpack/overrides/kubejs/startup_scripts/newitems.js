// priority: 0

StartupEvents.registry('item', event =>
{
/*
        Add Items
*/

// TFC
event.create('sugarcane_strip').displayName('Sugarcane Strip')
event.create('black_steel_chain_mesh').displayName('Black Steel Chain Mesh')
event.create('blue_steel_chain_mesh').displayName('Blue Steel Chain Mesh')
event.create('red_steel_chain_mesh').displayName('Red Steel Chain Mesh')
event.create('steel_chain_mesh').displayName('Steel Chain Mesh')
event.create('dust_zinc').displayName('Zinc Grit')
// Supplementaries
event.create('candle_holder').displayName('Empty Candle Holder')
})

ItemEvents.modification(event => {
event.modify('tfc:ore/bituminous_coal', item => {
  item.burnTime = 1600
})
event.modify('tfc:ore/lignite', item => {
  item.burnTime = 1600
})
})


