let button = document.getElementById("create");
button.addEventListener("click", generate(), true);

let input = {
	water: document.getElementById("water"),
	boreal: document.getElementById("boreal"),
	desert: document.getElementById("desert"),
	noise: document.getElementById("noise"),
	biomReliance : document.getElementById("reliance"),
	
	change: function(){
		generate();
	}
}

input.water.oninput = input.change;
input.desert.oninput = input.change;
input.boreal.oninput = input.change;

function generate(){

    let canvas = document.getElementById('canv');
    let ctx = canvas.getContext('2d');

    let width = 600;
    let height = 600;

    canvas.width = width;
    canvas.height = height;

    //ctx.fillStyle = "red";
    //ctx.fillRect(1, 1, width, height);
    noise.seed(document.getElementById("seed").value);
	let row = new Array(height);
	
    let map = new Array(width);
	let biom = new Array(width);
	let objects = new Array(width);
	
    /*let waterLevel = document.getElementById("water").value;
    let borealLevel = document.getElementById("boreal").value;
    let desertLevel = document.getElementById("desert").value;
	let noiseLevel = document.getElementById("noise").value;
	let biomReliance = document.getElementById("reliance").value;*/

	let level = {
		water: document.getElementById("water").value,
		boreal: document.getElementById("boreal").value,
		desert: document.getElementById("desert").value,
		noise: document.getElementById("noise").value,
		biomReliance : document.getElementById("reliance").value,
		shader: document.getElementById("shader").checked,

		shaderCreate: function(x,y){ 
			if((map[x][y] < map[x][y-1] || map[x][y] < map[x][y-2] || map[x][y] < map[x][y-3]) && map[x][y] < this.boreal){
				return 1;
			}
			else return 0;
		}
	}


    for(let x = 0; x < width; x++){
        map[x] = row;
		biom[x] = row;
		
    }
	
    for(let x = 0; x < width; x++){
        for(let y = 0; y < height; y++){
            map[x][y] = Math.floor(Math.abs(noise.perlin3(x / level.noise, y / level.noise, 1/level.noise))*100);	
			
            if(map[x][y]>=0 && map[x][y]<level.water){
                ctx.fillStyle = 'rgb(116, 201, 216)';
                ctx.fillRect(x, y, 1, 1);
            }
			else{
				map[x][y] = Math.floor(Math.abs(noise.perlin3(x / level.noise, y / level.noise, level.biomReliance/level.noise))*100);
				
				if(map[x][y]<level.desert){
					ctx.fillStyle = 'rgb(240,229,93)';
					ctx.fillRect(x, y, 1, 1);
				}
				if(map[x][y] >= level.desert && map[x][y]<level.boreal){
					ctx.fillStyle = 'rgb(142, 214, 90)';
					ctx.fillRect(x, y, 1, 1);
				}
				if(map[x][y] >= level.boreal && map[x][y]<100){
					ctx.fillStyle = "grey";
					ctx.fillRect(x, y, 1, 1);
				}	
				
				if(level.shader == true){
					if(level.shaderCreate(x,y) == 1){
						ctx.fillStyle = 'rgba(0,0,0,0.4)';
						ctx.fillRect(x, y, 1, 1);
					}
				}
			}
        }
    }
}
function premake(){
	
	
	
	
	
}