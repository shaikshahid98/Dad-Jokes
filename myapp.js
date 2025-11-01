const joke = document.getElementById('joke');
const btn  = document.getElementById('jokebtn');


btn.addEventListener('click',gen_joke);

gen_joke();
function gen_joke ()
{
	const config = {
		headers:{
			Accept: 'application/json',
		},
	}
	consoe.logg("Test log");
	fetch('https://icanhazdadjoke.com/',config).
	then((res) => res.json()).then((data)=>{
		joke.innerHTML = data.joke;
	})
}

