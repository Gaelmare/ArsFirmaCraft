// priority: 1

ServerEvents.recipes(event => {

  event.replaceInput(
    { input: 'totemic:cedar_planks' },
    'totemic:cedar_planks',
    'tfc:wood/planks/white_cedar'
    )

  event.replaceInput(
    { input: 'totemic:buffalo_hide' },
    'totemic:buffalo_hide',
    'minecraft:leather'
    )

event.recipes.tfc.anvil('2x totemic:iron_bells', 'tfc:metal/ingot/wrought_iron', ['draw_not_last','upset_not_last','bend_last']).tier(3)

//event.replaceInput({output: 'chalk:chalk_box'}, 'minecraft:paper', 'tfc:unrefined_paper')

event.shaped('4x chalk:white_chalk', [
  'BC',
  'B ',
], {
  B: 'tfc:brick/chalk',
  C: '#tfc:chisels'
}
).damageIngredient(Ingredient.of('#tfc:chisels'))



})