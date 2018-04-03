<template>
<div>
Swears: {{counter}} $$
<button @click="counter++">+</button>
</div>
</template>
<script>
export default {
name: 'swear-jar',
data () {
return { counter: 0 }
}
}
</script>
