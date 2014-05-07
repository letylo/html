function summary(){
    var hash = {}

    hash[letra] = hash[letra] || 0
    hash[letra]++
    document.getElementById("frequency_summary").innerHTML = hash[letra].length
    return hash
}

summary("pepe", "maria", "juan")
