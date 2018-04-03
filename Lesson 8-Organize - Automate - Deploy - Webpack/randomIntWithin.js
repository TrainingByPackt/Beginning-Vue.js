export default function (min, max) {
if (min > max) {
throw new Error('min needs to be less or equal max')
}
return Math.floor(Math.random() * max) + min
}


<template>
<div id="app">
<h1>Magic dice</h1>
<button @click="throwDice">Throw!</button>
{{number}}
</div>
</template>

<script>
import randomIntWithin from './randomIntWithin'
export default {
name: 'app',
data () {
return {
number: undefined
}
},
methods: {
throwDice () {
this.number = randomIntWithin(1, 6)
}
}
}
</script>
