function primes(){
    
    var primes = [2] 

    for (var candidate = primes[0] + 1; primes.length<100; candidate++){
	var be_prime = true

	for (var div_index=0; be_prime && div_index<primes.length; div_index++)

	    if(candidate % primes[div_index] == 0)
	       be_prime = false

    if(be_prime)
       document.getElementById("prime").innerHTML=primes[candidate]
	}
}
