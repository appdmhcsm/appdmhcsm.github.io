//DEFAULT POSITON OF USER IS AT X=0, Y=1, Z=5
let world;
let userSpeed =0.1;
let light1, light2;
let pos;
let animals=[];

let text, robot, dog, dino, tree, island, building, castle, balloon, box, sphere1, sphere2;

function setup() {
	world = new World('VRScene');
	world.setBackground(173, 216, 230);
//0* SET USER AT HEIGHT= 15 METER, 50 METER AWAY FROM SCREE 
 	world.setUserPosition(0,15,50);

	world.setFlying(true);

 var text = new Text({
      text: 'DMHCSM Jubilee ',
      red: 128, green: 128, blue: 128,
      side: 'double',
      x: -20, y:60, z:-30,
      scaleX: 200, scaleY: 200, scaleZ: 200
   });
   
   world.add(text);

//***** START FOR LOOP TO ADD OBJECTS ******************************
for (var r = 0; r < 3; r++) { 	
	for (var i = 0; i < 17; i++) {
		var x = random(-60, 50);
		var z = random(-30, 70);

//&&&&& DINO START &&&&&&&&&&&&
	animals[i] = new GLTF({
		asset: i,
		scaleX:1,
		scaleY:1,
		scaleZ:1,
		rotationY:-90,
		x:x,
		y:0.5,
		z:z-5,
	});

	world.add(animals[i]); 
//&&&&& DINO END &&&&&&&&&&&&&
//@@@@@ TREE START @@@@@@@@@@@
	tree = new GLTF({
		asset: 'tree',
		scaleX:1.5,
		scaleY:1,
		scaleZ:1.5,
		x: x+2,
		y: -1,
		z: z-2
	});
	world.add(tree)
//@@@@@ TREE END @@@@@@@@@@@
}

}  //***** END FOR LOOP TO ADD OBJECTS ******************************

//THE FOLLOWING ADD INDIVIDUAL OBJECTS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//1* ROBOT START
	robot = new OBJ({
		asset: 'robot_obj',
		mtl: 'robot_mtl',
		x: 15,
		y: 20,
		z: -15,
		rotationX:0,
		rotationY:180,
		scaleX:10,
		scaleY:10,
		scaleZ:10,
	});
	world.add(robot);
//ROBOT END

//2* PLANE START
/*
	var g = new Plane({
						x:0, 
						y:0, 
						z:0,
						width:100, height:100,
						asset: 'stone',
						repeatX: 100,
						repeatY: 100,
						rotationX:-90, metalness:0.25
					   });
	world.add(g);
*/
//PLANE END

//3* BUILDING START *****
	building = new GLTF({
		asset: 'building',
		x: -50,
		y: 0.2,
		z: -100,
		scaleX:0.05,
		scaleY:0.2,
		scaleZ:0.08,
		rotationY:-90,
	});
	world.add(building); 
//BUILDING END *****

//4* ISLAND START *****
	island = new GLTF({
		asset: 'island',
		x: 2,
		y:-2,
		z: -5,
		scaleX:70,
		scaleY:3,
		scaleZ:70,
	});
	world.add(island); 
//ISLAND END *****

//5* DOG START
	dog = new GLTF({
		asset: 'dog',
		x: -15,
		y: 20,
		z: -15,
		rotationY:-90,
		scaleX:10,
		scaleY:10,
		scaleZ:10,
	});
	world.add(dog); 
//DOG END

//6* CASTLE START *****
	castle = new GLTF({
		asset: 'castle',
		x: 80,
		y: 1,
		z: 20,
		scaleX:70,
		scaleY:35,
		scaleZ:70,
	});
	world.add(castle); 
//CASTLE END *****

//7* BOX START *****
   box = new Box({
 	  x: 2, 
 	  y: 10, 
 	  z: -20,
      width: 0.5, 
      depth: 0.5, 
      height: 0.5, 
      red:255, 
      green:0, 
      blue:0,
    });
    world.add(box);
//BOX END *****

//8* BALLOON START *****
	balloon = new GLTF({
		asset: 'balloon',
		x: 2,
		y: 10,
		z: -20,
		scaleX:1,
		scaleY:1,
		scaleZ:1,
		rotationY:180
	});
	world.add(balloon); 
//BALLOON END *****

//9a* SPHERE1 START *****
   sphere1 = new Sphere({
 	  x: 2, 
 	  y: 15, 
 	  z: -10,
      radus:1, 
      red:0, 
      green:255, 
      blue:0,
      	clickFunction: function(theBox) {
			theBox.setColor( random(255), random(255), random(255) );
			world.slideToObject( theBox, 5000 ); //IN 5 SECONDS
		}//END CLICK FUNCTION ===============
    });
    world.add(sphere1);
//SPHERE1 END *****

//9b* SPHERE2 START *****
   sphere2 = new Sphere({
 	  x: 75, 
 	  y: 15, 
 	  z: 0,
      radus:1, 
      red:0, 
      green:255, 
      blue:0,
      	clickFunction: function(theBox) {		
			theBox.setColor( random(255), random(255), random(255) );
			world.slideToObject( theBox, 5000 );
		}//END CLICK FUNCTION ===============
    });
    world.add(sphere2);
//SPHERE2 END *****
 
}  //END SETUP =======================

function draw() {
	dog.spinY(2);
	robot.spinY(2);

    pos = world.getUserPosition();
    box.setPosition(pos.x+2, pos.y, pos.z-3);
    balloon.setPosition(pos.x+2, pos.y, pos.z-3);
     
} //END DRAW ===============
