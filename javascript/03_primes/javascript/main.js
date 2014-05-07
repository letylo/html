function primes(){
    var num = 10
    var primes = {}
    var next_prime = 1

    primes[0] = 2

    for (var candidato = 3; next_prime<num; candidato++){
	var be_prime = 1;

	for (var pos_prime = 0; be_prime && pos_prime < next_prime; pos_prime++)
	if (candidato % primes[pos_prime] == 0)
	    be_prime = 0;
	if (be_prime)
	    primes[next_prime++] = candidato
    }

    for (var print=0; print<num; print++){
    document.getElementById("prime").innerHTML=primes[print];
	}
}
