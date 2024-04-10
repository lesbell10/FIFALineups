import {
    four_two_three_one,
    four_three_three,
    four_three_three_false_nine,
    four_four_two,
    four_three_one_two,
    four_three_two_one,
    three_four_two_one,
    three_four_three,
    baseTwo
} from '/Formations/Formations.js'

const fourTwoThreeOne = document.querySelector('.four-two-three-one')
const fourThreeThree = document.querySelector('.four-three-three')
const fourThreeThreeFalseNine = document.querySelector('.four-three-three-false')
const fourFourTwo = document.querySelector('.four-four-two')
const fourThreeOneTwo = document.querySelector('.four-three-one-two')
const fourThreeTwoOne = document.querySelector('.four-three-two-one')
const threeFourTwoOne = document.querySelector('.three-four-two-one')
const threeFourThree = document.querySelector('.three-four-three')
const threeFourOneTwo = document.querySelector('.three-four-one-two')

const base_Two = document.querySelector('.baseTwo')

fourTwoThreeOne.addEventListener('click', () => {
    four_two_three_one('ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo',)
});

fourThreeThree.addEventListener('click', () => {
    four_three_three('ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo',)
})

fourThreeThreeFalseNine.addEventListener('click', () => {
    four_three_three_false_nine('ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo',)
})

fourFourTwo.addEventListener('click', () => {
    four_four_two('ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo',)
})

fourThreeOneTwo.addEventListener('click', () => {
    four_three_one_two('ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo',)
})

fourThreeTwoOne.addEventListener('click', () => {
    four_three_two_one('ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo',)
})

threeFourTwoOne.addEventListener('click', () => {
    three_four_two_one('ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo',)
})

threeFourThree.addEventListener('click', () => {
    three_four_three('ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo',)
})

threeFourOneTwo.addEventListener('click', () => {
    three_four_three('ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo', 'ronaldo',)
})



base_Two.addEventListener('click', () => {
    baseTwo()
})