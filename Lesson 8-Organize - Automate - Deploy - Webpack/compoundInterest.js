export default function (Principal, yearlyRate, years) { const P = Principal
const r = yearlyRate
const t = years
return P * Math.pow((1 + r), t)
}
