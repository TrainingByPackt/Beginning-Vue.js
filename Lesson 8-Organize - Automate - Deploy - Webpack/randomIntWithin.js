export default function (min, max) {
if (min > max) {
throw new Error('min needs to be less or equal max')
}
return Math.floor(Math.random() * max) + min
}


